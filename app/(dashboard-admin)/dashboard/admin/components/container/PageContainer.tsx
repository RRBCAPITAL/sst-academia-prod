import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const PageContainer = ({ title, description, children }: Props) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
    <main>{children}</main>
  </>
);

export default PageContainer;
