import React from "react";

const File = async ({ params }) => {
  const { filePath } = await params;
  console.log(await params);
  return <div>File {filePath}</div>;
};

export default File;
