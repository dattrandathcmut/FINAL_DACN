import { useCallback } from 'react';
import WelcomeContainer from '../components/WelcomeContainer';
import { useNavigate } from 'react-router-dom';
import GroupComponent from '../components/GroupComponent';
import styles from './Frame5.module.css';
const Frame5 = () => {
	const navigate = useNavigate();

	
	const onBackTextClick = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<div className={styles.images2Parent}>
			<img className={styles.images2Icon} alt='' src='/images-1@2x.png' />
			<div className={styles.WelcomeContainer}>
				<WelcomeContainer />
			</div>
			<button className={styles.backWrapper}>
				<div className={styles.back} onClick={onBackTextClick}>
					Back
				</div>
			</button>
		</div>
	);
};

export default Frame5;
