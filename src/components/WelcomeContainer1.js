import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupComponent2 from './GroupComponent2';
import styles from './WelcomeContainer1.module.css';
const WelcomeContainer1 = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const onNoAccountClick = useCallback(() => {
		navigate('/register');
	}, [navigate]);

	const onForgotPasswordTextClick = useCallback(() => {
		navigate('/forgot-password');
	}, [navigate]);

	const postData = useCallback(async () => {
		console.log('Email:', email);
		console.log('Password:', password);
		try {
			const response = await fetch('http://localhost:5000/api/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			});
			const json = await response.json();
			// console.log(json);
			sessionStorage.setItem('token', json.token);

		} catch (error) {
			console.error('Error posting data:', error);
			navigate('/404');
		}
	}, [email, password]);
	
	const onGroupButtonClick = useCallback(async() => {
		await postData();
		navigate('/main');
	}, [email, password, navigate]);


	return (
		<div className={styles.rectangleParent}>
			<div className={styles.groupChild} />
			<div className={styles.welcomeToCultifyContainer}>
				<span>{`Welcome to `}</span>
				<span className={styles.cultify}>Smart Farm</span>
			</div>
			<div className={styles.noAccountContainer} onClick={onNoAccountClick}>
				<span>{`No Account `}</span>
				<span className={styles.span}>{`? `}</span>
				<span className={styles.signUp}>Sign up</span>
			</div>
			<div className={styles.login}>Login</div>
			{/* <GroupComponent2
				enterYourEmailAddress='Enter your email address'
				groupDivPosition='absolute'
				groupDivTop='199px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
				inputValue={email}
				onInputChange={(e) => setEmail(e.target.value)}
			/> */}
			<GroupComponent2
				enterYourEmailAddress='Enter your email address'
				examplegmailcom='example@gmail.com'
				groupDivPosition='absolute'
				groupDivTop='199px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
				rectangleDivBorder='1px solid var(--color-dodgerblue)'
				inputValue={email}
				onInputChange={(e) => setEmail(e.target.value)}
			/>
			<GroupComponent2
				enterYourEmailAddress='Enter your Password'
				groupDivPosition='absolute'
				groupDivTop='309px'
				groupDivLeft='63px'
				groupDivBorderRadius='15px'
				inputValue={password}
				onInputChange={(e) => setPassword(e.target.value)}
			/>
			<div
				className={styles.forgotPassword}
				onClick={onForgotPasswordTextClick}
			>
				Forgot Password
			</div>
			<button className={styles.rectangleGroup} onClick={onGroupButtonClick}>
				<div className={styles.groupItem} />
				<div className={styles.signIn}>Sign in</div>
			</button>
		</div>
	);
};

export default WelcomeContainer1;
