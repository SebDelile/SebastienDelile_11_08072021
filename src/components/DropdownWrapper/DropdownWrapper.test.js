import { render, screen, fireEvent } from '@testing-library/react';
import DropdownWrapper from './DropdownWrapper.jsx';

describe('GIVEN the DropdownWrapper component', () => {
  describe('WHEN it is rendered with 2 categories', () => {
    beforeEach(() =>
      render(
        <DropdownWrapper
          categories={[
            ['title 1', 'body text 1'],
            ['title 2', 'body text 2'],
          ]}
          isLargeScreen2columns={false}
        />
      )
    );
    test('THEN it should contain 2 dropdowns', () => {
      expect(screen.getAllByRole('button').length).toBe(2);
    });
  });
  describe('WHEN it is rendered and as single column on large screen', () => {
    beforeEach(() =>
      render(<DropdownWrapper categories={[]} isLargeScreen2columns={false} />)
    );
    test('THEN it should not be allowed to have 2-columns display on large screen', () => {
      expect(
        document.querySelector('.dropdown-wrapper').classList
      ).not.toContain('dropdown-wrapper--large-screen-2-col');
    });
  });
  describe('WHEN it is rendered as dual column on large screen', () => {
    beforeEach(() =>
      render(<DropdownWrapper categories={[]} isLargeScreen2columns={true} />)
    );
    test('THEN it should be allowed to have 2-columns display on large screen', () => {
      expect(document.querySelector('.dropdown-wrapper').classList).toContain(
        'dropdown-wrapper--large-screen-2-col'
      );
    });
  });
  describe('WHEN I click on a close dropdown', () => {
    beforeEach(() => {
      render(
        <DropdownWrapper
          categories={[
            ['title 1', 'body text 1'],
            ['title 2', 'body text 2'],
          ]}
          isLargeScreen2columns={false}
        />
      );
      fireEvent.click(screen.getByText(/title 1/i));
    });
    test('THEN the dropdown should be opened', () => {
      expect(screen.getByText(/body text 1/i).classList).toContain(
        'dropdown__body--open'
      );
    });
  });
  describe('WHEN I click on a open dropdown', () => {
    beforeEach(() => {
      render(
        <DropdownWrapper
          categories={[
            ['title 1', 'body text 1'],
            ['title 2', 'body text 2'],
          ]}
          isLargeScreen2columns={false}
        />
      );
      fireEvent.click(screen.getByText(/title 1/i));
      fireEvent.click(screen.getByText(/title 1/i));
    });
    test('THEN the dropdown should be closed', () => {
      expect(screen.getByText(/body text 1/i).classList).not.toContain(
        'dropdown__body--open'
      );
    });
  });
});
