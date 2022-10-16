import React from "react";

export default function City() {
  return (
    <div className="mt-12 container flex items-center">
      <div className="text-left">
        <h3 className="font-bold text-xl py-6">
          CitySmile, Lorem, ipsum dolor.
        </h3>
        <p className="text-gray-600 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptatem quisquam in quibusdam, vero tempore velit nostrum rem?
          Beatae, harum!
        </p>
        <p className="text-gray-600 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          animi iusto quibusdam optio eius nobis aut quis perspiciatis, labore,
          asperiores explicabo enim vel dolorem.
        </p>
        <h6 className="font-semibold text-gray-600 py-2">Our certificates :</h6>
        <ul className="list-disc ml-12">
          <li className="text-gray-600">Lorem ipsum dolor sit.</li>
          <li className="text-gray-600">Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCitySmile.Dental.Academy%2Fvideos%2F3050842991873088%2F&show_text=false&width=560&t=0"
          width="560"
          height="314"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}
