import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { printQuery, printPathQuery } from 'lib/api';
import { getClient } from 'lib/sanity';

export default function PrintPage({ print, morePrints, preview }) {
  const router = useRouter();
  if (!router.isFallback && !print?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article>
            <Head>
              <title>{print.title} | Chromaxoma</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
          </article>

          {morePrints.length > 0 && <MoreStories prints={morePrints} />}
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const printData = await getClient(preview).fetch(printQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      printData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(printPathQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
