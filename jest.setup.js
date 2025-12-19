import '@testing-library/jest-dom/extend-expect';

// Allow router mocks.
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock('next/router', () => require('next-router-mock'));
