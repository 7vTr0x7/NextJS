import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>

      <Link href="/">home</Link>
      <Link href="/services/web">Web</Link>
      <Link href="/services/app">App</Link>
    </div>
  );
};

export default Services;
