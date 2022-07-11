import React from 'react';
import {
  render,
  renderHook,
  RenderHookResult,
  RenderResult,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTranslation } from 'hooks/useTranslation';
import { Button } from './index';

jest.mock('next/router', () => ({
  useRouter: () => ({ locale: 'es' }),
}));

describe('<Button isLoading />', () => {
  const spyMock = jest.fn();
  const label = 'button_label';
  let component: RenderResult;
  let translationHook: RenderHookResult<
    ReturnType<typeof useTranslation>,
    void
  >;

  beforeEach(() => {
    translationHook = renderHook(() => useTranslation());
    component = render(
      <Button onClick={spyMock} isLoading>
        {label}
      </Button>
    );
  });

  test('display loading message when is loading', () => {
    const button = component.getByText(
      translationHook.result.current.translation.globalMsg.loading
    );

    expect(button).not.toHaveTextContent(label);
  });
});
