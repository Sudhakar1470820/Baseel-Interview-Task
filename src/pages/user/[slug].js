import Layout from "@/components/Layout";
import ProfileDetails from "@/components/ProfileDetails";
import { Breadcrumbs, Container } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const UserProfile = ({ profileData }) => {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth={"lg"}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: 2 }}>
            <Link href="/">User</Link>
            <Link href="#">{profileData.id}</Link>
          </Breadcrumbs>
          <ProfileDetails profileData={profileData} />
        </Container>
      </main>
    </>
  );
};
export default UserProfile;

UserProfile.getLayout = (page) => <Layout>{page}</Layout>;

export async function getServerSideProps({ res, params }) {
  const pageurl = params.slug;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  // Calling JSON placeholder api to get particular user profile
  const result = await fetch(process.env.NEXT_PUBLIC_API + `?id=${pageurl}`);

  const UserData = await result.json();
  return {
    props: {
      profileData: UserData && UserData.length > 0 ? UserData[0] : "",
    },
  };
}
