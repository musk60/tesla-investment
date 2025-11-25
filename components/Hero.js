import Link from 'next/link'
import styles from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoBackground}
            >
                <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA.mp4" type="video/mp4" />
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>Invest in the Future</h1>
                <p>Join the energy revolution with Tesla Investments.</p>
                <div className={styles.buttons}>
                    <Link href="/investments" className={styles.primaryButton}>
                        View Plans
                    </Link>
                    <Link href="/about" className={styles.secondaryButton}>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}
