// const fetch = require('node-fetch'); // Native fetch in Node 18+

const BASE_URL = 'http://localhost:3000/api';

async function verify() {
    console.log('Starting verification...');

    // 1. Register
    console.log('\n1. Testing Registration...');
    const email = `test_${Date.now()}@example.com`;
    const registerRes = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'API Test User',
            email,
            password: 'password123'
        })
    });
    const registerData = await registerRes.json();
    console.log('Register Status:', registerRes.status);
    console.log('Register Response:', registerData);

    if (!registerRes.ok) throw new Error('Registration failed');

    // 2. Login
    console.log('\n2. Testing Login...');
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password: 'password123'
        })
    });
    const loginData = await loginRes.json();
    console.log('Login Status:', loginRes.status);
    console.log('Login Response:', loginData);

    if (!loginRes.ok) throw new Error('Login failed');

    // 3. Get User
    console.log('\n3. Testing Get User...');
    const userRes = await fetch(`${BASE_URL}/user?email=${email}`);
    const userData = await userRes.json();
    console.log('Get User Status:', userRes.status);
    console.log('User Data:', userData);

    if (!userRes.ok) throw new Error('Get User failed');

    // 4. Invest
    console.log('\n4. Testing Investment...');
    // Get plans first to find a valid ID
    const plansRes = await fetch(`${BASE_URL}/investments`);
    const plans = await plansRes.json();
    const planId = plans[0].id;

    const investRes = await fetch(`${BASE_URL}/invest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            planId,
            amount: 2000
        })
    });
    const investData = await investRes.json();
    console.log('Invest Status:', investRes.status);
    console.log('Invest Response:', investData);

    if (!investRes.ok) throw new Error('Investment failed');

    console.log('\n5. Verifying Portfolio Update...');
    const updatedUserRes = await fetch(`${BASE_URL}/user?email=${email}`);
    const updatedUserData = await updatedUserRes.json();
    console.log('Updated User Data:', updatedUserData);

    if (updatedUserData.totalInvested !== 2000) {
        throw new Error(`Expected totalInvested to be 2000, got ${updatedUserData.totalInvested}`);
    }

    console.log('\nVERIFICATION SUCCESSFUL!');
}

verify().catch(err => console.error('\nVERIFICATION FAILED:', err));
