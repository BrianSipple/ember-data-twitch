/**
 * Breakpoint threshold measurements in ems.
 */
let THRESHOLDS = {
  mobile: 30,
  tablet: 49.125,
  smallDesktop: 64,
  largeDesktop: 90
};

/**
 * Breakpoint mapping
 *
 *  - In rendered markup, these are converted to dasherized element classes
 *    and prefaced with "media-".
 *  - In interpolated HTMLBars contexts, these are prefaced with "is",
 *    camelized, and available on the `media` object
 *      - for example, "{{#if media.isMobile}}"
 */
export default {
  mobile: `(max-width: ${THRESHOLDS.mobile}em)`,
  tablet: `(min-width: ${THRESHOLDS.mobile + 1}em) and (max-width: ${THRESHOLDS.tablet}em)`,
  smallDesktop: `(min-width: ${THRESHOLDS.tablet + 1}em) and (max-width: ${THRESHOLDS.smallDesktop}em)`,
  largeDesktop: `(min-width: ${THRESHOLDS.smallDesktop + 1}em)`,  // AKA "monitor"

  // meta semantic helpers
  greaterThanMobile: `(min-width: ${THRESHOLDS.mobile + 1}em)`,
  greaterThanTablet: `(min-width: ${THRESHOLDS.tablet + 1}em)`,
  greaterThanSmallDesktop: `(min-width: ${THRESHOLDS.smallDesktop + 1}em)`,
  greaterThanLargeDesktop: `(min-width: ${THRESHOLDS.largeDesktop + 1}em)`,

  lessThanTablet: `(max-width: ${THRESHOLDS.mobile}em)`,
  lessThanSmallDesktop: `(max-width: ${THRESHOLDS.tablet}em)`,
  lessThanLargeDesktop: `(max-width: ${THRESHOLDS.smallDesktop}em)`
};
