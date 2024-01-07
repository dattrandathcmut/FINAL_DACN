import { useEffect } from 'react';
import SideBar from '../components/SideBar';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import styles from './Frame3.module.css';
const Frame3 = () => {
	const token = sessionStorage.getItem('token');
	const navigate = useNavigate();
	console.log(token);
	useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token || token =="undefined") {
			navigate('/404');
        }
    }, [navigate]);

	return (
		<div className={styles.groupParent}>
			<div className={styles.groupDiv}>
				<div className={styles.rectangleParent}>
					<div className={styles.groupChild} />
					<div className={styles.rectangleGroup}>
						<div className={styles.groupItem} />
					</div>
					<SideBar
						icon='/icon1.png'
						showNavLinks={false}
						showRectangleDiv={false}
						rectangleDivVisible={false}
						rectangleDivVisible1={false}
						rectangleDivVisible2={false}
						rectangleDivVisible3={false}
						sideBarBackground='linear-gradient(180deg, #055a05 99.99%, #6930c3)'
						sideBarWidth='303px'
						sideBarHeight='900px'
						sideBarPosition='absolute'
						sideBarTop='121px'
						sideBarLeft='781.5px'
						sideBarBorderRadius='0px var(--br-31xl) 0px 0px'
						rectangleDivBackgroundColor='1px solid #1b4332'
					/>
					<b className={styles.text2} />
					<img className={styles.lineIcon} alt='' src='/undefined6.png' />
					<div className={styles.thngTinChung1}>Thông tin chung</div>
					<div className={styles.text3}>
						<p className={styles.blankLine}>&nbsp;</p>
					</div>
				</div>
				<Container />
			</div>
		</div>
	);
};

export default Frame3;
