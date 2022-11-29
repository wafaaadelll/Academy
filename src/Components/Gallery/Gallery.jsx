import React from "react";
import ImgGallery from "../../Services/ImgGallery";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  AOS.init();
  return (
    <section className="overflow-hidden text-gray-700 pt-24">
      <div className="container px-5 py-2 mx-auto lg:px-32">
        <div className=" md:flex flex-wrap -m-1 md:-m-2">
          {ImgGallery.map((item, index) => {
            return item.section === "one" ? (
              <div className="flex flex-wrap md:w-1/2" key={index}>
                {item.images.map((img, index) => {
                  return img.larger ? (
                    <div
                      className="w-full p-1 md:p-2"
                      key={index}
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <div className="img-wrapper">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg offerimg hover-zoom g1p1"
                          src={img.img}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-1/2 p-1 md:p-2"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <div className="img-wrapper">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg offerimg hover-zoom g2p2"
                          src={img.img}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="flex flex-wrap md:w-1/2"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                {item.images.map((img, index) => {
                  return img.larger ? (
                    <div className="w-full p-1 md:p-2" key={index}>
                      <div className="img-wrapper">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg offerimg hover-zoom g1p1"
                          src={img.img}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-1/2 p-1 md:p-2"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <div className="img-wrapper">
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg offerimg hover-zoom g2p2"
                          src={img.img}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
