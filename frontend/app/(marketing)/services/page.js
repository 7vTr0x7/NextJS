import Info from "@/app/_components/Info";
import Link from "next/link";
import React, { Suspense } from "react";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>

      <Link href="/">home</Link>
      <Link href="/services/web">Web</Link>
      <Link href="/services/app">App</Link>

      <Suspense fallback="loading...">
        <Info />
      </Suspense>
    </div>
  );
};

export default Services;
