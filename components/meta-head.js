import Head from 'next/head';

export default function MetaHead({ title, description }) {
  if (title === undefined) title = 'Template';
  else title = title + ' | Template';
  if (description === undefined) description = 'Template project used in Synapzi.';

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.ico" />
      {/* <!-- Meta tags for SEO and social sharing --> */}
      <link rel="canonical" href="https://template.com" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      {/* <!-- Meta tags for Meta, Twitter, and social sharing --> */}
      <meta property="og:title" content="Template" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://example.com/images/logo.png" />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
