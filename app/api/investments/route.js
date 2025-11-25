import { NextResponse } from 'next/server';
import { getInvestments, saveInvestments } from '../../../lib/data';

export async function GET() {
    const plans = getInvestments();
    return NextResponse.json(plans);
}

export async function POST(request) {
    const body = await request.json();
    const plans = getInvestments();

    const newPlan = {
        id: plans.length > 0 ? Math.max(...plans.map(p => p.id)) + 1 : 1,
        ...body
    };

    plans.push(newPlan);
    saveInvestments(plans);

    return NextResponse.json(newPlan, { status: 201 });
}

export async function PUT(request) {
    const body = await request.json();
    const plans = getInvestments();

    const index = plans.findIndex(p => p.id === body.id);
    if (index === -1) {
        return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
    }

    plans[index] = { ...plans[index], ...body };
    saveInvestments(plans);

    return NextResponse.json(plans[index]);
}
