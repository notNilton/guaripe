import axios from 'axios';

async function verifyAuth() {
  const baseUrl = 'http://localhost:3005/api/auth';
  const user = {
    name: 'Test User',
    email: `test-${Date.now()}@example.com`,
    password: 'password123',
  };

  try {
    console.log('1. Registering user...');
    const registerRes = await axios.post(`${baseUrl}/register`, user);
    console.log('Registration successful:', registerRes.data);

    console.log('2. Logging in (Expect failure due to PENDING status)...');
    try {
      await axios.post(`${baseUrl}/login`, {
        email: user.email,
        password: user.password,
      });
      console.error('❌ Verification FAILED: Login succeeded but should have failed (PENDING status).');
      process.exit(1);
    } catch (error: any) {
      if (error.response && error.response.status === 401 && error.response.data.message === 'Account pending approval') {
        console.log('✅ Verification PASSED: Login failed as expected with "Account pending approval".');
      } else {
        console.error('❌ Verification FAILED: Unexpected error:', error.response ? error.response.data : error.message);
        process.exit(1);
      }
    }
  } catch (error: any) {
    console.error('❌ Verification FAILED (Registration or other error):', error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

verifyAuth();
