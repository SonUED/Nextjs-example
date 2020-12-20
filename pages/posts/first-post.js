import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>Posts Page</Head>
        <h1>
          First Post Page <Link href="/">Next Js</Link>
        </h1>
      </Layout>
    </>
  );
}
