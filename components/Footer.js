import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>Tesla © 2023</p>
                <div className={styles.links}>
                    <a href="/legal">Privacy & Legal</a>
                    <a href="#">Vehicle Recalls</a>
                    <a href="/news">News</a>
                    <a href="#">Get Updates</a>
                    <a href="/locations">Locations</a>
                    <a href="tel:+12723012567" className={styles.contact}>Contact: +1 (272) 301-2567</a>
                </div>
            </div>
        </footer>
    )
}
