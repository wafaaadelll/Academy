import React from "react";
import { useParams } from "react-router-dom";
import Program from "../../Services/Program";
export default function ProgramDtl() {
  const { productId } = useParams();
  const thisProduct = Program.find((prod) => prod.id === productId);
  return (
    <div className="lg:pt-24 pt-12">
      <div className="bg-head py-4 mb-10">
        <h1 className="text-white font text-5xl font-bold">
          {thisProduct.Name}
        </h1>
      </div>
      <section className=" container grid lg:grid-cols-3 gap-4">
        <div className="text-left mb-5 col-span-2">
          <h2 className="text-green font-semibold text-2xl">
            {thisProduct.Name}
          </h2>
          <p className="text-gray-500 lg:w-4/6">{thisProduct.About}</p>
        </div>
        <div className="">
          <img src={thisProduct.img} alt="" className="w-100 h-96" />
        </div>
      </section>
    </div>
  );
}
