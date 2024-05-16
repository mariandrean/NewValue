import { render, screen } from '@testing-library/react'
import { vi } from 'vitest';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, expect, test } from 'vitest'

test("renders Home component", () => {
    render(<ErrorBoundary />);
    const titleElement = screen.getByText(/404/i);
    expect(titleElement).toBeDefined();
})