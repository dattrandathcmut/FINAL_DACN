import { useCallback } from "react";
import WelcomeContainer from "../components/WelcomeContainer";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import styles from "./Frame5.module.css";
const Frame5 = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/desktop-22");
  }, [navigate]);

  return (
    <div className={styles.images2Parent}>
      <img className={styles.images2Icon} alt="" src="/images-1@2x.png" />
      <WelcomeContainer />
      <button className={styles.backWrapper}>
        <div className={styles.back} onClick={onBackTextClick}>
          Back
        </div>
      </button>
      <div className={styles.instanceParent}>
        <GroupComponent
          firstName="First name"
          userName="User name"
          groupDivPosition="absolute"
          groupDivTop="0px"
          groupDivLeft="0px"
        />
        <GroupComponent
          firstName="Last name"
          userName="Last name"
          groupDivPosition="absolute"
          groupDivTop="0px"
          groupDivLeft="247.7px"
        />
      </div>
    </div>
  );
};

export default Frame5;
