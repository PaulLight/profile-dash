import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from '../Counter';

describe('Counter', () => {
    it('starts at 0', () => {
        render(<Counter />);
        expect(screen.getByText(/count is /i)).toBeInTheDocument()
    })

    it('increments when + is clicked', () => {
        render(<Counter />)
    })
})
