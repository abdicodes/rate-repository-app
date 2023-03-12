import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import SignIn from '../../components/SignIn';

describe('SignIn', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(<SignIn onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId('usernameField'), 'testuser');
    fireEvent.changeText(getByTestId('passwordField'), 'validpassword');
    fireEvent.press(getByTestId('submitButton'));

    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(onSubmit.mock.calls).toHaveLength(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'testuser',
      password: 'validpassword',
    });
  });
});
