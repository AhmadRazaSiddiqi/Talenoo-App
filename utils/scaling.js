// src/utils/responsive.js - React Native Mobile Version
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

// Your Figma design base dimensions
const FIGMA_WIDTH = 375;
const FIGMA_HEIGHT = 812;

/**
 * Convert Figma width pixels to responsive width
 * @param {number} pixels - Width in pixels from Figma design
 * @returns {number} Responsive width
 */
export const rw = (pixels) => {
  const percentage = (pixels / FIGMA_WIDTH) * 100;
  return responsiveWidth(percentage);
};

/**
 * Convert Figma height pixels to responsive height
 * @param {number} pixels - Height in pixels from Figma design
 * @returns {number} Responsive height
 */
export const rh = (pixels) => {
  const percentage = (pixels / FIGMA_HEIGHT) * 100;
  return responsiveHeight(percentage);
};

/**
 * Convert Figma font size pixels to responsive font size
 * @param {number} pixels - Font size in pixels from Figma design
 * @returns {number} Responsive font size
 */
export const rf = (pixels) => {
  const percentage = (pixels / FIGMA_WIDTH) * 100;
  return responsiveFontSize(percentage);
};

/**
 * Responsive width with min/max constraints
 * @param {number} pixels - Width in pixels from Figma design
 * @param {Object} options - Min/max constraints
 * @returns {number} Constrained responsive width
 */
export const rwConstrained = (pixels, options = {}) => {
  const { min, max } = options;
  let responsiveWidthValue = rw(pixels);
  
  if (min && responsiveWidthValue < min) return min;
  if (max && responsiveWidthValue > max) return max;
  
  return responsiveWidthValue;
};

/**
 * Responsive height with min/max constraints
 * @param {number} pixels - Height in pixels from Figma design
 * @param {Object} options - Min/max constraints
 * @returns {number} Constrained responsive height
 */
export const rhConstrained = (pixels, options = {}) => {
  const { min, max } = options;
  let responsiveHeightValue = rh(pixels);
  
  if (min && responsiveHeightValue < min) return min;
  if (max && responsiveHeightValue > max) return max;
  
  return responsiveHeightValue;
};

/**
 * Responsive font size with min/max constraints
 * @param {number} pixels - Font size in pixels from Figma design
 * @param {Object} options - Min/max constraints
 * @returns {number} Constrained responsive font size
 */
export const rfConstrained = (pixels, options = {}) => {
  const { min = 10, max = 40 } = options; // Default min/max for mobile readability
  let responsiveFontValue = rf(pixels);
  
  if (responsiveFontValue < min) return min;
  if (responsiveFontValue > max) return max;
  
  return responsiveFontValue;
};

/**
 * Get responsive margin/padding values
 * @param {Object|number} values - Object with spacing values or single number
 * @returns {Object} Responsive spacing object
 */
export const rSpacing = (values) => {
  if (typeof values === 'number') {
    // Single value for all sides
    const horizontal = rw(values);
    const vertical = rh(values);
    return {
      top: vertical,
      right: horizontal,
      bottom: vertical,
      left: horizontal,
    };
  }
  
  const { top = 0, right = 0, bottom = 0, left = 0 } = values;
  return {
    top: rh(top),
    right: rw(right),
    bottom: rh(bottom),
    left: rw(left),
  };
};

/**
 * Create responsive border radius
 * @param {number} pixels - Border radius in pixels from Figma
 * @returns {number} Responsive border radius
 */
export const rBorderRadius = (pixels) => {
  return rw(pixels); // Use width-based scaling for border radius
};

/**
 * Get responsive padding shorthand
 * @param {number} vertical - Vertical padding in pixels
 * @param {number} horizontal - Horizontal padding in pixels
 * @returns {Object} Padding object
 */
export const rPadding = (vertical, horizontal = vertical) => {
  return {
    paddingVertical: rh(vertical),
    paddingHorizontal: rw(horizontal),
  };
};

/**
 * Get responsive margin shorthand
 * @param {number} vertical - Vertical margin in pixels
 * @param {number} horizontal - Horizontal margin in pixels
 * @returns {Object} Margin object
 */
export const rMargin = (vertical, horizontal = vertical) => {
  return {
    marginVertical: rh(vertical),
    marginHorizontal: rw(horizontal),
  };
};

// Quick access object for all functions
export const R = {
  w: rw,
  h: rh,
  f: rf,
  wc: rwConstrained,
  hc: rhConstrained,
  fc: rfConstrained,
  spacing: rSpacing,
  br: rBorderRadius,
  padding: rPadding,
  margin: rMargin,
};

// Export individual functions as default for easy importing
export default {
  rw,
  rh,
  rf,
  rwConstrained,
  rhConstrained,
  rfConstrained,
  rSpacing,
  rBorderRadius,
  rPadding,
  rMargin,
  R,
};