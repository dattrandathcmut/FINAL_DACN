import { useMemo } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent = ({
  firstName,
  userName,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={styles.firstNameParent} style={groupDivStyle}>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.componentChild} />
      <div className={styles.userName}>{userName}</div>
    </div>
  );
};

export default GroupComponent;
