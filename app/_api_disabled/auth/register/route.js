import { NextResponse } from 'next/server';
import { getUsers, saveUsers } from '../../../../lib/data';
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
    // Check Maintenance Mode
    const settings = getSettings();
    if (settings.maintenanceMode) {
        return NextResponse.json({ error: 'Site is under maintenance. Please try again later.' }, { status: 503 });
    }

    const { name, email, password } = await request.json();
    const users = getUsers();

    if (users.find(u => u.email === email)) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // Storing plain text for MVP as requested
        totalInvested: 0,
        currentValue: 0,
        activePlans: []
    };

    users.push(newUser);
    saveUsers(users);

    return NextResponse.json({ success: true, user: { name: newUser.name, email: newUser.email } });
}
