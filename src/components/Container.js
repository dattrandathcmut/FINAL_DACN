import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container.module.css";
const Container = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/farm-overview");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/farm-overview");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/farm-overview");
  }, [navigate]);

  const onViewFullDetailsClick = useCallback(() => {
    navigate("/farm-overview");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.rectangleWrapper} onClick={onGroupContainerClick}>
        <button className={styles.groupItem} onClick={onRectangleButtonClick} />
      </div>
      <button className={styles.groupInner} onClick={onRectangleButton1Click} />
      <img className={styles.groupInner} alt="" src="/undefined8.png" />
      <div className={styles.viewFullDetails1} onClick={onViewFullDetailsClick}>
        View full details
      </div>
      <b className={styles.nngTri11}>Nông trại 1</b>
      <div className={styles.aaaa}>
        <ul className={styles.tngSThitB3ThiTit}>
          <li className={styles.tngSThit}>Tổng số thiết bị : 3</li>
          <li className={styles.tngSThit}>Thời tiết hiện tại : Nắng nhẹ</li>
          <li className={styles.tngSThit}>Loại cây trồng : Cà chua</li>
        </ul>
      </div>
      <div className={styles.text1}>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
    </div>
  );
};

export default Container;
