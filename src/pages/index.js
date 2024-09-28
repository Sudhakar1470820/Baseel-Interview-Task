import Head from "next/head";
import Layout from "@/components/Layout";
import { Container, Breadcrumbs } from "@mui/material";
import UserTable from "@/components/UserTable";
import Link from "next/link";

export default function Home({ userData }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth={"lg"}>

          <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
            <Link href="/">Home</Link>
          </Breadcrumbs>

          <UserTable userData={userData} />

          <h1>Test</h1>
        </Container>
      </main>
    </>
  );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  // Calling JSON placeholder API
  const result = await fetch(process.env.NEXT_PUBLIC_API);

  const userData = await result.json();
  return {
    props: {
      userData,
    },
  };
}
