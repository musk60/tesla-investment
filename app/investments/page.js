'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import InvestmentCard from '../../components/InvestmentCard';
import styles from '../../styles/Investments.module.css';

export default function Investments() {
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch('/api/investments');
                if (res.ok) {
                    const data = await res.json();
                    setPlans(data);
                }
            } catch (e) {
                console.error('Failed to fetch plans');
            }
        };
        fetchPlans();
    }, []);

    const handleInvestClick = (plan) => {
        const user = localStorage.getItem('user');
        if (!user) {
            router.push('/login');
            return;
        }
        setSelectedPlan(plan);
        setAmount(plan.minInvestment);
        setError('');
        setSuccess('');
    };

    const handleInvestSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        try {
            const res = await fetch('/api/invest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user.email,
                    planId: selectedPlan.id,
                    amount
                })
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess('Investment successful! Redirecting to dashboard...');
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);
            } else {
                setError(data.error || 'Investment failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Investment Plans</h1>
            <p className={styles.subtitle}>
                Choose a plan that suits your financial goals and risk tolerance.
            </p>

            <div className={styles.grid}>
                {plans.map(plan => (
                    <div key={plan.id} className={styles.cardWrapper}>
                        <InvestmentCard plan={plan} />
                        <button
                            className={styles.investButton}
                            onClick={() => handleInvestClick(plan)}
                        >
                            Invest Now
                        </button>
                    </div>
                ))}
            </div>

            {selectedPlan && (
                <div className={styles.modalOverlay} onClick={() => setSelectedPlan(null)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>Invest in {selectedPlan.name}</h2>
                        <p>Minimum Investment: ${selectedPlan.minInvestment}</p>

                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}

                        {!success && (
                            <form onSubmit={handleInvestSubmit}>
                                <div className={styles.inputGroup}>
                                    <label>Amount ($)</label>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)}
                                        min={selectedPlan.minInvestment}
                                        required
                                    />
                                </div>
                                <div className={styles.modalActions}>
                                    <button type="button" onClick={() => setSelectedPlan(null)} className={styles.cancelButton}>Cancel</button>
                                    <button type="submit" className={styles.confirmButton}>Confirm Investment</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
