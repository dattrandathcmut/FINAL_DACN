import { useState, useEffect, useCallback } from 'react';

import FrameComponent from '../components/FrameComponent';
import PortalPopup from '../components/PortalPopup';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import styles from './Frame.module.css';
import Table from './../components/Table';

const Frame = () => {
	const [isFrameOpen, setFrameOpen] = useState(false);
	const [environmentData, setEnvironmentData] = useState({});
	const [items, setItems] = useState([]);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const token = sessionStorage.getItem('token');

	const navigate = useNavigate();

	const onTngQuanNngClick = useCallback(() => {
		navigate('/farm-overview');
	}, [navigate]);

	const onNngSutDClick = useCallback(() => {
		navigate('/expected-productivity');
	}, [navigate]);

	const openFrame = useCallback(() => {
		setFrameOpen(true);
	}, []);

	const closeFrame = useCallback(() => {
		setFrameOpen(false);
	}, []);

	const onFrameButtonClick = useCallback(() => {
		navigate('/main');
	}, [navigate]);

	const onBackTextClick = useCallback(() => {
		navigate('/main');
	}, [navigate]);

	// Fetch data current
	const fetchDataCurrent = useCallback(async () => {
		try {
			const response = await fetch('http://localhost:5000/api/data', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
			});
			const json = await response.json();
			setEnvironmentData(json.data[0]);
		} catch (error) {
			console.error('Error fetching data:', error);
			navigate('/404');
		}
	}, []);

	const totalPages = Math.ceil(items.result / limit);

	let pages = [];
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}
	useEffect(() => {
		fetchDataCurrent(); // Fetch data immediately on component mount
		const fetchDataInterval = setInterval(fetchDataCurrent, 5000); // Then fetch data every 5 seconds

		// Clean up the interval on unmount
		return () => clearInterval(fetchDataInterval);
	}, [fetchDataCurrent]);

	// Fetch Data table
	const fetchDataTable = useCallback(async () => {
		console.log('Page when fetch', page);
		try {
			const response = await fetch(
				`http://localhost:5000/api/data?page=${page}&limit=${limit}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + token,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					setItems(data);
				});
		} catch (error) {
			console.error('Error fetching data:', error);
			navigate('/404');
		}
	}, [page, limit]); // Track 'page' and 'limit' states

	useEffect(() => {
		fetchDataTable(); // Fetch data immediately on component mount
		const fetchDataInterval = setInterval(fetchDataTable, 5000); // Then fetch data every 5 seconds

		// Clean up the interval on unmount
		return () => clearInterval(fetchDataInterval);
	}, [fetchDataTable]); // Track 'fetchDataTable' function

	const columns = [
		{ field: 'id', header: 'ID' },
		{ field: 'temperature', header: 'Nhiệt độ' },
		{ field: 'humidity', header: 'Độ ẩm' },
		{ field: 'soilMoisture', header: 'Độ ẩm đất' },
		{ field: 'ts', header: 'Thời gian ghi' },
	];
	return (
		<>
			<div className={styles.frameParent}>
				<div className={styles.frameGroup}>
					<div className={styles.frameDiv}>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
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

							<select className={styles.alignJustify1} onClick={openFrame} />
							<b className={styles.nngTri11}>Nông trại 1</b>
						</div>
					</div>
					<div className={styles.chart6}>
						<div className={styles.container6} />
						<b className={styles.amount2}>{environmentData.temperature}°C</b>
						<b className={styles.cardTitle}>Nhiệt độ</b>
					</div>
					<div className={styles.chart5}>
						<div className={styles.container6} />
						<b className={styles.amount}>{environmentData.soilMoisture}%</b>
						<b className={styles.cardTitle1}>Độ ẩm đất</b>
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
							<b className={styles.amount1}>{environmentData.humidity}%</b>
						</div>
						<b className={styles.cardTitle2}>Độ ẩm</b>
					</div>

					<button className={styles.backWrapper} onClick={onFrameButtonClick}>
						<div className={styles.back} onClick={onBackTextClick}>
							Back
						</div>
					</button>
					<div className={styles.frameWrapper} data-scroll-to='frameContainer'>
						<div className={styles.historyParent}>
							<span className={styles.result}>
								<strong>Kết quả: </strong>
								{items.result}
							</span>
							<Table data={items} columns={columns} />
							<div>
								{pages.map((pageNumber) => (
									<button
										className={styles.button}
										key={pageNumber}
										onClick={() => {
											setPage(pageNumber);
											console.log('Set page', page);
										}}
										style={{
											backgroundColor:
												pageNumber === page ? '#4CAF50' : 'white',
											color: pageNumber === page ? 'white' : 'black',
										}}
									>
										{pageNumber}
									</button>
								))}
							</div>
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
