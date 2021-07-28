import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown.jsx';

describe('GIVEN the Dropdown component', () => {
  describe('WHEN it is rendered in close position', () => {
    beforeEach(() =>
      render(
        <Dropdown
          title="title"
          body="body text"
          isOpen={false}
          setOpenDropdown={() => null}
        />
      )
    );
    test('THEN it should contain a title', () => {
      expect(screen.getByText(/title/i)).toBeTruthy();
    });
    test('THEN it should contain an icon', () => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
    test('THEN it should not contain a body', () => {
      const dropdownBody = screen.queryByText(/body text/i);
      expect(dropdownBody.classList).not.toContain('dropdown__body--open');
    });
  });
  describe('WHEN it is rendered in open position with a paragraph', () => {
    beforeEach(() =>
      render(
        <Dropdown
          title="title"
          body="body text"
          isOpen={true}
          setOpenDropdown={() => null}
        />
      )
    );
    test('THEN it should contain a body as a string', () => {
      const dropdownBody = screen.queryByText(/body text/i);
      expect(dropdownBody.classList).toContain('dropdown__body--open');
      expect(dropdownBody.nodeName).toBe('P');
    });
  });
  describe('WHEN it is rendered in open position with a table', () => {
    beforeEach(() =>
      render(
        <Dropdown
          title="title"
          body={['body text', 'second element']}
          isOpen={true}
          setOpenDropdown={() => null}
        />
      )
    );
    test('THEN it should contain a body as a unordered list', () => {
      const dropdownBody = screen.queryByText(/body text/i).parentNode;
      expect(dropdownBody.classList).toContain('dropdown__body--open');
      expect(dropdownBody.nodeName).toBe('UL');
    });
  });
  describe('WHEN I click on the dropdown header', () => {
    const setOpenDropdown = jest.fn();
    beforeEach(() => {
      render(
        <Dropdown
          title="title"
          body="body text"
          isOpen={false}
          setOpenDropdown={setOpenDropdown}
        />
      );
      fireEvent.click(screen.getByRole('button'));
    });
    test('THEN it should call the function with suitable argument', () => {
      expect(setOpenDropdown).toBeCalledWith('title');
    });
  });
});
