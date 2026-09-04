import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

test('presents a clear engineering focus and links to working proof', () => {
  render(<App />);

  expect(screen.getByText(/I am Varun Jose Madanu/i)).toBeInTheDocument();
  expect(screen.getByText('PROOF OF WHAT I CAN BUILD')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /working voice-agent system/i })).toHaveAttribute(
    'href',
    'https://github.com/varunjose/PGAI-Assignment'
  );
});
