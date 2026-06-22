import { vi } from 'vitest';
import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ContactForm from "../ContactForm";

describe('Contact form', () => {
    it('start with empty form', () => {
        render(<ContactForm />)
        expect(screen.getByLabelText(/Enter your name/i)).toBeInTheDocument();
    })

    it('fill the form', async () => {
        const user = userEvent.setup();
        const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

        render(<ContactForm />)

        const nameInput = screen.getByLabelText(/Enter your name/i);
        const emailInput = screen.getByLabelText(/Enter your email/i);
        const getValuesBtn = screen.getByText(/Get Values/i);
        const clearValuesBtn = screen.getByText(/Clear Values/i);

        await user.click(nameInput);
        await user.type(nameInput, "John");

        await user.click(emailInput);
        await user.type(emailInput, "sdsad@gmail.com");

        expect(nameInput).toHaveValue("John");
        expect(emailInput).toHaveValue("sdsad@gmail.com");

        await user.click(getValuesBtn);
        expect(logSpy).toHaveBeenCalledWith("John");
        expect(logSpy).toHaveBeenCalledWith("sdsad@gmail.com");

        logSpy.mockRestore();

        await user.click(clearValuesBtn);
        
        expect(emailInput).toHaveValue("");
        expect(nameInput).toHaveValue("");
    })
})