import {
  getRandomBgColor,
  getContrastTextColor,
} from "components/utils/colorGenerator";

describe("Color generator", () => {
  test("it should return correct hex color for background", () => {
    const bgColor = getRandomBgColor();

    expect(typeof bgColor).toBe("string");
    expect(bgColor.length).toEqual(7);
  });

  test("it should return correct text hex color for dark backgound", () => {
    const bgColor = "#000000";
    const textColor = getContrastTextColor(bgColor);

    expect(textColor).toBe("#fff");
  });

  test("it should return correct text hex color for light backgound", () => {
    const bgColor = "#ffffff";
    const textColor = getContrastTextColor(bgColor);

    expect(textColor).toBe("#000");
  });
});
