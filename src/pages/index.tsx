import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Banner, Card, DisplayText, Layout, Page, TextStyle } from '@shopify/polaris';

type Props = {
  title: string | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const title = Array.isArray(query["title"]) ? query["title"][0] : query["title"] ?? null;
  return {
    props: {
      title
    }
  }
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Create Next App"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Layout>
          <Layout.Section>
            <Banner title={`Welcome to ${title ?? "Next.js!"}`}>
              <TextStyle variation="subdued">
                Get started by editing{' '}
              </TextStyle>
              <TextStyle variation="code">
                src/pages/index.tsx
              </TextStyle>
            </Banner>
          </Layout.Section>
          <Layout.Section oneHalf>
            <a href="https://nextjs.org/docs">
              <Card title="Documentation &rarr;">
                <Card.Section>
                  <TextStyle variation='subdued'>Find in-depth information about Next.js features and API.</TextStyle>
                </Card.Section>
              </Card>
            </a>
          </Layout.Section>
          <Layout.Section oneHalf>
            <a href="https://nextjs.org/learn">
              <Card title="Learn &rarr;">
                <Card.Section>
                  <TextStyle variation='subdued'>Learn about Next.js in an interactive course with quizzes!</TextStyle>
                </Card.Section>
              </Card>
            </a>
          </Layout.Section>
          <Layout.Section oneHalf>
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <Card title="Examples &rarr;">
                <Card.Section>
                  <TextStyle variation='subdued'>Discover and deploy boilerplate example Next.js projects.</TextStyle>
                </Card.Section>
              </Card>
            </a>
          </Layout.Section>
          <Layout.Section oneHalf>
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <Card title="Deploy &rarr;">
                <Card.Section>
                  <TextStyle variation='subdued'>Instantly deploy your Next.js site to a public URL with Vercel.</TextStyle>
                </Card.Section>
              </Card>
            </a>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  )
}

export default Home
