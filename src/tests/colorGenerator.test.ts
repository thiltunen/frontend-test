import { getRandomBgColor, getContrastTextColor } from 'utils/colorGenerator';

describe('Color generator', () => {
  test('it should return correct hex color for background', () => {
    const randomColors = [];
    let i = 0;
    while (i < 100) {
      randomColors.push(getRandomBgColor());
      i++;
    }

    expect(
      randomColors.every(
        (color) => typeof color === 'string' && color.length === 7
      )
    ).toBe(true);
  });

  test('it should return correct text hex color for dark backgound', () => {
    const bgColor = '#000000';
    const textColor = getContrastTextColor(bgColor);

    expect(textColor).toBe('#fff');
  });

  test('it should return correct text hex color for light backgound', () => {
    const bgColor = '#ffffff';
    const textColor = getContrastTextColor(bgColor);

    expect(textColor).toBe('#000');
  });
});
