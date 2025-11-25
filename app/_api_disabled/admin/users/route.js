import { NextResponse } from 'next/server';
import { getUsers } from '../../../../lib/data';

export async function GET() {
    const users = getUsers();
    // Return users without passwords for security
    const safeUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        totalInvested: user.totalInvested,
        currentValue: user.currentValue,
        activePlansCount: user.activePlans ? user.activePlans.length : 0
    }));

    return NextResponse.json(safeUsers);
}
