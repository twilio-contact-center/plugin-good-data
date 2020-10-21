const gdc = 'https://analytics.ytica.com/';

// If using https: true, make sure to change the public/plugins.json's src to https:// as well
// https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_configure_webpack_proxy.html

module.exports = {
  devServer: {
    https: true,
    proxy: {
      '/gdc': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: gdc,
        onProxyReq: proxyReq => {
          // Browers may send Origin headers even with same-origin
          // requests. To prevent CORS issues, we have to change
          // the Origin to match the target URL.
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', gdc);
          }
        },
      },
      /* these are only needed for https://localhost:####/account.html to work properly */
      '/packages': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: gdc,
      },
      '/lib': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: gdc,
      },
      '/images': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: gdc,
      },
      '/*.html': {
        cookieDomainRewrite: 'localhost',
        changeOrigin: true,
        secure: false,
        target: gdc,
      },
    },
  },
};