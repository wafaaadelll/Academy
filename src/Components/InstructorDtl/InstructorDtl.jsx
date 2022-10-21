import React from "react";
import { useParams } from "react-router-dom";
import Instructor from "../../Services/Instructor";
export default function InstructorDtl() {
  const { productId } = useParams();
  const thisProduct = Instructor.find((prod) => prod.id === productId);
  return (
    <section className="lg:pt-24 pt-12">
      <div className="bg-head py-4 mb-10">
        <h1 className="text-white font text-4xl font-bold">
          Dr. {thisProduct.Name}
        </h1>
      </div>
      <section className="container grid gap-4 lg:grid-cols-3">
        <div className="">
          <img src={thisProduct.img} alt="" className="w-96 h-96" />
        </div>
        <div className="text-left ml-5 col-span-2">
          <h2 className="text-green font-semibold text-2xl pb-3">
            Dr. {thisProduct.Name}
          </h2>
          <h4>{thisProduct.headline}</h4>
          <hr className="mt-2 mb-14 w-16 h-1 bg-head " />
          <h2 className="border-b pb-2 ">About Dr {thisProduct.Name}</h2>
          <hr className="w-16 mb-5 bg-head h-0.5 -mt-0.5" />
          <ul className="list-disc ml-10">
            {thisProduct.about.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </section>
    </section>
  );
}
