import { NextResponse } from 'next/server';
import { getUsers } from '../../../../lib/data';
import fs from 'fs';
import path from 'path';

const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');

function getSettings() {
    if (!fs.existsSync(settingsFilePath)) {
        return { maintenanceMode: false };
    }
    const fileContent = fs.readFileSync(settingsFilePath, 'utf8');
    return JSON.parse(fileContent);
}

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Check Maintenance Mode
        const settings = getSettings();
        if (settings.maintenanceMode) {
            return NextResponse.json({ error: 'Site is under maintenance. Please try again later.' }, { status: 503 });
        }

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // In a real app, we would set a secure HTTP-only cookie here.
        // For this MVP, we'll return the user info and let the client handle state/localStorage.
        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
