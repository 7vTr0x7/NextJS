import React from "react";

export const metadata = {
  title: {
    absolute: "Details",
  },
};

const Details = async ({ params }) => {
  const { aboutId } = await params;
  return <div>Details {aboutId}</div>;
};

export default Details;
