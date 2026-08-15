/** 
 * @type {import('@stryker-mutator/core').PartialStrykerOptions} 
*/
module.exports = {
  mutate: ['src/pricing.js', 'src/checkout.js'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  ignoreStatic: true,
  reporters: ['html', 'clear-text', 'progress'],
  thresholds: {
    high: 90,
    low: 40,
    break: 70,
  },
  incremental: true,
};
