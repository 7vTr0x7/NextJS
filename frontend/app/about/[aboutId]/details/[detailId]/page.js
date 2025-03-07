import React from "react";

const Detail = async ({ params }) => {
  const { detailId } = await params;
  return <div>Detail {detailId}</div>;
};

export default Detail;
