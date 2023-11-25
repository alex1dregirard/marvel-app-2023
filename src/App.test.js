import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

describe('App', () => {

  test('render Marvel App', async () => {
    await act(async () => {
      render(<App />);
    });

    const h1Element = screen.getByRole('heading', { level: 1, name: "Marvel App" });
    expect(h1Element).toBeInTheDocument();
  });

});