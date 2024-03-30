import Head from 'next/head';
import { useRouter } from 'next/router';
import { websiteMetadata } from '@/constants/metadata';

/**
 * Component to represent the <head> element of the HTML document. The data for each path is stored in the `/constants/metadata.js` file. This component should be added at the top to all files in the `/pages` directory.
 * 
 * @returns {JSX.Element} The <head> element of the HTML document.
 */
export default function MetaHead() {
  // Get metadata for current page path.
  const router = useRouter();
  const currentPath = router.pathname.substring(1);
  const pathMetadata = websiteMetadata.paths[currentPath] || {};

  // Get metadata information from the websiteMetadata object.
  let title = websiteMetadata.title;
  if (pathMetadata.title) title = `${pathMetadata.title} | ${websiteMetadata.title}`;
  const description = pathMetadata.description || websiteMetadata.description;
  const image = pathMetadata.image || websiteMetadata.image;

  // Get domain information from environment variables.
  const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Meta tags for SEO and social sharing --> */}
      <link rel="canonical" href={`https://${domain}`} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      {/* <!-- Meta tags for Meta, Twitter, and social sharing --> */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${domain}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
