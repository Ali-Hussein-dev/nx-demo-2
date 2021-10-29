// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const nextConfig = require('../../shared-next-configs.js');
const withNx = require('@nrwl/next/plugins/with-nx');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [withNx()],
    [withPWA({ pwa: { dest: '../../dist/apps/main' } })],
  ],
  nextConfig()
);
