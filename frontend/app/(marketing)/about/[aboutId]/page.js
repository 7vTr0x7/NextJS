import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { aboutId } = await params;

  return {
    title: `About ${aboutId}`,
  };
};

const About1 = async ({ params }) => {
  const { aboutId } = await params;

  if (!/^\d+$/.test(aboutId)) {
    notFound();
  }
  return <div>About1 {aboutId}</div>;
};

export default About1;
