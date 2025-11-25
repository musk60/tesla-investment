'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/AdminDashboard.module.css';

export default function AdminDashboard() {
    const [plans, setPlans] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const auth = localStorage.getItem('adminAuth');
            if (!auth) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        };
        checkAuth();
        fetchPlans();
        fetchSettings();
    }, [router]);

    const fetchPlans = async () => {
        try {
            const res = await fetch('/api/investments');
            if (res.ok) {
                const data = await res.json();
                setPlans(data);
            }
        } catch (error) {
            console.error('Failed to fetch plans:', error);
        }
    };

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/admin/settings');
            const data = await res.json();
            setMaintenanceMode(data.maintenanceMode);
        } catch (error) {
            console.error('Error fetching settings:', error);
        }
    };

    const toggleMaintenance = async () => {
        try {
            const newMode = !maintenanceMode;
            const res = await fetch('/api/admin/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ maintenanceMode: newMode }),
            });

            if (res.ok) {
                setMaintenanceMode(newMode);
                alert(`Maintenance mode is now ${newMode ? 'ON' : 'OFF'}`);
            }
        } catch (error) {
            console.error('Error toggling maintenance:', error);
        }
    };

    const handleEdit = (plan) => {
        setCurrentPlan(plan);
        setIsEditing(true);
    };

    const handleAdd = () => {
        setCurrentPlan({
            name: '',
            minInvestment: '',
            roi: '',
            duration: '',
            risk: '',
            description: ''
        });
        setIsEditing(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const method = currentPlan.id ? 'PUT' : 'POST';

        try {
            await fetch('/api/investments', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentPlan)
            });
            setIsEditing(false);
            fetchPlans();
        } catch (error) {
            console.error('Failed to save plan:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPlan(prev => ({ ...prev, [name]: value }));
    };

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        router.push('/login');
    };

    if (loading) return <div className={styles.loading}>Loading...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>TESLA ADMIN</div>
                <nav className={styles.nav}>
                    <Link href="/admin/dashboard" className={styles.active}>Dashboard</Link>
                    <Link href="/admin/users">User Management</Link>
                    <Link href="/admin/chat">Support Chat</Link>
                </nav>
                <div className={styles.maintenanceControl} style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 'auto' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: maintenanceMode ? '#f44336' : '#4caf50' }}>
                        <input
                            type="checkbox"
                            checked={maintenanceMode}
                            onChange={toggleMaintenance}
                            style={{ accentColor: '#e82127' }}
                        />
                        {maintenanceMode ? 'Maintenance ON' : 'Maintenance OFF'}
                    </label>
                </div>
                <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <h1>Investment Plans</h1>
                    <button onClick={handleAdd} className={styles.addButton}>
                        + Add New Plan
                    </button>
                </div>

                {isEditing ? (
                    <div className={styles.formContainer}>
                        <h2>{currentPlan.id ? 'Edit Plan' : 'Add Plan'}</h2>
                        <form onSubmit={handleSave}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label>Name</label>
                                    <input name="name" value={currentPlan.name} onChange={handleChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Min Investment</label>
                                    <input name="minInvestment" type="number" value={currentPlan.minInvestment} onChange={handleChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>ROI</label>
                                    <input name="roi" value={currentPlan.roi} onChange={handleChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Duration</label>
                                    <input name="duration" value={currentPlan.duration} onChange={handleChange} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Risk</label>
                                    <input name="risk" value={currentPlan.risk} onChange={handleChange} required />
                                </div>
                                <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                                    <label>Description</label>
                                    <textarea name="description" value={currentPlan.description} onChange={handleChange} required rows="3" />
                                </div>
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" onClick={() => setIsEditing(false)} className={styles.cancelButton}>Cancel</button>
                                <button type="submit" className={styles.saveButton}>Save</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {plans.map(plan => (
                            <div key={plan.id} className={styles.card}>
                                <h3>{plan.name}</h3>
                                <p>{plan.description}</p>
                                <div className={styles.stats}>
                                    <span>ROI: {plan.roi}</span>
                                    <span>Min: ${plan.minInvestment}</span>
                                </div>
                                <button onClick={() => handleEdit(plan)} className={styles.editButton}>Edit</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
