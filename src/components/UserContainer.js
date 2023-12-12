import { useMemo } from "react";
import SideBar from "./SideBar";
import styles from "./UserContainer.module.css";
const UserContainer = ({ linkLeft }) => {
  const groupDiv3Style = useMemo(() => {
    return {
      left: linkLeft,
    };
  }, [linkLeft]);

  return (
    <div className={styles.sideBarWrapper} style={groupDiv3Style}>
      <SideBar
        icon="/icon1.png"
        showNavLinks={false}
        showRectangleDiv={false}
        rectangleDivVisible={false}
        rectangleDivVisible1={false}
        rectangleDivVisible2={false}
        rectangleDivVisible3={false}
        sideBarBackground="linear-gradient(180deg, #055a05 99.99%, #6930c3)"
        sideBarWidth="303px"
        sideBarHeight="900px"
        sideBarPosition="absolute"
        sideBarTop="0px"
        sideBarLeft="0px"
        sideBarBorderRadius="0px var(--br-31xl) 0px 0px"
        rectangleDivBackgroundColor="1px solid #1b4332"
      />
    </div>
  );
};

export default UserContainer;
