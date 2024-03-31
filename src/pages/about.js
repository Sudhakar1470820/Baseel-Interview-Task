import Head from "next/head";
import Layout from "@/components/Layout";
import { Container, Breadcrumbs } from "@mui/material";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth={"lg"}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
            <Link href="/about">About</Link>
          </Breadcrumbs>
          <ContactForm />
        </Container>
      </main>
    </>
  );
};

export default About;

About.getLayout = (page) => <Layout>{page}</Layout>;
