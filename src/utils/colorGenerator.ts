type RGB = {
  r: number;
  g: number;
  b: number;
};

const rgbToYIQ = ({ r, g, b }: RGB): number => {
  return (r * 299 + g * 587 + b * 114) / 1000;
};

const hexToRgb = (hex: string): RGB | undefined => {
  if (!hex || hex === undefined || hex === "") {
    return undefined;
  }

  const result: RegExpExecArray | null =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
};

export const getRandomBgColor = () => {
  return (
    "#" +
    ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6
    )
  );
};

export const getContrastTextColor = (
  colorHex: string | undefined,
  threshold: number = 128
): string => {
  if (colorHex === undefined) return "#000";

  const rgb: RGB | undefined = hexToRgb(colorHex);

  if (rgb === undefined) return "#000";

  return rgbToYIQ(rgb) >= threshold ? "#000" : "#fff";
};
