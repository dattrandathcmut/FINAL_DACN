import { useMemo } from 'react';
import styles from './ResetPasswordContainer1.module.css';
const ResetPasswordContainer1 = ({
	buttonText,
	propLeft,
	onRectangle1Click,
}) => {
	const resetPasswordStyle = useMemo(() => {
		return {
			left: propLeft,
		};
	}, [propLeft]);

	return (
		<div className={styles.rectangleParent}  onClick={onRectangle1Click}>
			<div className={styles.groupChild} />
			<div className={styles.resetPassword} style={resetPasswordStyle}>
				{buttonText}
			</div>
		</div>
	);
};

export default ResetPasswordContainer1;
