import React from 'react';
import { render } from '@testing-library/react';

import Wrapper from './Wrapper';

test('render components Wrapper', async () => {
  const { getByText } = render(<Wrapper />);

  expect(getByText('Simon Says')).toBeInTheDocument();
});
