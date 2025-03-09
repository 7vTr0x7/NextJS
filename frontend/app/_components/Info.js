const Info = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("non");
    }, 15000)
  );
  return <div>Info</div>;
};

export default Info;
