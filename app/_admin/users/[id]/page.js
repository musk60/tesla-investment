'use client';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../../../../styles/AdminUserEdit.module.css';

export default function EditUser({ params }) {
    const { id } = use(params);
    const [user, setUser] = useState({
        name: '',
        email: '',
        totalInvested: 0,
        currentValue: 0
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const isAdmin = localStorage.getItem('adminAuth');
            if (!isAdmin) {
                router.push('/admin/login');
            }
        };
        checkAuth();
        fetchUser();
    }, [id, router]);

    const fetchUser = async () => {
        try {
            const res = await fetch(`/api/admin/users/${id}`);
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                setMessage('User not found');
            }
        } catch (error) {
            console.error('Failed to fetch user:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            const res = await fetch(`/api/admin/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            if (res.ok) {
                setMessage('User updated successfully!');
                setTimeout(() => router.push('/admin/users'), 1500);
            } else {
                setMessage('Failed to update user');
            }
        } catch (error) {
            console.error('Failed to update user:', error);
            setMessage('Error updating user');
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleApprove = (index) => {
        const updatedPlans = [...user.activePlans];
        const plan = updatedPlans[index];

        if (plan.status === 'active') return;

        plan.status = 'active';

        setUser(prev => ({
            ...prev,
            activePlans: updatedPlans,
            totalInvested: Number(prev.totalInvested) + Number(plan.investedAmount),
            currentValue: Number(prev.currentValue) + Number(plan.currentValue)
        }));
    };

    const handleUpdateInvestment = (index, newAmount) => {
        const updatedPlans = [...user.activePlans];
        const plan = updatedPlans[index];
        const oldAmount = Number(plan.investedAmount);
        const diff = Number(newAmount) - oldAmount;

        plan.investedAmount = Number(newAmount);
        plan.currentValue = Number(newAmount); // Reset current value to new amount for simplicity

        // Only update totals if the plan is active
        if (plan.status !== 'pending') {
            setUser(prev => ({
                ...prev,
                activePlans: updatedPlans,
                totalInvested: Number(prev.totalInvested) + diff,
                currentValue: Number(prev.currentValue) + diff
            }));
        } else {
            setUser(prev => ({
                ...prev,
                activePlans: updatedPlans
            }));
        }
    };

    const handleRemoveInvestment = (index) => {
        if (!confirm('Are you sure you want to remove this investment?')) return;

        const updatedPlans = [...user.activePlans];
        const plan = updatedPlans[index];

        updatedPlans.splice(index, 1);

        if (plan.status !== 'pending') {
            setUser(prev => ({
                ...prev,
                activePlans: updatedPlans,
                totalInvested: Number(prev.totalInvested) - Number(plan.investedAmount),
                currentValue: Number(prev.currentValue) - Number(plan.currentValue)
            }));
        } else {
            setUser(prev => ({
                ...prev,
                activePlans: updatedPlans
            }));
        }
    };

    if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Edit User</h1>
                <Link href="/admin/users" className={styles.backLink}>
                    ← Back to Users
                </Link>
            </div>

            {message && <div className={styles.message}>{message}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.section}>
                    <h2>Account Details</h2>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Portfolio Management</h2>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Total Invested ($)</label>
                        <input
                            type="number"
                            name="totalInvested"
                            value={user.totalInvested}
                            onChange={handleChange}
                            className={styles.input}
                            min="0"
                            step="0.01"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Current Value ($)</label>
                        <input
                            type="number"
                            name="currentValue"
                            value={user.currentValue}
                            onChange={handleChange}
                            className={styles.input}
                            min="0"
                            step="0.01"
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Investments</h2>
                    {user.activePlans && user.activePlans.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {user.activePlans.map((plan, index) => (
                                <div key={index} style={{
                                    padding: '1rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '4px',
                                    border: plan.status === 'pending' ? '1px solid orange' : '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 'bold' }}>{plan.name}</span>
                                        <span style={{
                                            color: plan.status === 'pending' ? 'orange' : '#4caf50',
                                            textTransform: 'uppercase',
                                            fontSize: '0.8rem'
                                        }}>
                                            {plan.status || 'Active'}
                                        </span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
                                        <div>Amount: ${plan.investedAmount}</div>
                                        <div>Value: ${plan.currentValue}</div>
                                        <div>Date: {plan.dateInvested}</div>
                                    </div>
                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                        {plan.status === 'pending' && (
                                            <button
                                                type="button"
                                                onClick={() => handleApprove(index)}
                                                style={{
                                                    padding: '0.4rem 1rem',
                                                    backgroundColor: '#4caf50',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Approve
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newAmount = prompt('Enter new amount:', plan.investedAmount);
                                                if (newAmount && !isNaN(newAmount)) {
                                                    handleUpdateInvestment(index, Number(newAmount));
                                                }
                                            }}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                backgroundColor: 'transparent',
                                                border: '1px solid #ccc',
                                                color: 'white',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Edit Amount
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveInvestment(index)}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                backgroundColor: 'transparent',
                                                border: '1px solid #f44336',
                                                color: '#f44336',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ color: '#999' }}>No investments found.</p>
                    )}
                </div>

                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.saveButton} disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <Link href="/admin/users" className={styles.cancelButton}>
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
