import styles from '../../styles/Maintenance.module.css';

export default function MaintenancePage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Under Maintenance</h1>
                <p className={styles.message}>
                    We are currently performing scheduled maintenance to improve your experience.
                    Please check back soon.
                </p>
                <div className={styles.logo}>TESLA</div>
            </div>
        </div>
    );
}
