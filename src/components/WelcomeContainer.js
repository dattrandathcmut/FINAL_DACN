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
	const [password, setPassword] = useState('');
	const [inputType, setInputType] = useState('');
	const [inputClass, setInputClass] = useState('');

	const navigate = useNavigate();

	const onHaveAccountClick = useCallback(() => {
		navigate('/');
	}, [navigate]);
	const postData = useCallback(async () => {
		const name = lastName + ' ' + firstName;
		try {
			const response = await fetch('http://localhost:5000/api/users/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
					phone: contactNumber,
				}),
			});
			const json = await response.json();

			if (json.status === 'success') {
				sessionStorage.setItem('token', json.token);
				alert('Register Successful!');
				navigate('/main');
			} else if (json.status === 'fail') {
				setEmail(json.message);
				setPassword('');
				setFirstName('');
				setLastName('');
				setContactNumber('');
				setInputType('text');
				setInputClass(styles.redTextColor);
			}
		} catch (error) {
			console.error('Error posting data:', error);
			console.log('Error posting data:', error);
		}
	}, [firstName, lastName, contactNumber, email, password]);

	const onRegisterText1Click = useCallback(async () => {
		await postData();
	}, [firstName, lastName, contactNumber, email, password]);

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

			<div className={inputClass}>
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
					inputType={inputType}
					enterYourEmailAddress='Enter your password'
					groupDivPosition='absolute'
					groupDivTop='497px'
					groupDivLeft='63px'
					groupDivBorderRadius='15px'
					inputValue={password}
					onInputChange={(e) => {
						if (inputType == 'text') {
							e.target.value = null;
						}
						setInputType('password');
						setPassword(e.target.value);
					}}
				/>
			</div>
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
