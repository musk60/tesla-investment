'use client';
import styles from '../../styles/About.module.css';

export default function About() {
    const reviews = [
        {
            id: 1,
            name: "James Wilson",
            country: "United Kingdom",
            text: "Investing with Tesla has been a game-changer for my portfolio. The returns are consistent and the platform is incredibly secure. I've never felt more confident in my financial future.",
            initials: "JW",
            image: "https://i.pravatar.cc/150?u=JamesWilson"
        },
        {
            id: 2,
            name: "Sarah Chen",
            country: "Singapore",
            text: "I was skeptical at first, but the transparency and support from the Tesla team have been outstanding. The automated systems make it so easy to manage my investments.",
            initials: "SC",
            image: "https://i.pravatar.cc/150?u=SarahChen"
        },
        {
            id: 3,
            name: "Mateo Garcia",
            country: "Spain",
            text: "A truly revolutionary way to grow your wealth. I've seen significant growth in just a few months. The interface is intuitive and the data analytics are top-notch.",
            initials: "MG",
            image: "https://i.pravatar.cc/150?u=MateoGarcia"
        },
        {
            id: 4,
            name: "Donald Trump",
            country: "USA",
            text: "This is the greatest investment platform in the history of investment platforms. Tremendous returns. Huge! Everyone says so. We love Tesla, don't we folks? A beautiful thing.",
            initials: "DT",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
        },
        {
            id: 5,
            name: "Lukas Weber",
            country: "Germany",
            text: "German engineering meets financial innovation. The platform's stability and the clarity of the investment plans are exactly what I was looking for.",
            initials: "LW",
            image: "https://i.pravatar.cc/150?u=LukasWeber"
        },
        {
            id: 6,
            name: "Yuki Tanaka",
            country: "Japan",
            text: "Excellent service and impressive returns. I appreciate the focus on sustainable energy. It feels good to earn money while supporting a greener future.",
            initials: "YT",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Why Invest with Tesla?</h1>
                <p>Join millions of investors worldwide who are powering the future of sustainable energy while securing their financial freedom.</p>
            </header>

            <section className={styles.section}>
                <div className={styles.description}>
                    <p>
                        At Tesla Investments, we believe that the transition to sustainable energy is the most critical challenge of our time.
                        By investing with us, you are not just growing your wealth; you are accelerating the world's transition to sustainable energy.
                        Our platform offers a unique opportunity to participate in the success of our groundbreaking technologies,
                        from electric vehicles to solar energy and battery storage solutions.
                    </p>
                    <br />
                    <p>
                        We leverage advanced AI-driven market analysis and our deep industry expertise to maximize returns for our investors.
                        With a proven track record of innovation and disruption, Tesla Investments provides a secure, transparent, and high-yield
                        environment for both novice and experienced investors. Your future is electric.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Trustee Notes & Global Reviews</h2>
                <div className={styles.reviewsGrid}>
                    {reviews.map(review => (
                        <div key={review.id} className={styles.reviewCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.reviewText}>"{review.text}"</p>
                            <div className={styles.reviewer}>
                                <img src={review.image} alt={review.name} className={styles.avatar} />
                                <div className={styles.reviewerInfo}>
                                    <span className={styles.name}>{review.name}</span>
                                    <span className={styles.country}>{review.country}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
