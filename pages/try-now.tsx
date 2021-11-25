import { InferGetStaticPropsType } from "next";
import Statement from "../components/Statement";

type Body = {
  message: string;
};

const TryNow = ({
  message,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Statement message={message} />;
};

export default TryNow;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://europe-west2-react-gke-terraform.cloudfunctions.net/msaas-cloud-function`
  );
  const body: Body = await res.json();

  return {
    props: {
      message: body.message,
    },
  };
};
