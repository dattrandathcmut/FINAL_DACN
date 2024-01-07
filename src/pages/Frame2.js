import { useState, useCallback, useEffect } from 'react';
import FrameComponent from '../components/FrameComponent';
import PortalPopup from '../components/PortalPopup';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';
import styles from './Frame2.module.css';
const Frame2 = () => {
	const [isFrame1Open, setFrame1Open] = useState(false);
	const [environmentData, setEnvironmentData] = useState({});
	const [isOn, setIsOn] = useState(true);
	const navigate = useNavigate();
	const token = sessionStorage.getItem('token');

	const onNngSutDClick = useCallback(() => {
		navigate('/expected-productivity');
	}, [navigate]);

	const onThngKClick = useCallback(() => {
		navigate('/statistics');
	}, [navigate]);

	const openFrame1 = useCallback(() => {
		setFrame1Open(true);
	}, []);

	const closeFrame1 = useCallback(() => {
		setFrame1Open(false);
	}, []);

	const onBackTextClick = useCallback(() => {
		navigate('/main');
	}, [navigate]);
	const fetchData = useCallback(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/data', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
			});
			const json = await response.json();
			console.log(json.data[0]);
			setEnvironmentData(json.data[0]);
			console.log('I already get this data', json.data[0]);
		} catch (error) {
			console.error('Error fetching data:', error);
			navigate('/404');
		}
	}, []);

	useEffect(() => {
		fetchData(); // Fetch data immediately on component mount
		const fetchDataInterval = setInterval(fetchData, 5000); // Then fetch data every 5 seconds

		// Clean up the interval on unmount
		return () => clearInterval(fetchDataInterval);
	}, [fetchData]);

	const style = {
		button: {
			padding: '10px 20px',
			color: 'white',
			backgroundColor: isOn ? 'limegreen' : 'red',
			border: 'none',
			borderRadius: '5px',
			fontSize: '15px',
			cursor: 'pointer',
			position: 'absolute',
			top: '399px',
			left: '1280px',
			display: 'inline-block',
			// width: 105px;
			// height: 41px;
		},
	};
	const toggle = () => {
		setIsOn(!isOn);
	};
	return (
		<>
			<div className={styles.groupParent}>
				<div className={styles.groupDiv}>
					<div className={styles.groupParent1}>
						<div className={styles.groupParent2}>
							<div className={styles.rectangleParent}>
								<div className={styles.groupChild} />
								<div className={styles.groupItem} />
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
									sideBarTop='123px'
									sideBarLeft='0px'
									sideBarBorderRadius='0px var(--br-31xl) 0px 0px'
									rectangleDivBackgroundColor='1px solid #1b4332'
								/>
								<b className={styles.text12} />
								<img className={styles.groupInner} alt='' src='/line-16.png' />
								<button className={styles.tngQuanNng1}>
									Tổng quan nông trại
								</button>
								<button className={styles.nngSutD1} onClick={onNngSutDClick}>
									{' '}
									Năng suất dự kiến
								</button>
								<button className={styles.thngK1} onClick={onThngKClick}>
									{' '}
									Thống kê
								</button>
								<button className={styles.giNng1}> Gợi ý năng suất</button>
								{/* <div className={styles.rectangleDiv} /> */}

								<div className={styles.alignJustify} onClick={openFrame1}>
									<img
										className={styles.vectorIcon4}
										alt=''
										src='/undefined5.png'
									/>
									<img
										className={styles.vectorIcon5}
										alt=''
										src='/undefined5.png'
									/>
									<img
										className={styles.vectorIcon6}
										alt=''
										src='/undefined5.png'
									/>
									<img
										className={styles.vectorIcon7}
										alt=''
										src='/undefined5.png'
									/>
									<div className={styles.alignJustifyChild} />
								</div>
								<b className={styles.nngTri11}>Nông trại 1</b>
								<div className={styles.groupChild1} />
								<div className={styles.lineDiv} />
								<div className={styles.groupChild1} />
								<b className={styles.im1}>Điểm 1</b>
								<b className={styles.nhit}>Nhiệt độ</b>
								<b className={styles.mKhngKh6}>Độ ẩm không khí</b>
								<b className={styles.mT}>Độ ẩm đất</b>
								<b className={styles.f}> {environmentData.temperature}°C </b>
								<b className={styles.b}>{environmentData.humidity}%</b>
								<b className={styles.b1}>{environmentData.soilMoisture}%</b>
								<b className={styles.nhSng1}>Ánh sáng</b>
								<b className={styles.btn}>Máy bơm</b>
								<button style={style.button} onClick={toggle}>
									{isOn ? 'On' : 'Off'}
								</button>
								<div className={styles.lineDiv} />
								{/* <b className={styles.text14}>
									<p className={styles.blankLine}>&nbsp;</p>
								</b> */}
								{/* <b className={styles.text15}>
									<p className={styles.blankLine}>&nbsp;</p>
								</b> */}
								{/* <div className={styles.groupChild4} />
								<b className={styles.im3}>
									<p className={styles.blankLine}>Điểm 3</p>
								</b> */}
								{/* <b className={styles.nhit2}>Nhiệt độ</b>
								<b className={styles.mKhngKh8}>Độ ẩm không khí</b>
								<b className={styles.f2}>27F</b> */}
								{/* <div className={styles.groupChild5} />
								<b className={styles.nhit2}>Nhiệt độ</b>
								<b className={styles.mKhngKh8}>Độ ẩm không khí</b>
								<b className={styles.mT1}>Độ ẩm đất</b>
								<b className={styles.nhSng}>Ánh sáng</b>
								<b className={styles.f2}>27F</b>
								<b className={styles.b2}>70%</b>
								<b className={styles.b3}>10%</b>
								<div className={styles.groupChild5} /> */}
							</div>
							{/* <b className={styles.text16}>
								<p className={styles.blankLine}>&nbsp;</p>
							</b>
							<b className={styles.text17}>
								<p className={styles.blankLine}>&nbsp;</p>
							</b> */}
						</div>
						{/* <div className={styles.groupChild7} />
						<b className={styles.im2}>Điểm 2</b>
						<b className={styles.nhit4}>Nhiệt độ</b>
						<b className={styles.mKhngKh10}>Độ ẩm không khí</b>
						<b className={styles.f4}>27F</b>
						<div className={styles.groupChild8} /> */}

						<button className={styles.backWrapper}>
							<div className={styles.back} onClick={onBackTextClick}>
								Back
							</div>
						</button>
					</div>
					{/* <b className={styles.nhit4}>Nhiệt độ</b>
					<b className={styles.mKhngKh10}>Độ ẩm không khí</b>
					<b className={styles.mT2}>Độ ẩm đất</b>
					<b className={styles.nhSng2}>Ánh sáng</b>
					<b className={styles.f4}>27F</b>
					<b className={styles.b4}>70%</b>
					<b className={styles.b5}>10%</b> */}
					{/* <div className={styles.groupChild8} /> */}
				</div>
			</div>
			{isFrame1Open && (
				<PortalPopup
					overlayColor='rgba(113, 113, 113, 0.3)'
					placement='Centered'
					onOutsideClick={closeFrame1}
				>
					<FrameComponent onClose={closeFrame1} />
				</PortalPopup>
			)}
		</>
	);
};

export default Frame2;
