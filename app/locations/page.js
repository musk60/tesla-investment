'use client';
import styles from '../../styles/Locations.module.css';

export default function Locations() {
    const offices = [
        {
            city: "Palo Alto",
            region: "California, USA",
            address: "3500 Deer Creek Road\nPalo Alto, CA 94304"
        },
        {
            city: "Austin",
            region: "Texas, USA",
            address: "13101 Tesla Road\nAustin, TX 78725"
        },
        {
            city: "Shanghai",
            region: "China",
            address: "5000 Jiangshan Road\nLingang, Pudong New District"
        },
        {
            city: "Berlin",
            region: "Germany",
            address: "Tesla Straße 1\n15537 Grünheide (Mark)"
        },
        {
            city: "London",
            region: "United Kingdom",
            address: "109 Devonshire Rd\nChiswick, London W4 2AN"
        },
        {
            city: "Sydney",
            region: "Australia",
            address: "Level 4, 65 Berry Street\nNorth Sydney NSW 2060"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Global Offices</h1>
                <p>Visit us at one of our strategic investment hubs worldwide.</p>
            </div>

            <div className={styles.grid}>
                {offices.map((office, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.city}>{office.city}</span>
                        <span className={styles.region}>{office.region}</span>
                        <p className={styles.address}>
                            {office.address.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
