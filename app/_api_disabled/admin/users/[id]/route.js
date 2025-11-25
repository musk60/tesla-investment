import { NextResponse } from 'next/server';
import { getUsers, saveUsers } from '../../../../../lib/data';

export async function GET(request, { params }) {
    const { id } = await params;
    const users = getUsers();
    const user = users.find(u => u.id === id);

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return user without password
    const { password, ...safeUser } = user;
    return NextResponse.json(safeUser);
}

export async function PUT(request, { params }) {
    const { id } = await params;
    const data = await request.json();
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Update allowed fields
    const updatedUser = {
        ...users[userIndex],
        name: data.name || users[userIndex].name,
        email: data.email || users[userIndex].email,
        totalInvested: data.totalInvested !== undefined ? Number(data.totalInvested) : users[userIndex].totalInvested,
        currentValue: data.currentValue !== undefined ? Number(data.currentValue) : users[userIndex].currentValue,
        activePlans: data.activePlans || users[userIndex].activePlans // Allow updating activePlans
    };

    users[userIndex] = updatedUser;
    saveUsers(users);

    const { password, ...safeUser } = updatedUser;
    return NextResponse.json(safeUser);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Remove user from array
    users.splice(userIndex, 1);
    saveUsers(users);

    return NextResponse.json({ success: true });
}
