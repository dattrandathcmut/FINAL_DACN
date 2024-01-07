import { useMemo } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent = ({
  firstName,
  userName,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  inputValue,
  onInputChange,
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
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className={styles.componentChild}
      />
    </div>
  );
};

export default GroupComponent;
