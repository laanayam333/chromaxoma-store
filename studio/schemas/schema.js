import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import customImage from './customImage';

// Singleton
import metadata from './metadata';
import colors from './colors';
import navigation from './navigation';
import homePage from './homePage';
import aboutPage from './aboutPage';

import print from './print';
import author from './author';
import series from './series';

// Commerce.js
import commercejsProducts from './commercejsProducts';
import singleProduct from './singleProduct';
import price from './price';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    customImage,

    // Singleton
    metadata,
    colors,
    navigation,
    homePage,
    aboutPage,

    print,
    author,
    series,

    // Commerce.js
    commercejsProducts,
    singleProduct,
    price,
  ]),
});
