import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../context/SocketProvider";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [usersInRoom, setUsersInRoom] = useState([]);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
    setUsersInRoom(prevUsers => [...prevUsers, email]);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);
  const handleCallEnd = useCallback(() => {
    // Stop the local video stream
    myStream.getTracks().forEach((track) => track.stop());

    // Remove the remote video stream
    setRemoteStream(null);

    // Reset states
    setRemoteSocketId(null);
    setMyStream(null);
    setUsersInRoom(prevUsers => prevUsers.filter(user => user !== usersInRoom[0]));
  }, [myStream, usersInRoom] );

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    socket.on("call:ended", handleCallEnd)
    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      socket.off("call:ended", handleCallEnd)
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleCallEnd
  ]);

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Room Page</h1>
    <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
    {myStream && (
      <button
        onClick={sendStreams}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        Send Stream
      </button>
    )}
    {remoteSocketId && (
      <button
        onClick={handleCallUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        CALL
      </button>
    )}
    {myStream && (
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">My Stream</h1>
        <ReactPlayer playing muted height="100px" width="200px" url={myStream} />
      </div>
    )}
    {remoteStream && (
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">Remote Stream</h1>
        <ReactPlayer
          playing
          muted
          height="100px"
          width="200px"
          url={remoteStream}
        />
      </div>
    )}

    {remoteSocketId && (
      <button
        onClick={handleCallEnd}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        End Call
      </button>
    )}



 

  </div>
      

  );
};

export default RoomPage;