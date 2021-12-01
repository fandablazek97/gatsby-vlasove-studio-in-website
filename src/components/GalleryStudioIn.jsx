import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Interactive
import ModalImage from "../components/interactive/ModalImage";

// Scroll Reveal Animations
import FadeUp from "../libraries/scroll-reveal/FadeUp";

export default function GalleryStudioIn() {
  return (
    <section className="w-full bg-warm-gray-100">
      <div className="ui-wrapper pt-16 sm:pt-36 pb-16">
        <FadeUp as="h2" className="ui-heading text-h1 font-serif font-light">
          Ukázky naší práce
        </FadeUp>
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-1">
          {/* Row 1 (Desktop) */}
          <ModalImage
            className="col-span-1 transition-opacity duration-default hover:opacity-80 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-7.jpeg"
                alt="Ukázka účesu 1"
                layout="constrained"
                width={300}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-7.jpeg"
              alt="Ukázka účesu 1"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
            />
          </ModalImage>

          <ModalImage
            className="col-span-1 transition-opacity duration-default hover:opacity-60 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-2.jpeg"
                alt="Ukázka účesu 2"
                layout="constrained"
                width={300}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-2.jpeg"
              alt="Ukázka účesu 2"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="col-span-1"
            />
          </ModalImage>

          <ModalImage
            className="col-span-2 transition-opacity duration-default hover:opacity-60 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-16.jpeg"
                alt="Ukázka účesu 3"
                layout="constrained"
                width={400}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-16.jpeg"
              alt="Ukázka účesu 3"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="col-span-1"
            />
          </ModalImage>
          {/* Row 2 (Desktop) */}
          <ModalImage
            className="col-span-2 transition-opacity duration-default hover:opacity-60 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-20.jpeg"
                alt="Ukázka účesu 4"
                layout="constrained"
                width={400}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-20.jpeg"
              alt="Ukázka účesu 4"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="col-span-1"
            />
          </ModalImage>

          <ModalImage
            className="col-span-1 transition-opacity duration-default hover:opacity-60 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-10.jpeg"
                alt="Ukázka účesu 5"
                layout="constrained"
                width={300}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-10.jpeg"
              alt="Ukázka účesu 5"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="col-span-1"
            />
          </ModalImage>

          <ModalImage
            className="col-span-1 transition-opacity duration-default hover:opacity-60 cursor-pointer outline-none overflow-hidden"
            openButton={
              <StaticImage
                as="div"
                src="../static/images/ucesy/uces-15.jpeg"
                alt="Ukázka účesu 6"
                layout="constrained"
                width={300}
                height={400}
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="w-full h-full hover:transform hover:scale-110 transition-transform duration-default"
              />
            }
          >
            <StaticImage
              as="div"
              src="../static/images/ucesy/uces-15.jpeg"
              alt="Ukázka účesu 6"
              objectFit="contain"
              width={1500}
              height={2000}
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="col-span-1"
            />
          </ModalImage>
        </div>
      </div>
    </section>
  );
}
