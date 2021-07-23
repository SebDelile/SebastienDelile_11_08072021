import { render, screen } from '@testing-library/react';
import Host from './Host.jsx';

describe('GIVEN the Host component', () => {
  describe('WHEN it is rendered', () => {
    beforeEach(() =>
      render(<Host host={{ name: 'john doe', picture: 'path.to.picture' }} />)
    );
    test('THEN it should contain the name of the host', () => {
      expect(screen.getByText(/john/i && /doe/i)).toBeTruthy();
    });
    test('THEN it should contain the picture of the host', () => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
  });
});
