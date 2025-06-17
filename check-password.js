const bcrypt = require('bcryptjs');

const plainPassword = 'test123';
const existingHash = '$2b$10$1aYoqKrXtD3AFevGeT8KaOG.tzsl6x7X2hIht7MEpC.4N1hcz3FUG';

async function runChecks() {
    try {
        // Step 1: Generate new hash
        const newHash = await bcrypt.hash(plainPassword, 10);
        console.log('🔐 New Hash:', newHash);

        // Step 2: Compare with existing hash
        const isMatch = await bcrypt.compare(plainPassword, existingHash);
        console.log(isMatch ? '✅ Password matches.' : '❌ Password does NOT match.');
    } catch (err) {
        console.error('Error:', err);
    }
}

runChecks();
