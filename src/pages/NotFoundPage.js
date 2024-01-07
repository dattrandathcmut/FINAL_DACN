import React from 'react';
import styles from  './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.not_found_page}>
            <h1>404: Page Not Found</h1>
            <p>We're sorry, but the page you were looking for doesn't exist.</p>
        </div>
    );
};

export default NotFoundPage;
