import imageUrlBuilder from '@sanity/image-url'
import ImgixClient from '@imgix/js-core';

import {config} from './../lib/config'

const builder = imageUrlBuilder({...config, baseUrl: "https://cdn.sanity.io"})

const imgixClient = new ImgixClient({
  domain: 'skanda-toys.imgix.net',
  secureURLToken: 'aNXHquDVVgYWwsCP',
});

const sanityImageURL = (source) => builder.image(source)

const imgixURL = (url) => imgixClient.buildURL(url, { w: 400, h: 300 });

export default function imgixImage(sanityUrl, width, height) {
  return imgixURL(sanityImageURL(sanityUrl).url())
}