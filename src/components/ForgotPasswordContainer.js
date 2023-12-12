import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResetPasswordContainer1 from "./ResetPasswordContainer1";
import GroupComponent1 from "./GroupComponent1";
import styles from "./ForgotPasswordContainer.module.css";
const ForgotPasswordContainer = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.forgotPasswordWrapper}>
        <div className={styles.forgotPassword}>Forgot Password</div>
      </div>
      <ResetPasswordContainer1
        buttonText="Continue"
        propLeft="75px"
        onRectangle1Click={onRectangleClick}
      />
      <div className={styles.instanceParent}>
        <GroupComponent1
          usernameOrEmailAddress="example@gmail.com"
          showRectangleDiv
          showUsernameOrEmail={false}
          groupDivWidth="438px"
          groupDivHeight="97px"
          groupDivPosition="absolute"
          groupDivTop="88px"
          groupDivLeft="0px"
          groupDivBorderRadius="15px"
          enterYourUsernameTop="-2.16%"
          rectangleDivHeight="61.96%"
          rectangleDivTop="38.04%"
          rectangleDivBorder="1px solid var(--color-dodgerblue)"
          usernameOrEmailHeight="20.62%"
          usernameOrEmailTop="58.66%"
          usernameOrEmailLeft="5.55%"
        />
        <GroupComponent1
          enterYourUsernameOrEmailA="Enter your account email below, and we'll send a reset link"
          usernameOrEmailAddress="Create a secure password"
          showRectangleDiv={false}
          showUsernameOrEmail={false}
          groupDivWidth="451px"
          groupDivHeight="35px"
          groupDivPosition="absolute"
          groupDivTop="0px"
          groupDivLeft="0px"
          groupDivBorderRadius="15px"
          enterYourUsernameTop="-2.29%"
          rectangleDivHeight="62%"
          rectangleDivTop="38%"
          rectangleDivBorder="1px solid var(--color-darkgray)"
          usernameOrEmailHeight="20.57%"
          usernameOrEmailTop="58.57%"
          usernameOrEmailLeft="5.54%"
        />
        <GroupComponent1
          enterYourUsernameOrEmailA="Enter your email address"
          usernameOrEmailAddress="Create a secure password"
          showRectangleDiv={false}
          showUsernameOrEmail={false}
          groupDivWidth="451px"
          groupDivHeight="35px"
          groupDivPosition="absolute"
          groupDivTop="82px"
          groupDivLeft="0px"
          groupDivBorderRadius="15px"
          enterYourUsernameTop="-2.29%"
          rectangleDivHeight="62%"
          rectangleDivTop="38%"
          rectangleDivBorder="1px solid var(--color-darkgray)"
          usernameOrEmailHeight="20.57%"
          usernameOrEmailTop="58.57%"
          usernameOrEmailLeft="5.54%"
        />
        <div className={styles.backToLogin1}>Back to login</div>
      </div>
    </div>
  );
};

export default ForgotPasswordContainer;
