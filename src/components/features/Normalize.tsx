import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const defaultFontSize = Math.round(PixelRatio.getFontScale() * 16);

export function getMultiplier(fontSize: number): number {
  if (fontSize === 16) {
    return 2.2;
  } else if (fontSize >= 19) {
    return 2.2 - (fontSize - 16) * 0.2;
  } else if (fontSize > 16) {
    return 2.2 - (fontSize - 16) * 0.1;
  } else {
    return 2.2 + (16 - fontSize) * 0.05;
  }
}

export function normalize(size: number, fontSize = defaultFontSize) {
  const multiplier = getMultiplier(fontSize);
  const scale = (width / height) * multiplier;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
