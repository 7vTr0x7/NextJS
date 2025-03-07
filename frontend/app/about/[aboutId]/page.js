import React from "react";

const About1 = async ({ params }) => {
  const { aboutId } = await params;
  return <div>About1 {aboutId}</div>;
};

export default About1;
