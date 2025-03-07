import React from "react";

const Details = async ({ params }) => {
  const { aboutId } = await params;
  return <div>Details {aboutId}</div>;
};

export default Details;
