'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',
    '@protected': true,

    displayIcon: {
      '@id': 'https://schema.org/image',
      '@type': '@id'
    },

    displayName: 'https://schema.org/name',

    LoginDisplayCredential: {
      '@id': 'https://w3id.org/xr#LoginDisplayCredential'
    },
    UserPreferencesCredential: {
      '@id': 'https://w3id.org/xr#UserPreferencesCredential',
    },
    XrAgentCredential: 'https://w3id.org/xr#XrAgentCredential'
  }
};
