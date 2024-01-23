import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import laji from '../lanja.jpg'
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover the Perfect Chat Partner <br className="sm:block hidden" /> in Just a Few Simple Clicks.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Finding the right video chat app should be a breeze. Our platform is designed to match you with the ideal video chatting experience. No more sifting through endless options - we've got you covered.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={laji} alt="billing" className="w-[60%] h-[70%] rounded-[20px]" />
    </div>
  </section>
);

export default CardDeal;
