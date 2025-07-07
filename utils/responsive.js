// src/utils/responsive.js
import { Dimensions, Platform, PixelRatio } from "react-native"

const { width, height } = Dimensions.get("window")

// Adjust these based on your design's base screen size.
// For example, if your design was made for an iPhone 8:
const BASE_WIDTH = 375
const BASE_HEIGHT = 836 // Common iPhone X/XS/11 Pro height, adjust to your specific design

/**
 * Calculates a responsive width based on the base design width.
 * @param {number} size - The desired size from the design mockup.
 * @returns {number} The scaled width.
 */
export const responsiveWidth = (size) => {
  return (width / BASE_WIDTH) * size
}

/**
 * Calculates a responsive height based on the base design height.
 * @param {number} size - The desired size from the design mockup.
 * @returns {number} The scaled height.
 */
export const responsiveHeight = (size) => {
  return (height / BASE_HEIGHT) * size
}

/**
 * Calculates a responsive font size based on the base design width.
 * Typically, font sizes scale better with width for consistency.
 * @param {number} size - The desired font size from the design mockup.
 * @returns {number} The scaled font size.
 */
export const responsiveFontSize = (size) => {
  const newSize = (width / BASE_WIDTH) * size
  // Optional: Add a PixelRatio based adjustment for very small fonts to improve readability
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 // Android often needs a slight adjustment
  }
}

// Optional: If you need to scale based on specific font scaling factor, though responsiveFontSize often covers it
export const scaleFont = (size) => size * PixelRatio.getFontScale()
