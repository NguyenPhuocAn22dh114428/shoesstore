import React from "react";
import SideBar from "../ProductSections/SideBar";
import Main from "../ProductSections/Main";
import { Footer, PopularProducts } from "../../HomePage/HomeSections";

const Products = ({ title }) => {
  return (
    <main className="relative pt-40">
      {/* Wrapper for Sidebar and Main */}
      <section className=" flex flex-col sm:flex-row">
        {/* Sidebar */}
        <section className="xl:padding-1 wide:padding-r padding-b ">
          <SideBar title={title} />
        </section>

        {/* Main content */}
        <section className="flex-1">
          <Main />
        </section>
      </section>

      {/* Best Seller */}
      <section className="mt-24">
        <PopularProducts />
      </section>

      {/* Footer */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Products;
