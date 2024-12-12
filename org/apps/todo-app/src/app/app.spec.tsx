import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    expect(getByText(/Welcome todo-app/gi)).toBeTruthy();
  });
});
