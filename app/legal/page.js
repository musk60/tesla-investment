'use client';
import styles from '../../styles/Legal.module.css';

export default function Legal() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Privacy & Legal</h1>
                    <p>Transparency and trust are the foundations of our relationship with you.</p>
                </div>

                <div className={styles.section}>
                    <h2>1. Investment Risks</h2>
                    <p>
                        Investing in financial markets involves a high degree of risk and may not be suitable for all investors.
                        Past performance is not indicative of future results. The value of investments can go down as well as up,
                        and you may not get back the amount you invested.
                    </p>
                    <p>
                        Tesla Investments recommends that you seek independent financial advice before making any investment decisions.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>2. Privacy Policy</h2>
                    <p>
                        We are committed to protecting your privacy and ensuring the security of your personal information.
                        This policy outlines how we collect, use, and safeguard your data.
                    </p>
                    <ul>
                        <li>We collect information necessary to provide our investment services and comply with legal requirements.</li>
                        <li>We do not sell your personal data to third parties.</li>
                        <li>We use advanced encryption and security measures to protect your account and transaction data.</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2>3. Terms of Service</h2>
                    <p>
                        By accessing and using the Tesla Investments platform, you agree to comply with our Terms of Service.
                        These terms govern your use of our website, mobile applications, and investment products.
                    </p>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of any changes.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>4. Regulatory Compliance</h2>
                    <p>
                        Tesla Investments operates in compliance with all applicable financial regulations and laws in the jurisdictions where we offer our services.
                        We are committed to maintaining the highest standards of integrity and transparency.
                    </p>
                </div>

                <p className={styles.lastUpdated}>Last Updated: November 24, 2025</p>
            </div>
        </div>
    );
}
