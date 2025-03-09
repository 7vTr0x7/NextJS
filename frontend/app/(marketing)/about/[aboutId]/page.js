import Info from "@/app/_components/Info";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamicParams = false;
export const revalidate = 5;

export const generateMetadata = async ({ params }) => {
  const { aboutId } = await params;

  return {
    title: `About ${aboutId}`,
  };
};

export const generateStaticParams = () => {
  return [{ aboutId: "1" }, { aboutId: "2" }, { aboutId: "3" }];
};

const About1 = async ({ params }) => {
  const { aboutId } = await params;
  console.log(aboutId);

  if (!/^\d+$/.test(aboutId)) {
    notFound();
  }
  return (
    <div>
      About1 {aboutId}
      <h2>date: {new Date().toLocaleString()}</h2>
      <Suspense fallback="loading...">
        <Info />
      </Suspense>
    </div>
  );
};

export default About1;
