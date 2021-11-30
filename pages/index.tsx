import { InferGetServerSidePropsType } from "next";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs/FAQs";
import Hero from "../components/Hero";

const Home = ({
  faqs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQs faqs={faqs.items} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { faqCollection } = await fetchContent(`
  {
    faqCollection(limit: 20) {
      items {
        question
        answer
      }
    }
  }
  `);

  return {
    props: {
      faqs: faqCollection,
    },
  };
};

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const fetchContent = async (query: string) => {
  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(
      `There was a problem retrieving entries with the query ${query}`
    );
    console.error(error);
  }
};
