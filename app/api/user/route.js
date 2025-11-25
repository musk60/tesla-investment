import { NextResponse } from 'next/server';
import { getUsers } from '../../../lib/data';

export async function GET(request) {
    // In a real app, we would read the session cookie.
    // Here, we'll expect a query param or header for simplicity in this MVP, 
    // OR we can just use the /api/user route which we are about to modify to take an ID.
    // Actually, let's make this route take an 'email' query param to fetch specific user data
    // since we are using client-side stored auth state.

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return full user data including portfolio
    return NextResponse.json(user);
}
