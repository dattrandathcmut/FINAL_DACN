import UserContainer from "../components/UserContainer";
import styles from "./Group.module.css";
const Group = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupWrapper}>
        <div className={styles.groupFrame}>
          <div className={styles.groupFrame}>
            <div className={styles.groupFrame}>
              <div className={styles.groupFrame}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupInner} />
                </div>
                <UserContainer />
                <b className={styles.text1} />
                <img className={styles.lineIcon} alt="" src="/line-16.png" />
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.farmProjects}>Farm Projects</div>
                <div className={styles.investments}>Investments</div>
                <div className={styles.profile}>Profile</div>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-2121.png"
                />
                <img
                  className={styles.cultifyHighResolutionLogoCIcon}
                  alt=""
                  src="/cultifyhighresolutionlogocolorontransparentbackground-1-1@2x.png"
                />
                <img
                  className={styles.alignJustifyIcon}
                  alt=""
                  src="/alignjustify.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupChild1} />
    </div>
  );
};

export default Group;
