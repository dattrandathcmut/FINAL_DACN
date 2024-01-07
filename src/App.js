import {
	Routes,
	Route,
	useNavigationType,
	useLocation,
} from 'react-router-dom';
import FrameComponent1 from './pages/FrameComponent1';
import Frame from './pages/Frame';
import Frame1 from './pages/Frame1';
import Frame2 from './pages/Frame2';
import Frame3 from './pages/Frame3';
import Frame4 from './pages/Frame4';
import Frame5 from './pages/Frame5';
import NotFoundPage from './pages/NotFoundPage';
import Group from './pages/Group';
import Group1 from './pages/Group1';
import Desktop23 from './pages/Desktop23';
import Desktop22 from './pages/Desktop22';
import LineComponent from './pages/LineComponent';
import { useEffect } from 'react';

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (action !== 'POP') {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	useEffect(() => {
		let title = '';
		let metaDescription = '';

		switch (pathname) {
			case '/':
				title = '';
				metaDescription = '';
				break;
			case '/frame-37':
				title = '';
				metaDescription = '';
				break;
			case '/frame-38':
				title = '';
				metaDescription = '';
				break;
			case '/frame-36':
				title = '';
				metaDescription = '';
				break;
			case '/frame-35':
				title = '';
				metaDescription = '';
				break;
			case '/frame-34':
				title = '';
				metaDescription = '';
				break;
			case '/frame-33':
				title = '';
				metaDescription = '';
				break;
			case '/group-2611':
				title = '';
				metaDescription = '';
				break;
			case '/group-2613':
				title = '';
				metaDescription = '';
				break;
			case '/desktop-23':
				title = '';
				metaDescription = '';
				break;
			case '/desktop-22':
				title = '';
				metaDescription = '';
				break;
			case '/line-21':
				title = '';
				metaDescription = '';
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<Routes>
			<Route path='/' element={<Desktop22 />} />
			{/* <Route path='/signup' element={<Frame5 />} /> */}
			<Route path='/statistics' element={<Frame />} />
			<Route path='/expected-productivity' element={<Frame1 />} />
			<Route path='/farm-overview' element={<Frame2 />} />
			<Route path='/main' element={<Frame3 />} />
			<Route path='/reset-password' element={<Frame4 />} />
			<Route path='/register' element={<Frame5 />} />
			<Route path='/forgot-password' element={<Desktop23 />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
export default App;
