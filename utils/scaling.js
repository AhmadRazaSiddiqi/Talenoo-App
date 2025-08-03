// utils/scaling.js
import { Dimensions } from 'react-native';

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Your Figma design dimensions
const FIGMA_WIDTH = 375;
const FIGMA_HEIGHT = 836;

/**
 * Converts Figma pixel values to percentage-based width
 * @param {number} pixels - Pixel value from Figma design
 * @returns {string} - Percentage string for responsive styling
 */
export const widthPercent = (pixels) => {
  const percentage = (pixels / FIGMA_WIDTH) * 100;
  return `${percentage}%`;
};

/**
 * Converts Figma pixel values to percentage-based height
 * @param {number} pixels - Pixel value from Figma design
 * @returns {string} - Percentage string for responsive styling
 */
export const heightPercent = (pixels) => {
  const percentage = (pixels / FIGMA_HEIGHT) * 100;
  return `${percentage}%`;
};

/**
 * Converts Figma pixel values to responsive pixel values
 * @param {number} pixels - Pixel value from Figma design
 * @param {'width'|'height'} [dimension='width'] - Base dimension for scaling
 * @returns {number} - Responsive pixel value
 */
export const responsivePixels = (pixels, dimension = 'width') => {
  const base = dimension === 'height' ? FIGMA_HEIGHT : FIGMA_WIDTH;
  const device = dimension === 'height' ? height : width;
  return (pixels / base) * device;
};

/**
 * Special scaling for fonts that maintains readability
 * @param {number} pixels - Font size in Figma pixels
 * @returns {number} - Responsive font size
 */
export const responsiveFont = (pixels) => {
  const scaleFactor = Math.min(width / FIGMA_WIDTH, 1.5); // Cap scaling at 150%
  return pixels * scaleFactor;
};

// Export all utilities
export default {
  wp: widthPercent,
  hp: heightPercent,
  rp: responsivePixels,
  rf: responsiveFont
};