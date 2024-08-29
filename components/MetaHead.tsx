import Head from 'next/head';
import { useRouter } from 'next/router';
import metaData from '@/constants/metadata.json';

interface MetaHeadProps {
  propTitle?: string;
  propDescription?: string;
  propImage?: string;
}

interface MetaHeadContent {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Component to represent the <head> element of the HTML document. The data for each path is stored in the `/constants/metadata.js` file. This component should be added at the top to all files in the `/pages` directory.
 *
 * @param {string} propTitle The title of the page.
 * @param {string} propDescription The description of the page.
 * @param {string} propImage The image URL of the page.
 *
 * @returns {JSX.Element} The <head> element of the HTML document.
 */
export default function MetaHead({ propTitle, propDescription, propImage }: MetaHeadProps) {
  // Get metadata for current page path.
  const router = useRouter();
  const currentPath = router.pathname.substring(1);
  const currentPageData: MetaHeadContent = metaData.find((page) => page.path === currentPath) || {};

  // Override the default title if a title is passed as a prop
  if (propTitle) {
    currentPageData.title = propTitle;
  }

  // Override the default description if a description is passed as a prop
  if (propDescription) {
    currentPageData.description = propDescription;
  }

  // Override the default image if an image is passed as a prop
  if (propImage) {
    currentPageData.image = propImage;
  }

  const title = currentPageData.title ? `${currentPageData.title} | Template` : 'Template';
  const description = currentPageData.description || 'This is a template, change this description.';
  const image = currentPageData.image || 'https://www.example.com/sharing.jpg';

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Meta tags for SEO and social sharing --> */}
      <link rel="canonical" href="https://example.com" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      {/* <!-- Meta tags for Meta, Twitter, and social sharing --> */}
      <meta property="og:title" content="Template" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
