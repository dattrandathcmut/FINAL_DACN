import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResetPasswordContainer from "../components/ResetPasswordContainer";
import styles from "./Frame4.module.css";
const Frame4 = () => {
  const navigate = useNavigate();

  const onFrame35Click = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  const onDesktop23Click = useCallback(() => {
    navigate("/desktop-23");
  }, [navigate]);

  return (
    <div className={styles.images1Parent}>
      <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
      <div className={styles.backWrapper}>
        <div className={styles.back}>Back</div>
      </div>
      <ResetPasswordContainer />
      <img
        className={styles.frameChild}
        alt=""
        src="/rectangle-208.png"
        onClick={onRectangleClick}
      />
    </div>
  );
};

export default Frame4;
