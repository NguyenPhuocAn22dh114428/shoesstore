import React from "react";
import SearchBar from "../SearchSections/SearchBar";
import PopularProduct from "../../HomePage/HomeSections/PopularProducts";
import Subscribe from "../../HomePage/HomeSections/Subscribe";
import Footer from "../../HomePage/HomeSections/Footer";
import SearchProducts from "../SearchSections/SearchProducts";
const Search = () => {
  return (
    <main className="relative">
      <section className=" pt-28 sm:pt-40 sm:px-48 padding-x">
        <section className="">
          <SearchBar />
        </section>
        <section className="">
          <SearchProducts />
        </section>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Search;
