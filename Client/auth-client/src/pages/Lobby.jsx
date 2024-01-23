import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import styles from './styles2.module.css';
const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();


  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
     socket.emit("room:join", { email, room });
      console.log({
        email:email,
        room : room
      })
    },
    [email, room, socket] // socket]]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );
  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);


  return (
  //   <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg mt-10">
  //   <h1 className="text-3xl font-bold mb-4">Lobby</h1>
  //   <form onSubmit={handleSubmitForm} className="mb-4">
  //     <div className="mb-4">
  //       <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
  //         Email ID
  //       </label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label htmlFor="room" className="block text-gray-700 text-sm font-bold mb-2">
  //         Room Number
  //       </label>
  //       <input
  //         type="text"
  //         id="room"
  //         value={room}
  //         onChange={(e) => setRoom(e.target.value)}
  //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //       />
  //     </div>
  //     <button
  //       type="submit"
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //     >
  //       Join
  //     </button>
  //   </form>
  // </div>

  <div className={styles.login_container}>
  <div className={styles.login_form_container} style={{
    width: '50vw'
  }}>
    <div className={styles.left}>
      <form className={styles.form_container} onSubmit={handleSubmitForm}>
        <h1 style={{
          marginBottom:'40px'
        }}>Join the Room Here</h1>
        <input
        label="email"
        placeholder='email'
        type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    style={{
                      marginBottom:'20px'
                    }}
          className={styles.input}
        />
        <input
        label="Room ID"
        placeholder='Room ID'
                      type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
                 
          className={styles.input}
        />
      
        <button type="submit" className={styles.green_btn}>
         Join Room
        </button>
      </form>
    </div>
    
  </div>
</div>
  
  );
}
export default Lobby;