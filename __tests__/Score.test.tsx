import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import Game from '../src/Containers/Game'; // Update the path

describe('Test Score by user correct', () => {
  it('should be 3 if the user correct', async () => {
    const mockMemory = [
      [1, 1],
      [2, 1],
      [2, 2],
    ];
    const {getByText} = render(
      <Game initScore={2} initMemory={mockMemory} initClickable={true} />,
    );

    const rowPod1 = screen.getByTestId('pod-1-1');

    act(() => {
      fireEvent.press(rowPod1);
    });
    await new Promise(resolve => setTimeout(resolve, 200));

    const rowPod2 = screen.getByTestId('pod-2-1');
    act(() => {
      fireEvent.press(rowPod2);
    });
    await new Promise(resolve => setTimeout(resolve, 200));

    const rowPod3 = screen.getByTestId('pod-2-2');
    act(() => {
      fireEvent.press(rowPod3);
    });
    await new Promise(resolve => setTimeout(resolve, 500));

    await waitFor(() => {
      expect(getByText('Score: 3')).toBeTruthy();
    });
  });
});
