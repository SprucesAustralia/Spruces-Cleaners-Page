module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/spruces-cleaners-page' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/spruces-cleaners-page' : '',
};
