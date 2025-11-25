'use client';
import styles from '../../styles/News.module.css';
import Link from 'next/link';

export default function News() {
    const newsItems = [
        {
            id: 1,
            title: "Tesla Investments Reports Record Q3 Growth",
            date: "November 20, 2025",
            excerpt: "Our sustainable energy portfolio has outperformed market expectations, delivering a 15% ROI for our Model 3 Fund investors this quarter.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
        },
        {
            id: 2,
            title: "Expansion of Supercharger Network Investment Opportunities",
            date: "November 15, 2025",
            excerpt: "We are opening new investment rounds for the expansion of our global Supercharger network, targeting high-growth regions in Southeast Asia and Europe.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Supercharger-Desktop-NA.jpg"
        },
        {
            id: 3,
            title: "New AI & Robotics Fund Launched",
            date: "November 10, 2025",
            excerpt: "Invest in the future of autonomy. Our new Optimus-focused fund allows retail investors to participate in the robotics revolution.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-NA.jpg"
        },
        {
            id: 4,
            title: "Solar Roof Installations Hit New Milestone",
            date: "November 05, 2025",
            excerpt: "Residential solar adoption is accelerating. See how our Energy Independence Fund is capitalizing on this massive shift in consumer behavior.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Solar-Panels-Desktop-NA.jpg"
        },
        {
            id: 5,
            title: "Tesla Investments Partner Summit 2025",
            date: "October 28, 2025",
            excerpt: "Join us for our annual investor summit in Austin, Texas. Keynote speakers include Elon Musk and top financial analysts.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-NA.jpg"
        },
        {
            id: 6,
            title: "Sustainable Energy: The Trillion Dollar Opportunity",
            date: "October 15, 2025",
            excerpt: "Read our latest whitepaper on why the transition to sustainable energy is the biggest investment opportunity of our lifetime.",
            image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-NA.jpg"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Latest News</h1>
                <p>Stay updated with the latest developments in sustainable energy investing.</p>
            </div>

            <div className={styles.grid}>
                {newsItems.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{item.date}</span>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.excerpt}>{item.excerpt}</p>
                            <Link href="#" className={styles.readMore}>
                                Read Full Story →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
