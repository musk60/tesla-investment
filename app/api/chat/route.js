import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'chats.json');

// Helper to read chats
function getChats() {
    if (!fs.existsSync(dataFilePath)) {
        return {};
    }
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    try {
        return JSON.parse(fileData);
    } catch (error) {
        return {};
    }
}

// Helper to save chats
function saveChats(chats) {
    fs.writeFileSync(dataFilePath, JSON.stringify(chats, null, 2));
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const chatId = searchParams.get('chatId');
    const chats = getChats();

    if (chatId) {
        // Return specific chat messages
        return NextResponse.json({ messages: chats[chatId] || [] });
    } else {
        // Return all chats (for admin)
        // Sort by last message timestamp
        const allChats = Object.entries(chats).map(([id, messages]) => ({
            id,
            messages,
            lastMessage: messages[messages.length - 1]
        })).sort((a, b) => {
            const timeA = new Date(a.lastMessage?.timestamp || 0);
            const timeB = new Date(b.lastMessage?.timestamp || 0);
            return timeB - timeA;
        });
        return NextResponse.json({ chats: allChats });
    }
}

export async function POST(request) {
    try {
        const { chatId, message } = await request.json();
        const chats = getChats();

        if (!chats[chatId]) {
            chats[chatId] = [];
        }

        chats[chatId].push(message);
        saveChats(chats);

        return NextResponse.json({ success: true, messages: chats[chatId] });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }
}
