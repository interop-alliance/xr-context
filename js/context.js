'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,

    LoginDisplayCredential: {
      '@id': 'https://w3id.org/xr#LoginDisplayCredential',
      '@context': {
        '@protected': true,

        displayIcon: {
          '@id': 'https://schema.org/image',
          '@type': '@id'
        },

        displayName: 'https://schema.org/name'
      }
    },
    UserPreferencesCredential: {
      '@id': 'https://w3id.org/xr#UserPreferencesCredential',
    }
  }
};
