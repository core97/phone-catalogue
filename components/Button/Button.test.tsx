import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './index';

jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'es' }),
}));

describe('<Button as="button" />', () => {
  const spyMock = jest.fn();
  const label = 'button_label';
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Button as="button" onClick={spyMock}>
        {label}
      </Button>
    );
  });

  test('renders content', () => {
    expect(component.container).toHaveTextContent(label);
  });

  test('clicking the button calls event handler once', () => {
    const button = component.getByText(label);

    fireEvent.click(button);

    expect(spyMock).toHaveBeenCalledTimes(1);
  });
});
