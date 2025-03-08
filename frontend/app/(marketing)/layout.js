import React from "react";

const MarketingLayout = ({ children }) => {
  return (
    <div>
      <h1>Marketing Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default MarketingLayout;
