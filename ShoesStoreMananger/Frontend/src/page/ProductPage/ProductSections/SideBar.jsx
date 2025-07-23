import React, { useEffect, useState } from "react";

const SideBar = ({ title }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5235/api/CategoryApi")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="max-container padding-x ">
      <div className="flex flex-col">
        <p className="font-montserrat text-3xl font-semibold">{title} Shoes</p>
        <div className="flex gap-4 sm:flex-col mt-4">
          {categories.map((c) => (
            <a
              className="cursor-pointer hover:underline  font-montserrat"
              href="#"
              key={c.Id}
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
