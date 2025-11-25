'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Dashboard.module.css';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check for logged in user
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/login');
            return;
        }

        const userData = JSON.parse(storedUser);
        fetchUser(userData.email);
    }, []);

    const fetchUser = async (email) => {
        try {
            const res = await fetch(`/api/user?email=${email}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                // Handle error or logout
                localStorage.removeItem('user');
                router.push('/login');
            }
        } catch (e) {
            console.error('Failed to fetch user data');
        }
    };

    if (!user) return <div className={styles.loading}>Loading...</div>;

    const totalReturn = user.currentValue - user.totalInvested;
    const returnPercentage = user.totalInvested > 0
        ? ((totalReturn / user.totalInvested) * 100).toFixed(2)
        : '0.00';

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Welcome back, {user.name}</h1>

            <div className={styles.overview}>
                <div className={styles.card}>
                    <h3>Total Invested</h3>
                    <p className={styles.amount}>${user.totalInvested.toLocaleString()}</p>
                </div>
                <div className={styles.card}>
                    <h3>Current Value</h3>
                    <p className={styles.amount}>${user.currentValue.toLocaleString()}</p>
                </div>
                <div className={styles.card}>
                    <h3>Total Return</h3>
                    <p className={`${styles.amount} ${totalReturn >= 0 ? styles.positive : styles.negative}`}>
                        {totalReturn >= 0 ? '+' : ''}${totalReturn.toLocaleString()} ({returnPercentage}%)
                    </p>
                </div>
            </div>

            <h2 className={styles.subtitle}>Your Portfolio</h2>
            {user.activePlans.length === 0 ? (
                <p className={styles.noInvestments}>You have no active investments. <a href="/investments">Start investing now.</a></p>
            ) : (
                <div className={styles.portfolio}>
                    {user.activePlans.map(plan => (
                        <div key={plan.id} className={`${styles.planRow} ${plan.status === 'pending' ? styles.pendingRow : ''}`}>
                            <div className={styles.planInfo}>
                                <h4>
                                    {plan.name}
                                    {plan.status === 'pending' && <span className={styles.pendingBadge}>Pending Approval</span>}
                                </h4>
                                <span className={styles.date}>Invested on {plan.dateInvested}</span>
                            </div>
                            <div className={styles.planStats}>
                                <div className={styles.statGroup}>
                                    <span className={styles.label}>Invested</span>
                                    <span>${plan.investedAmount.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
