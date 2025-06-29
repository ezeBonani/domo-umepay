"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { IMAGES, dataURL } from "@/constants";
import { Counter, Fullscreen } from "yet-another-react-lightbox/plugins";

function Images() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = IMAGES.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  const fullscreenRef = useRef(null);

  return (
    <section
      className="images flex flex-col justify-center items-center py-4 mt-4 md:mt-14"
      id="images"
    >
      <p className="text-base md:text-lg px-8 md:px-14 text-center leading-loose text-slate-800 font-serif pb-4">
        Imágenes del Domo
      </p>
      <div className="wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-[90%] lg:w-[70%] px-2">
        {IMAGES.map((image, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer aspect-video"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded"
              placeholder="blur"
              blurDataURL={dataURL}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom, Fullscreen, Counter]}
        counter={{
          container: {
            style: {
              top: "unset",
              bottom: 0,
            },
          },
        }}
      />
    </section>
  );
}

export default Images;
