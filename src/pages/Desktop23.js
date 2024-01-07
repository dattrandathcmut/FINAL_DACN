import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordContainer from "../components/ForgotPasswordContainer";
import styles from "./Desktop23.module.css";
const Desktop23 = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop231}>
      <div className={styles.images1Parent}>
        <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
        <ForgotPasswordContainer />
        <img className={styles.groupChild} alt="" src="/rectangle-208.png" />
        <div className={styles.backWrapper}>
          <div className={styles.back} onClick={onBackTextClick}>
            Back
          </div>
        </div>
      </div>
      <b className={styles.ngDngQun1}>Ứng dụng quản lí nông trại</b>
    </div>
  );
};

export default Desktop23;
