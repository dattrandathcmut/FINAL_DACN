import SideBar from "../components/SideBar";
import Container from "../components/Container";
import styles from "./Frame3.module.css";
const Frame3 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />

          </div>
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
            sideBarTop="121px"
            sideBarLeft="781.5px"
            sideBarBorderRadius="0px var(--br-31xl) 0px 0px"
            rectangleDivBackgroundColor="1px solid #1b4332"
          />
          <b className={styles.text2} />
          <img className={styles.lineIcon} alt="" src="/undefined6.png" />
          <div className={styles.thngTinChung1}>Thông tin chung</div>

          <b className={styles.farmProjects}>Farm Projects</b>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild2} />
          <div className={styles.viewFullDetails1}>View full details</div>
          <b className={styles.nngTri11}>Nông trại 2</b>
          <div className={styles.aaaa}>
            <ul className={styles.tngSThitB3ThiTit}>
              <li className={styles.tngSThit}>Tổng số thiết bị : 3</li>
              <li className={styles.tngSThit}>Thời tiết hiện tại : mưa nhỏ</li>
              <li className={styles.tngSThit}>Loại cây trồng : dưa leo</li>
            </ul>
          </div>
          <div className={styles.text3}>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <img className={styles.groupChild4} alt="" src="/undefined8.png" />
        </div>
        <Container />
      </div>
    </div>
  );
};

export default Frame3;
