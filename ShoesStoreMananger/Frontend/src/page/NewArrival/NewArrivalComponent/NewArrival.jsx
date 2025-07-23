import React from "react";
import { menBanner } from "../../../assets/images";
import Banner from "../NewArrivalSections/Banner";
import { Subscribe } from "../../HomePage/HomeSections";
import { Footer } from "../../HomePage/HomeSections";

const NewArrival = () => {
  return (
    <main className="relative">
      <section>
        <Banner />
      </section>
      <section></section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default NewArrival;
