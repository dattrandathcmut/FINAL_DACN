import { useState, useEffect, useCallback } from 'react';
import FrameComponent from '../components/FrameComponent';
import PortalPopup from '../components/PortalPopup';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import styles from './Frame.module.css';
import Table from './../components/Table';

const Frame = () => {
	const [isFrameOpen, setFrameOpen] = useState(false);
	const navigate = useNavigate();
	const [items, setItems] = useState([]);

	const onRectangle1Click = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const onTngQuanNngClick = useCallback(() => {
		navigate('/frame-36');
	}, [navigate]);

	const onNngSutDClick = useCallback(() => {
		navigate('/frame-38');
	}, [navigate]);

	const onRectangle8Click = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const openFrame = useCallback(() => {
		setFrameOpen(true);
	}, []);

	const closeFrame = useCallback(() => {
		setFrameOpen(false);
	}, []);

	const onFrameButtonClick = useCallback(() => {
		navigate('/frame-35');
	}, [navigate]);

	const onBackTextClick = useCallback(() => {
		navigate('/frame-35');
	}, [navigate]);

	const onRectangleButtonClick = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const fetchData = useCallback(async () => {
		fetch('http://localhost:5000/api/data', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log('hi', data);
				setItems(data);
			})
			.catch((error) => console.error(error));
	}, []);
	const columns = [
		{ field: 'id', header: 'ID' },
		{ field: 'temperature', header: 'Nhiệt độ' },
		{ field: 'humidity', header: 'Độ ẩm' },
		{ field: 'soilMoisture', header: 'Độ ẩm đất' },
		{ field: 'ts', header: 'Thời gian ghi' },

	];
	useEffect(() => {
		fetchData(); // Fetch data immediately on component mount
		const fetchDataInterval = setInterval(fetchData, 5000); // Then fetch data every 5 seconds

		// Clean up the interval on unmount
		return () => clearInterval(fetchDataInterval);
	}, [fetchData]);
	return (
		<>
			<div className={styles.frameParent}>
				<div className={styles.frameGroup}>
					<div className={styles.frameDiv}>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.frameItem} onClick={onRectangle1Click} />
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
								sideBarLeft='2px'
								sideBarBorderRadius='0px var(--br-31xl) 0px 0px'
								rectangleDivBackgroundColor='1px solid #1b4332'
							/>
							<b className={styles.text11} />
							<img className={styles.frameInner} alt='' src='/line-16.' />
							<button
								className={styles.tngQuanNng1}
								onClick={onTngQuanNngClick}
							>
								Tổng quan nông trại
							</button>
							<button className={styles.nngSutD1} onClick={onNngSutDClick}>
								{' '}
								Năng suất dự kiến
							</button>
							<button className={styles.thngK1}> Thống kê</button>
							<button className={styles.giNng1}> Gợi ý năng suất</button>
							<div
								className={styles.rectangleDiv}
								onClick={onRectangle8Click}
							/>

							<select className={styles.alignJustify1} onClick={openFrame} />
							<b className={styles.nngTri11}>Nông trại 1</b>
						</div>
					</div>
					<div className={styles.chart6}>
						<div className={styles.container6} />
						<b className={styles.cardTitle}>Ánh sáng</b>
					</div>
					<div className={styles.chart5}>
						<div className={styles.container6} />
						<b className={styles.amount}>7,5</b>
						<b className={styles.cardTitle1}>Độ PH đất</b>
					</div>
					<div className={styles.chart4}>
						<div className={styles.container6} />
						<div className={styles.growthInfo1}>
							<div className={styles.growthPercentage}>
								<img
									className={styles.arrowIcon4}
									alt=''
									src='/undefined.png'
								/>
								<div className={styles.number}>+21.01%</div>
							</div>
							<b className={styles.amount1}>71,01%</b>
						</div>
						<b className={styles.cardTitle2}>Độ ẩm đất</b>
					</div>

					<button className={styles.backWrapper} onClick={onFrameButtonClick}>
						<div className={styles.back} onClick={onBackTextClick}>
							Back
						</div>
					</button>
					<div className={styles.frameWrapper} data-scroll-to='frameContainer'>
						<div className={styles.historyParent}>
							{/* <div className={styles.history}>{`History `}</div> */}
							<span className={styles.result}>Kết quả: {items.result}</span>
							<Table data={items} columns={columns} />

							{/* <div>{items.data}</div> */}
							
							{/* <div className={styles.sThT1}>Số thứ tự</div>
							<div className={styles.date}>Date</div>
							<div className={styles.mKhngKh1}>Độ ẩm không khí</div>
							<div className={styles.mT}>Độ ẩm đất</div>
							<div className={styles.div}>
								<p className={styles.p}>#41</p>
							</div>
							<div className={styles.div1}>
								<p className={styles.p}>#41</p>
							</div>
							<div className={styles.div2}>#41</div>
							<div className={styles.div3}>#41</div>
							<div className={styles.t152219000z}>2023-12-08T15:22:19.000Z</div>
							<div className={styles.div4}>72</div>
							<div className={styles.div5}>72</div>
							<div className={styles.div6}>72</div>
							<div className={styles.div7}>72</div>
							<div className={styles.t152219000z1}>
								2023-12-08T15:22:19.000Z
							</div>
							<div className={styles.t152219000z2}>
								2023-12-08T15:22:19.000Z
							</div>
							<div className={styles.t152219000z3}>
								2023-12-08T15:22:19.000Z
							</div>
							<div className={styles.nhit}>Nhiệt độ</div>
							<div className={styles.nhSng}>Ánh sáng</div>
							<div className={styles.div8}>27.6</div>
							<div className={styles.div9}>27.6</div>
							<div className={styles.div10}>27.6</div>
							<div className={styles.div11}>27.6</div>
							<div className={styles.div12}>63</div>
							<div className={styles.div13}>63</div>
							<div className={styles.div14}>63</div>
							<div className={styles.div15}>63</div> */}
						</div>
					</div>
				</div>
			</div>
			{isFrameOpen && (
				<PortalPopup
					overlayColor='rgba(113, 113, 113, 0.3)'
					placement='Centered'
					onOutsideClick={closeFrame}
				>
					<FrameComponent onClose={closeFrame} />
				</PortalPopup>
			)}
		</>
	);
};

export default Frame;
