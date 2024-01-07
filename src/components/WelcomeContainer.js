import { useState, useCallback } from 'react';
import GroupComponent2 from './GroupComponent2';
import GroupComponent from '../components/GroupComponent';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomeContainer.module.css';
const WelcomeContainer = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [email, setEmail] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const navigate = useNavigate();

	const onHaveAccountClick = useCallback(() => {
		navigate('/');
	}, [navigate]);
	const onRegisterText1Click = useCallback(() => {
		// You can access 'email' and 'contactNumber' here and perform any necessary actions
		console.log('firstName:', lastName + ' ' + firstName);

		console.log('Email:', email);
		console.log('Contact Number:', contactNumber);

		// Redirect to the desired route
		navigate('/main');
	}, [email, contactNumber, navigate]);

	return (
		<div className={styles.rectangleParent}>
			<div className={styles.groupChild} />
			<div className={styles.welcomeToCultifyContainer}>
				<span>{`Welcome to `}</span>
				<span className={styles.cultify}>Smart Farm</span>
			</div>
			<div
				className={styles.haveAnAccountContainer}
				onClick={onHaveAccountClick}
			>
				<span>{`Have an account `}</span>
				<span className={styles.span}>{`? `}</span>
				<span className={styles.login}>Login</span>
			</div>
			<div className={styles.register}>Register</div>
			<div className={styles.instanceParent}>
				<GroupComponent
					firstName='First name'
					userName='User name'
					groupDivPosition='absolute'
					groupDivTop='160px'
					groupDivLeft='63px'
					inputValue={firstName}
					onInputChange={(e) => setFirstName(e.target.value)}
				/>
				<GroupComponent
					firstName='Last name'
					userName='Last name'
					groupDivPosition='absolute'
					groupDivTop='160px'
					groupDivLeft='300px'
					inputValue={lastName}
					onInputChange={(e) => setLastName(e.target.value)}
				/>
			</div>
			<GroupComponent2
				enterYourEmailAddress='Enter your email address'
				examplegmailcom='example@gmail.com'
				groupDivPosition='absolute'
				groupDivTop='392px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
				rectangleDivBorder='1px solid var(--color-dodgerblue)'
				inputValue={email}
				onInputChange={(e) => setEmail(e.target.value)}
			/>
			<GroupComponent2
				enterYourEmailAddress='Contact number'
				examplegmailcom='Contact number'
				groupDivPosition='absolute'
				groupDivTop='279px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
				rectangleDivBorder='1px solid var(--color-dodgerblue)'
				inputValue={contactNumber}
				onInputChange={(e) => setContactNumber(e.target.value)}
			/>
			<GroupComponent2
				enterYourEmailAddress='Enter your password'
				groupDivPosition='absolute'
				groupDivTop='497px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
			/>
			<button className={styles.rectangleGroup}>
				<div className={styles.groupItem} />
				<div className={styles.register1} onClick={onRegisterText1Click}>
					Register
				</div>
			</button>
		</div>
	);
};

export default WelcomeContainer;
