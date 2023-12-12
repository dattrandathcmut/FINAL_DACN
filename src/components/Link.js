import { useMemo } from "react";
import styles from "./Link.module.css";
const Link = ({ icon, dashboard, linkPadding, linkBoxSizing }) => {
  const linkStyle = useMemo(() => {
    return {
      padding: linkPadding,
      boxSizing: linkBoxSizing,
    };
  }, [linkPadding, linkBoxSizing]);

  return (
    <div className={styles.link} style={linkStyle}>
      <img className={styles.icon1} alt="" src={icon} />
      <div className={styles.dashboard}>{dashboard}</div>
    </div>
  );
};

export default Link;
