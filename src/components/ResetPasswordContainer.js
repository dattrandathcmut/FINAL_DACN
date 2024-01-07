import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordContainer1 from './ResetPasswordContainer1';
import GroupComponent1 from './GroupComponent1';
import GroupComponent2 from './GroupComponent2';
import styles from './ResetPasswordContainer.module.css';
const ResetPasswordContainer = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [verify, setVerify] = useState('');

	const postData = useCallback(async () => {
		try {
			const queryParams = new URLSearchParams(window.location.search);
			const email = queryParams.get('email');
			const response = await fetch(
				`http://localhost:5000/api/users/resetPassword/?email={email}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						password: password,
						passwordConfirm: confirmPassword,
						verifyNumber: verify,
					}),
				}
			);
			const json = await response.json();
			sessionStorage.setItem('token', json.token);
		} catch (error) {
			console.error('Error posting data:', error);
			navigate('/404');
		}
	}, [password, confirmPassword, verify]);

	const onRectangleClick = useCallback(async () => {
		await postData();
		navigate('/');
	}, [navigate]);

	return (
		<div className={styles.rectangleParent}>
			<div className={styles.groupChild} />
			<div className={styles.resetPasswordWrapper}>
				<div className={styles.resetPassword}>Reset Password</div>
			</div>
			<ResetPasswordContainer1
				buttonText='Reset password'
				onRectangle1Click={onRectangleClick}
			/>
			<div className={styles.instanceParent}>
				<GroupComponent2
					enterYourEmailAddress='Enter new password'
					examplegmailcom='example@gmail.com'
					groupDivPosition='absolute'
					groupDivTop='15px'
					groupDivLeft='0px'
					groupDivBorderRadius='15px'
					rectangleDivBorder='1px solid var(--color-dodgerblue)'
					inputValue={password}
					onInputChange={(e) => setPassword(e.target.value)}
				/>
				<GroupComponent2
					enterYourEmailAddress='Confirm new password'
					examplegmailcom='example@gmail.com'
					groupDivPosition='absolute'
					groupDivTop='115px'
					groupDivLeft='0px'
					groupDivBorderRadius='15px'
					rectangleDivBorder='1px solid var(--color-dodgerblue)'
					inputValue={confirmPassword}
					onInputChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<GroupComponent2
					enterYourEmailAddress='Verify code (we just send to your email)'
					examplegmailcom='example@gmail.com'
					groupDivPosition='absolute'
					groupDivTop='215px'
					groupDivLeft='0px'
					groupDivBorderRadius='15px'
					rectangleDivBorder='1px solid var(--color-dodgerblue)'
					inputValue={verify}
					onInputChange={(e) => setVerify(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ResetPasswordContainer;
