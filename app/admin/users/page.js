'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/AdminUsers.module.css';

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const isAdmin = localStorage.getItem('adminAuth');
            if (!isAdmin) {
                router.push('/admin/login');
            }
        };
        checkAuth();
        fetchUsers();
    }, [router]);

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/admin/users');
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (userId) => {
        if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            try {
                const res = await fetch(`/api/admin/users/${userId}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    // Refresh the list
                    fetchUsers();
                } else {
                    alert('Failed to delete user');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('An error occurred');
            }
        }
    };

    if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading...</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>User Management</h1>
                <Link href="/admin/dashboard" className={styles.backLink}>
                    ← Back to Dashboard
                </Link>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Total Invested</th>
                            <th>Current Value</th>
                            <th>Active Plans</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>${user.totalInvested?.toLocaleString()}</td>
                                <td>${user.currentValue?.toLocaleString()}</td>
                                <td>{user.activePlansCount}</td>
                                <td>
                                    <Link href={`/admin/users/${user.id}`} className={styles.actionButton}>
                                        Manage
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className={styles.deleteButton}
                                        style={{ marginLeft: '10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
