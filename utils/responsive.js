// src/utils/responsive.js

import { Dimensions, PixelRatio, Platform } from "react-native"

const { width, height } = Dimensions.get("window")

// Base dimensions of your design (adjust as per Figma or Sketch reference)
const BASE_WIDTH = 375
const BASE_HEIGHT = 812

// Calculate scale ratios
const scaleWidth = width / BASE_WIDTH
const scaleHeight = height / BASE_HEIGHT

// Clamp utility to keep scale within a usable range
const clamp = (min, value, max) => Math.min(Math.max(value, min), max)

// Limit scaling range to avoid blowing up on tablets/large screens
const limitedScaleWidth = clamp(0.85, scaleWidth, 1.15)
const limitedScaleHeight = clamp(0.85, scaleHeight, 1.15)

/**
 * Returns a responsive width
 * @param {number} size - Design size
 * @returns {number} scaled size
 */
export const responsiveWidth = (size) => {
  return size * limitedScaleWidth
}

/**
 * Returns a responsive height
 * @param {number} size - Design size
 * @returns {number} scaled size
 */
export const responsiveHeight = (size) => {
  return size * limitedScaleHeight
}

/**
 * Returns a responsive font size
 * @param {number} size - Design font size
 * @returns {number} scaled font size
 */
export const responsiveFontSize = (size) => {
  const scale = clamp(0.9, scaleWidth, 1.15)
  const newSize = size * scale

  return Platform.OS === "ios"
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
}

/**
 * Optional: Returns scaled font size considering font scale settings
 * @param {number} size
 * @returns {number}
 */
export const scaleFont = (size) => size * PixelRatio.getFontScale()

/**
 * Optional: Utility to detect tablet-sized screen
 */
export const isTablet = () => {
  return Math.min(width, height) >= 600
}
