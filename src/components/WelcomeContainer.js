import { useCallback } from "react";
import GroupComponent2 from "./GroupComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomeContainer.module.css";
const WelcomeContainer = () => {
  const navigate = useNavigate();

  const onRegisterText1Click = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.welcomeToCultifyContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.cultify}>Cultify</span>
      </div>
      <div className={styles.haveAnAccountContainer}>
        <span>{`Have an account `}</span>
        <span className={styles.span}>{`? `}</span>
        <span className={styles.login}>Login</span>
      </div>
      <div className={styles.register}>Register</div>
      <GroupComponent2
        enterYourEmailAddress="Enter your email address"
        examplegmailcom="example@gmail.com"
        groupDivPosition="absolute"
        groupDivTop="392px"
        groupDivLeft="63px"
        groupDivBorderRadius="15px"
        rectangleDivBorder="1px solid var(--color-dodgerblue)"
      />
      <GroupComponent2
        enterYourEmailAddress="Contact number"
        examplegmailcom="Contact number"
        groupDivPosition="absolute"
        groupDivTop="279px"
        groupDivLeft="57px"
        groupDivBorderRadius="15px"
        rectangleDivBorder="1px solid var(--color-dodgerblue)"
      />
      <GroupComponent2
        groupDivPosition="absolute"
        groupDivTop="497px"
        groupDivLeft="63px"
        groupDivBorderRadius="15px"
      />
      <button className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.register1} onClick={onRegisterText1Click}>
          Register
        </div>
      </button>
    </div>
  );
};

export default WelcomeContainer;
