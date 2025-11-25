import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');

function getSettings() {
    if (!fs.existsSync(settingsFilePath)) {
        const defaultSettings = { maintenanceMode: false };
        fs.writeFileSync(settingsFilePath, JSON.stringify(defaultSettings, null, 2));
        return defaultSettings;
    }
    const fileContent = fs.readFileSync(settingsFilePath, 'utf8');
    return JSON.parse(fileContent);
}

function saveSettings(settings) {
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
}

export async function GET() {
    const settings = getSettings();
    return NextResponse.json(settings);
}

export async function POST(request) {
    const body = await request.json();
    const settings = getSettings();

    if (typeof body.maintenanceMode === 'boolean') {
        settings.maintenanceMode = body.maintenanceMode;
        saveSettings(settings);
        return NextResponse.json(settings);
    }

    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
}
