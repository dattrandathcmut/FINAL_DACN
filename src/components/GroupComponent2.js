import { useMemo } from "react";
import styles from "./GroupComponent2.module.css";
const GroupComponent2 = ({
  enterYourEmailAddress,
  examplegmailcom,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivBorderRadius,
  rectangleDivBorder,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      borderRadius: groupDivBorderRadius,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft, groupDivBorderRadius]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <div className={styles.enterYourEmailAddressParent} style={groupDiv2Style}>
      <div className={styles.enterYourEmail1}>{enterYourEmailAddress}</div>
      <div className={styles.componentChild} style={rectangleDiv2Style} />
      <div className={styles.examplegmailcom}>{examplegmailcom}</div>
    </div>
  );
};

export default GroupComponent2;
