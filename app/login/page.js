'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles/Auth.module.css';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Admin Login Check
        if (formData.email === 'admin' && formData.password === 'tesla123') {
            localStorage.setItem('adminAuth', 'true');
            router.push('/admin/dashboard');
            return;
        }

        // User Login
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (res.ok) {
                // Store user info in localStorage for MVP
                localStorage.setItem('user', JSON.stringify(data.user));
                // Trigger a custom event or just redirect
                window.dispatchEvent(new Event('storage'));
                router.push('/dashboard');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Email or Username</label>
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
                <p className={styles.link}>
                    Don't have an account? <Link href="/register">Register</Link>
                </p>
            </div>
        </div>
    )
}
