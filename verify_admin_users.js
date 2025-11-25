// Native fetch is available in Node.js 18+

const BASE_URL = 'http://localhost:3000';

async function verifyAdminUsers() {
    console.log('--- Verifying Admin User Management ---');

    // 1. List Users
    console.log('\n1. Listing Users...');
    try {
        const res = await fetch(`${BASE_URL}/api/admin/users`);
        if (!res.ok) throw new Error(`Failed to list users: ${res.status} ${res.statusText}`);
        const users = await res.json();
        console.log(`   Success! Found ${users.length} users.`);
        if (users.length === 0) {
            console.log('   (Note: No users found to test update on. Please register a user first.)');
            return;
        }

        const targetUser = users[0];
        console.log(`   Target User: ${targetUser.name} (${targetUser.email}) - Invested: $${targetUser.totalInvested}`);

        // 2. Get Specific User
        console.log(`\n2. Getting User Details for ID: ${targetUser.id}...`);
        const resDetail = await fetch(`${BASE_URL}/api/admin/users/${targetUser.id}`);
        if (!resDetail.ok) throw new Error(`Failed to get user: ${resDetail.status}`);
        const userDetail = await resDetail.json();
        console.log('   Success! User details fetched.');

        // 3. Update User Portfolio
        const newInvestedAmount = (userDetail.totalInvested || 0) + 5000;
        console.log(`\n3. Updating User Portfolio (Adding $5000)...`);
        console.log(`   Old Total: $${userDetail.totalInvested} -> New Total: $${newInvestedAmount}`);

        const resUpdate = await fetch(`${BASE_URL}/api/admin/users/${targetUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                totalInvested: newInvestedAmount,
                currentValue: (userDetail.currentValue || 0) + 5000
            })
        });

        if (!resUpdate.ok) throw new Error(`Failed to update user: ${resUpdate.status}`);
        const updatedUser = await resUpdate.json();
        console.log('   Success! User updated.');
        console.log(`   Verified New Total: $${updatedUser.totalInvested}`);

        if (updatedUser.totalInvested === newInvestedAmount) {
            console.log('\n✅ VERIFICATION SUCCESSFUL: Admin API can list, get, and update users.');
        } else {
            console.error('\n❌ VERIFICATION FAILED: Updated amount does not match.');
        }

    } catch (error) {
        console.error('\n❌ VERIFICATION FAILED:', error.message);
    }
}

verifyAdminUsers();
