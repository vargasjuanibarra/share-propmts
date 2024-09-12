import Feed from "@components/Feed";
import React from "react";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Proptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default page;
