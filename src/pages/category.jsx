import { useGetAllCatsQuery } from "@/api/services/packagesApi";
import BuildCategory from "@/components/Category/buildCategory";
import BuildTabel from "@/components/Category/buildTabel";
import React, { useState } from "react";

const Category = () => {
  const allCats = useGetAllCatsQuery();
  const [dataForm, setDataForm] = useState({});
  return (
    <div>
      <BuildCategory allCats={allCats} setDataForm={setDataForm} />
      {Object.keys(dataForm).length > 0 && (
        <BuildTabel dataForm={dataForm} allCats={allCats?.data} />
      )}
    </div>
  );
};

export default Category;
