import { useMemo } from "react";
import Link from "./Link";
import styles from "./SideBar.module.css";
const SideBar = ({
  icon,
  showNavLinks,
  showRectangleDiv,
  rectangleDivVisible,
  rectangleDivVisible1,
  rectangleDivVisible2,
  rectangleDivVisible3,
  sideBarBackground,
  sideBarWidth,
  sideBarHeight,
  sideBarPosition,
  sideBarTop,
  sideBarLeft,
  sideBarBorderRadius,
  rectangleDivBackgroundColor,
}) => {
  const sideBarStyle = useMemo(() => {
    return {
      background: sideBarBackground,
      width: sideBarWidth,
      height: sideBarHeight,
      position: sideBarPosition,
      top: sideBarTop,
      left: sideBarLeft,
      borderRadius: sideBarBorderRadius,
    };
  }, [
    sideBarBackground,
    sideBarWidth,
    sideBarHeight,
    sideBarPosition,
    sideBarTop,
    sideBarLeft,
    sideBarBorderRadius,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div className={styles.sideBar} style={sideBarStyle}>
      {showNavLinks && (
        <div className={styles.navLinks}>
          <Link
            icon="/icon.png"
            dashboard="Dashboard"
            linkPadding="unset"
            linkBoxSizing="unset"
          />
          <Link
            icon="/icon.png"
            dashboard="In Stock"
            linkPadding="0px var(--padding-8xs)"
            linkBoxSizing="border-box"
          />
          <Link
            icon="/icon.png"
            dashboard="Products"
            linkPadding="0px var(--padding-8xs)"
            linkBoxSizing="border-box"
          />
          <Link
            icon="/icon.png"
            dashboard="Sales"
            linkPadding="0px var(--padding-8xs)"
            linkBoxSizing="border-box"
          />
          <Link
            icon="/icon.png"
            dashboard="Orders"
            linkPadding="0px var(--padding-8xs)"
            linkBoxSizing="border-box"
          />
          <Link
            icon="/icon.png"
            dashboard="Users"
            linkPadding="0px var(--padding-8xs)"
            linkBoxSizing="border-box"
          />
        </div>
      )}
      <div className={styles.sideBarChild} style={rectangleDivStyle} />
      {showRectangleDiv && <div className={styles.sideBarItem} />}
      {rectangleDivVisible && <div className={styles.sideBarInner} />}
      {rectangleDivVisible1 && <div className={styles.rectangleDiv} />}
      {rectangleDivVisible2 && <div className={styles.sideBarChild1} />}
      {rectangleDivVisible3 && <div className={styles.sideBarChild2} />}
    </div>
  );
};

export default SideBar;
