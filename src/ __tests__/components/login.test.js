import { render, fireEvent, screen } from '@testing-library/react-native';
import React from 'react';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn();

    render(<SignInContainer onSubmit={onSubmit} />);

    fireEvent.changeText(
      screen.getByPlaceholderText('Enter your username'),
      'testuser'
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Enter your password'),
      'validpassword'
    );
    fireEvent.press(screen.getByText('Sign in'));

    await new Promise((resolve) => setTimeout(resolve, 500));

    expect(onSubmit.mock.calls).toHaveLength(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'testuser',
      password: 'validpassword',
    });
  });
});
