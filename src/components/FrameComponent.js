import styles from "./FrameComponent.module.css";
const FrameComponent = ({ onClose }) => {
  return (
    <div className={styles.thmNngTriParent}>
      <button className={styles.thmNngTri1}>Thêm nông trại</button>
      <button className={styles.thmNngTri1}>Sửa nông trại</button>
    </div>
  );
};

export default FrameComponent;
