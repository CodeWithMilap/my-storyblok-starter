import type React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Button from '@/components/Button';

test('renders button', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText(/click/i)).toBeInTheDocument();
});