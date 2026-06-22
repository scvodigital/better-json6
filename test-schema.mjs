import { getLanguageService, TextDocument } from '@blueglassblock/json5-languageservice';
import assert from 'assert';

console.log('Starting JSON Schema Validation Tests on JSON6 documents...\n');

// 1. Define a JSON Schema
const schema = {
  type: "object",
  properties: {
    message: {
      type: "string",
      minLength: 5
    },
    count: {
      type: "number"
    }
  },
  required: ["message", "count"]
};

// 2. Initialize the Language Service
const schemaUri = "file:///myschema.json";
const languageService = getLanguageService({
  schemaRequestService: async (uri) => {
    if (uri === schemaUri) {
      return JSON.stringify(schema);
    }
    throw new Error(`Schema not found: ${uri}`);
  },
  workspaceContext: {
    resolveRelativePath: (relative, resource) => relative
  }
});

// Configure schemas matching our file
languageService.configure({
  schemas: [
    {
      uri: schemaUri,
      fileMatch: ["file:///myfile.json6"]
    }
  ]
});

async function runTest() {
  // Test Document 1: Valid JSON6 with multi-line string matching schema
  const validDocText = `{
    message: \`line 1
line 2\`,
    count: 42
  }`;
  
  const doc1 = TextDocument.create("file:///myfile.json6", "json5", 1, validDocText);
  const jsonDoc1 = languageService.parseJSONDocument(doc1);
  const diagnostics1 = await languageService.doValidation(doc1, jsonDoc1, { schemaValidation: "error" });
  
  console.log('Diagnostics for valid document:', JSON.stringify(diagnostics1));
  assert.strictEqual(diagnostics1.length, 0, "Valid document should have 0 diagnostics");
  console.log('✓ Successfully validated JSON6 document against JSON Schema.');

  // Test Document 2: Invalid JSON6 (violates schema constraints)
  const invalidDocText = `{
    message: "abc", // minLength is 5, "abc" is only 3
    count: "forty-two" // should be a number
  }`;
  
  const doc2 = TextDocument.create("file:///myfile.json6", "json5", 1, invalidDocText);
  const jsonDoc2 = languageService.parseJSONDocument(doc2);
  const diagnostics2 = await languageService.doValidation(doc2, jsonDoc2, { schemaValidation: "error" });
  
  console.log('Diagnostics for invalid document:', JSON.stringify(diagnostics2));
  assert.ok(diagnostics2.length > 0, "Invalid document should have diagnostics errors");
  
  // Verify that both errors are present:
  // 1. message minLength constraint
  // 2. count type constraint
  const messages = diagnostics2.map(d => d.message);
  assert.ok(messages.some(m => m.includes("shorter than")), "Should report string length error");
  assert.ok(messages.some(m => m.includes("Incorrect type")), "Should report incorrect type error");
  console.log('✓ Successfully identified schema validation violations in JSON6 document.');

  console.log('\nAll JSON Schema validation tests passed successfully!');
}

runTest().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
