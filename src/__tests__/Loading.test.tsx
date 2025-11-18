import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../components/common/Loading';

describe('Loading Component', () => {
  it('should render loading spinner', () => {
    render(<Loading />);
    const spinner = screen.getByRole('generic');
    expect(spinner).toBeTruthy();
  });
});
