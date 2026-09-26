import { render, screen, waitFor } from '@testing-library/react';
import AddUserForm from '../AddUserForm';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { createQueryWrapper } from '../../../test/createQueryWrapper';

const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('Verify AddUserForm integration', () => {
  beforeEach(() => {
    alertMock.mockClear();
  });

  it('should validate required fields and shows inline errors ', async () => {
    render(<AddUserForm />, { wrapper: createQueryWrapper() });

    const user = userEvent.setup();

    const submitBtn = screen.getByRole('button', { name: /submit/i });

    expect(submitBtn).toBeInTheDocument();

    await user.click(submitBtn);

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    render(<AddUserForm />, { wrapper: createQueryWrapper() });

    const user = userEvent.setup();

    // get all form fields and submit button
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    // type in values
    await user.type(nameInput, 'james don');
    await user.type(emailInput, 'jd@gmail.com');

    // submit form
    user.click(submitBtn); // Awaiting this line will wait until the form is completely submitted. Consequently the next lines that test the intermittent states will fail. Hence don't await!

    await waitFor(() => expect(screen.getByText(/Submitting.../)).toBeInTheDocument());
    expect(screen.getByRole('button', { name: /submitting.../i })).toBeDisabled();

    // listen for success alert
    await waitFor(() => expect(alertMock).toHaveBeenCalledWith('User added successfully!'));

    // The Ui switches back out of submitting
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
