'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function MaintenanceCheck() {
    const router = useRouter();
    const pathname = usePathname();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const checkMaintenance = async () => {
            try {
                // Skip check for admin routes or if already on maintenance page
                if (pathname.startsWith('/admin')) {
                    setChecking(false);
                    return;
                }

                const res = await fetch('/api/admin/settings');
                const settings = await res.json();

                const isAdmin = localStorage.getItem('adminAuth');

                if (settings.maintenanceMode) {
                    if (!isAdmin && pathname !== '/maintenance' && !pathname.startsWith('/login')) {
                        router.push('/maintenance');
                    }
                } else {
                    if (pathname === '/maintenance') {
                        router.push('/');
                    }
                }
            } catch (error) {
                console.error('Error checking maintenance mode:', error);
            } finally {
                setChecking(false);
            }
        };

        // Check immediately and then every 30 seconds
        checkMaintenance();
        const interval = setInterval(checkMaintenance, 30000);

        return () => clearInterval(interval);
    }, [pathname, router]);

    return null;
}
