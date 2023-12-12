import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";
const GroupComponent1 = ({
  enterYourUsernameOrEmailA,
  usernameOrEmailAddress,
  showRectangleDiv,
  showUsernameOrEmail,
  groupDivWidth,
  groupDivHeight,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivBorderRadius,
  enterYourUsernameTop,
  rectangleDivHeight,
  rectangleDivTop,
  rectangleDivBorder,
  usernameOrEmailHeight,
  usernameOrEmailTop,
  usernameOrEmailLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      borderRadius: groupDivBorderRadius,
    };
  }, [
    groupDivWidth,
    groupDivHeight,
    groupDivPosition,
    groupDivTop,
    groupDivLeft,
    groupDivBorderRadius,
  ]);

  const enterYourUsernameStyle = useMemo(() => {
    return {
      top: enterYourUsernameTop,
    };
  }, [enterYourUsernameTop]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      height: rectangleDivHeight,
      top: rectangleDivTop,
      border: rectangleDivBorder,
    };
  }, [rectangleDivHeight, rectangleDivTop, rectangleDivBorder]);

  const usernameOrEmailStyle = useMemo(() => {
    return {
      height: usernameOrEmailHeight,
      top: usernameOrEmailTop,
      left: usernameOrEmailLeft,
    };
  }, [usernameOrEmailHeight, usernameOrEmailTop, usernameOrEmailLeft]);

  return (
    <div
      className={styles.enterYourUsernameOrEmailAParent}
      style={groupDiv1Style}
    >
      <div className={styles.enterYourUsername1} style={enterYourUsernameStyle}>
        {enterYourUsernameOrEmailA}
      </div>
      {showRectangleDiv && (
        <div className={styles.componentChild} style={rectangleDiv1Style} />
      )}
      {showUsernameOrEmail && (
        <div className={styles.usernameOrEmail1} style={usernameOrEmailStyle}>
          {usernameOrEmailAddress}
        </div>
      )}
    </div>
  );
};

export default GroupComponent1;
