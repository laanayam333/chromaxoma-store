import { createClient, createImageUrlBuilder, createPortableTextComponent, createPreviewSubscriptionHook } from "next-sanity";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
if (!config.dataset) {
  throw Error("The dataset name is not set. Check your environment variables.");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
});

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);

/*-------------------------------------*/
/*-------------------------------------*/
/*-------------------------------------*/

// import sanityClient from '@sanity/client'
// import sanityImage from '@sanity/image-url'

// const options = {
//   // Find your project ID and dataset in `sanity.json` in your studio project
//   dataset: 'production',
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   useCdn: process.env.NODE_ENV === 'production',
//   // useCdn == true gives fast, cheap responses using a globally distributed cache.
//   // Set this to false if your application require the freshest possible
//   // data always (potentially slightly slower and a bit more expensive).
// }

// const client = sanityClient(options)

// export const imageBuilder = sanityImage(client)

// export const previewClient = sanityClient({
//   ...options,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// })

// export default client
