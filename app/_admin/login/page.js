'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/AdminLogin.module.css';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded auth for MVP
        if (username === 'admin' && password === 'tesla123') {
            // Set a simple cookie or local storage
            localStorage.setItem('adminAuth', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Admin Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    )
}
