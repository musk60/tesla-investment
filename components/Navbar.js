'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');

    useEffect(() => {
        // Check auth state on mount and when storage changes
        const checkAuth = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        };

        checkAuth();
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.dispatchEvent(new Event('storage'));
        router.push('/');
    };

    return (
        <nav className={styles.navbar}>
            {!isAdminPage && (
                <div className={styles.logo}>
                    <Link href="/">TESLA</Link>
                </div>
            )}
            <div className={styles.links}>
                <Link href="/investments">Investments</Link>
                {user ? (
                    <>
                        <Link href="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/about">About</Link>
                        <Link href="/login">Login</Link>
                        <Link href="/register" className={styles.registerButton}>Register</Link>
                    </>
                )}
            </div>
        </nav>
    )
}
