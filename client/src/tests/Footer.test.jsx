import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer.jsx';
import { beforeEach, test } from 'vitest';
import { expect } from 'vitest';

describe('Footer testing', () => {
    beforeEach(() => {
        render(<Footer />);
    });
    test("should render política de cookies", () => {
        const cookiesText = screen.getByText(/política de cookies/i);
        expect(cookiesText).toBeDefined();
    });
    test("should render aviso legal", () => {
        const avisoLegalText = screen.getByText(/aviso legal/i);
        expect(avisoLegalText).toBeDefined();

    });
});