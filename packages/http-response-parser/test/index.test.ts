import { mockResponse, mockContext } from './fixtures/mock-data';
const noah = require('@serverless-devs/noah-core');
const httpResponseParser = require('../src');

describe('http-response-parser测试', () => {
  test('html', async () => {
    const mockRequest = { method: 'GET' };
    const handler = noah((request) => {
      return {
        html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          text/html
      </body>
      </html>`,
      };
    });

    handler.use(httpResponseParser());
    await handler(mockRequest, mockResponse, mockContext);
  });
});