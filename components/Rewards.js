import Link from "next/link";
import rewards from "../styles/Rewards.module.css";

const Rewards = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <Link href="/rewards">
      <div className={rewards.container}>
        <div className={rewards.box}>
          <span onMouseEnter={clickableEnter} onMouseLeave={justLeave}>
            CHECK OUT MINT REWARDS!
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Rewards;
