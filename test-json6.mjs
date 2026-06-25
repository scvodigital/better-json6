import { parse } from '@blueglassblock/json5-kit';
import assert from 'assert';

console.log('Starting JSON6 Multi-line String Support Tests...\n');

try {
  // Test 1: Multi-line strings using double quotes (JSON6)
  const textDouble = `{
    "key": "line 1
line 2"
  }`;
  const parsedDouble = parse(textDouble);
  console.log('✓ Successfully parsed double-quoted multi-line string.');
  console.log('Value:', JSON.stringify(parsedDouble));
  assert.deepStrictEqual(parsedDouble, { key: 'line 1\nline 2' });

  // Test 2: Multi-line strings using backticks (JSON6)
  const textBacktick = `{
    \`key2\`: \`line 1
line 2\`
  }`;
  const parsedBacktick = parse(textBacktick);
  console.log('✓ Successfully parsed backtick-enclosed multi-line string (and key).');
  console.log('Value:', JSON.stringify(parsedBacktick));
  assert.deepStrictEqual(parsedBacktick, { key2: 'line 1\nline 2' });

  // Test 3: Backtick escaping
  const textBacktickEscaped = `{
    \`key3\`: \`line 1\\\`line 2\`
  }`;
  const parsedBacktickEscaped = parse(textBacktickEscaped);
  console.log('✓ Successfully parsed backtick string with escaped backtick.');
  console.log('Value:', JSON.stringify(parsedBacktickEscaped));
  assert.deepStrictEqual(parsedBacktickEscaped, { key3: 'line 1`line 2' });

  // Test 4: Multi-line strings using single quotes (JSON6)
  const textSingle = `{
    'key4': 'line 1
line 2'
  }`;
  const parsedSingle = parse(textSingle);
  console.log('✓ Successfully parsed single-quoted multi-line string.');
  console.log('Value:', JSON.stringify(parsedSingle));
  assert.deepStrictEqual(parsedSingle, { key4: 'line 1\nline 2' });

  // Test 5: Commented inline strings (HTML, SQL, JS)
  const textCommented = `{
    htmlCode: /*html*/\`<div class="test">Hello</div>\`,
    sqlQuery: /*sql*/"SELECT * FROM users",
    jsScript: /*javascript*/'const x = 42;'
  }`;
  const parsedCommented = parse(textCommented);
  console.log('✓ Successfully parsed inline commented strings.');
  console.log('Value:', JSON.stringify(parsedCommented));
  assert.deepStrictEqual(parsedCommented, {
    htmlCode: '<div class="test">Hello</div>',
    sqlQuery: 'SELECT * FROM users',
    jsScript: 'const x = 42;'
  });

  console.log('\nAll tests passed successfully! JSON6 features are fully supported.');
} catch (error) {
  console.error('\nTest failed:', error);
  process.exit(1);
}
