import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent2 from "./GroupComponent2";
import styles from "./WelcomeContainer1.module.css";
const WelcomeContainer1 = () => {
  const navigate = useNavigate();

  const onNoAccountClick = useCallback(() => {
    navigate("/frame-33");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/desktop-23");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.welcomeToCultifyContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.cultify}>Cultify</span>
      </div>
      <div className={styles.noAccountContainer} onClick={onNoAccountClick}>
        <span>{`No Account `}</span>
        <span className={styles.span}>{`? `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
      <div className={styles.login}>Login</div>
      <GroupComponent2
        groupDivPosition="absolute"
        groupDivTop="199px"
        groupDivLeft="63px"
        groupDivBorderRadius="15px"
      />
      <GroupComponent2
        groupDivPosition="absolute"
        groupDivTop="309px"
        groupDivLeft="63px"
        groupDivBorderRadius="15px"
      />
      <div
        className={styles.forgotPassword}
        onClick={onForgotPasswordTextClick}
      >
        Forgot Password
      </div>
      <button className={styles.rectangleGroup} onClick={onGroupButtonClick}>
        <div className={styles.groupItem} />
        <div className={styles.signIn}>Sign in</div>
      </button>
    </div>
  );
};

export default WelcomeContainer1;
