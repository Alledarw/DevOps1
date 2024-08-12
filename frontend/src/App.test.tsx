import React from 'react';
import { render } from '@testing-library/react';
import AuthPage from './pages/auth';
import { BrowserRouter } from 'react-router-dom';
import TodosPage from './pages/todos';

describe('AuthPage component', () => {
  it('renders AuthPage component correctly', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <AuthPage />
      </ BrowserRouter>
    );

    expect(getAllByText('Login')).toHaveLength(2);
    expect(getAllByText('Register')).toHaveLength(1);
  });
});

describe('TodosPage component', () => {
  it('renders TodosPage component correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <TodosPage />
      </BrowserRouter>
    );

    expect(getByText('My Todos')).toBeInTheDocument();

    expect(getByText('Logout')).toBeInTheDocument();
  });
});
