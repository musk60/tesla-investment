import { NextResponse } from 'next/server';
import { getUsers, saveUsers, getInvestments } from '../../../lib/data';

export async function POST(request) {
    const { email, planId, amount } = await request.json();
    const users = getUsers();
    const plans = getInvestments();

    const userIndex = users.findIndex(u => u.email === email);
    if (userIndex === -1) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const plan = plans.find(p => p.id === planId);
    if (!plan) {
        return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    if (amount < plan.minInvestment) {
        return NextResponse.json({ error: `Minimum investment is $${plan.minInvestment}` }, { status: 400 });
    }

    const newInvestment = {
        id: Date.now(),
        planId: plan.id,
        name: plan.name,
        investedAmount: Number(amount),
        currentValue: Number(amount), // Starts at invested amount
        dateInvested: new Date().toISOString().split('T')[0],
        status: 'pending' // Default status
    };

    users[userIndex].activePlans.push(newInvestment);
    // Do NOT update totalInvested or currentValue yet. 
    // It will be updated when admin approves.

    saveUsers(users);

    return NextResponse.json({ success: true, investment: newInvestment });
}
