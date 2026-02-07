#!/usr/bin/env node
/**
 * API Endpoint Testing Script for NyxTitan
 * Tests critical API endpoints to ensure they're working correctly
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testEndpoint(name, method, path, options = {}) {
  try {
    log(`\n Testing ${method} ${path}...`, 'cyan');
    
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json().catch(() => ({}));
    
    if (response.ok) {
      log(`✓ ${name}: PASSED (${response.status})`, 'green');
      return { success: true, status: response.status, data };
    } else {
      log(`✗ ${name}: FAILED (${response.status})`, options.expectedFail ? 'yellow' : 'red');
      log(`  Response: ${JSON.stringify(data)}`, 'yellow');
      return { success: false, status: response.status, data };
    }
  } catch (error) {
    log(`✗ ${name}: ERROR - ${error.message}`, 'red');
    return { success: false, error: error.message };
  }
}

async function runTests() {
  log('\n========================================', 'blue');
  log('NyxTitan API Endpoint Tests', 'blue');
  log('========================================\n', 'blue');

  const results = {
    passed: 0,
    failed: 0,
    total: 0,
  };

  // Test 1: Employees API - GET (should fail without auth)
  const test1 = await testEndpoint(
    'Employees GET (no auth)',
    'GET',
    '/api/employees',
    { expectedFail: true }
  );
  results.total++;
  if (test1.status === 401) {
    results.passed++;
    log('  ✓ Correctly requires authentication', 'green');
  } else {
    results.failed++;
  }

  // Test 2: Time-off API - GET (should fail without auth)
  const test2 = await testEndpoint(
    'Time-off GET (no auth)',
    'GET',
    '/api/time-off',
    { expectedFail: true }
  );
  results.total++;
  if (test2.status === 401) {
    results.passed++;
    log('  ✓ Correctly requires authentication', 'green');
  } else {
    results.failed++;
  }

  // Test 3: Guild Admin Activity - GET (should fail without auth)
  const test3 = await testEndpoint(
    'Guild Activity GET (no auth)',
    'GET',
    '/api/guild/admin/activity',
    { expectedFail: true }
  );
  results.total++;
  if (test3.status === 401 || test3.status === 403) {
    results.passed++;
    log('  ✓ Correctly requires authentication', 'green');
  } else {
    results.failed++;
  }

  // Test 4: Reports Analytics - GET
  const test4 = await testEndpoint(
    'Reports GET',
    'GET',
    '/api/reports-analytics'
  );
  results.total++;
  if (test4.success || test4.status === 401) {
    results.passed++;
    log('  ✓ Endpoint responds correctly', 'green');
  } else {
    results.failed++;
  }

  // Test 5: NextAuth API - Check if handler exists
  const test5 = await testEndpoint(
    'NextAuth Handler',
    'GET',
    '/api/auth/providers'
  );
  results.total++;
  if (test5.success) {
    results.passed++;
    log('  ✓ NextAuth v5 handler working', 'green');
  } else {
    results.failed++;
  }

  // Summary
  log('\n========================================', 'blue');
  log('Test Summary', 'blue');
  log('========================================', 'blue');
  log(`Total Tests: ${results.total}`, 'cyan');
  log(`Passed: ${results.passed}`, 'green');
  log(`Failed: ${results.failed}`, results.failed > 0 ? 'red' : 'green');
  log(`Success Rate: ${((results.passed / results.total) * 100).toFixed(1)}%\n`, 
    results.failed === 0 ? 'green' : 'yellow');

  // Exit with appropriate code
  process.exit(results.failed > 0 ? 1 : 0);
}

// Run tests if this is the main module
if (require.main === module) {
  log('Starting API endpoint tests...', 'cyan');
  log(`Base URL: ${BASE_URL}\n`, 'cyan');
  
  runTests().catch(error => {
    log(`\nFatal error: ${error.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { testEndpoint, runTests };
