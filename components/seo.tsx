import Head from 'next/head'

interface SEOProps {
  pageTitle: string
  pageDescription: string
}

const SEO = ({ pageTitle, pageDescription }: SEOProps) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
  </Head>
)

export default SEO
