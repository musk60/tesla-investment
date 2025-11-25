import styles from '../styles/InvestmentCard.module.css'

export default function InvestmentCard({ plan }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>{plan.name}</h3>
                <span className={styles.risk}>{plan.risk} Risk</span>
            </div>
            <p className={styles.description}>{plan.description}</p>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.label}>ROI</span>
                    <span className={styles.value}>{plan.roi}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.label}>Min. Invest</span>
                    <span className={styles.value}>${plan.minInvestment}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.label}>Duration</span>
                    <span className={styles.value}>{plan.duration}</span>
                </div>
            </div>
        </div>
    )
}
