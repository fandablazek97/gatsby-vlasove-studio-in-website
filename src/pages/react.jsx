import React from "react";
import { Link } from "gatsby";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";

import Slider from "../components/sliders/Slider";
import Carousel from "../components/sliders/Carousel";
import Accordion from "../components/interactive/Accordion";
import { Tabs, Tab } from "../components/interactive/Tabs";
import Dropdown from "../components/interactive/Dropdown";
import Popover from "../components/interactive/Popover";
import Dialog from "../components/interactive/Dialog";
import Modal from "../components/interactive/Modal";
import ModalImage from "../components/interactive/ModalImage";

// Scroll reveal
import FadeUp from "../libraries/scroll-reveal/FadeUp";

// Images
import { StaticImage } from "gatsby-plugin-image";

export default function reactPage() {
  return (
    <Layout>
      <Seo
        title="React komponenty"
        description="Ukázka reálného použití připravených react komponentů."
        keywords=""
        thumbnail="og-image.jpg"
      />

      {/* Main Content */}
      <Hero
        title="React komponenty"
        subtitle="Ukázka reálného použití použití připravených react komponentů."
      />

      <div className="ui-wrapper my-28">
        <FadeUp>
          <h2 className="ui-heading text-h1 text-center">
            Scroll reveal animations
          </h2>
        </FadeUp>
      </div>

      {/* Slider - swiper js */}
      <div className="ui-wrapper my-28">
        <h2 className="ui-heading text-h2 text-center">Slider - swiper js</h2>
        <Slider />

        <h2 className="ui-heading text-h2 mt-12 text-center">
          Carousel - swiper js
        </h2>
        <Carousel />
      </div>

      {/* Accordion */}
      <div className="ui-wrapper-sm my-28">
        <h2 className="ui-heading text-h2 text-center">Accordion</h2>
        <Accordion id="acc-q-1" title="My awesome question #1" isOpen={true}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-2" title="My awesome question #2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-3" title="My awesome question #3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
        <Accordion id="acc-q-4" title="My awesome question #4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea
            ratione nulla doloremque laborum exercitationem nostrum sed tenetur
            rerum iusto? Fuga animi ipsa numquam doloribus molestiae voluptate
            modi! Ea, sit?
          </p>
        </Accordion>
      </div>

      {/* Tabs */}
      <div className="ui-wrapper-sm my-28">
        <h2 className="ui-heading text-h2 text-center">Tabs</h2>
        <Tabs>
          <Tab title="Záložka">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto quasi voluptatem qui doloribus neque illum repellendus
              ullam dolore consequatur?
            </p>
          </Tab>
          <Tab title="Záložka 2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perspiciatis, earum culpa aperiam eligendi non
              repellendus. Ea, quae. Ducimus, explicabo, eos inventore rem
              fugiat maxime consequatur optio neque excepturi facilis
              exercitationem? Corrupti, quae? Magnam consectetur iusto sequi,
              suscipit dicta modi.
            </p>
          </Tab>
          <Tab title="Záložka 3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perspiciatis, earum culpa aperiam eligendi non
              repellendus. Ea, quae. Ducimus, explicabo, eos inventore rem
              fugiat maxime consequatur optio neque excepturi facilis
              exercitationem?
            </p>
          </Tab>
        </Tabs>
      </div>

      {/* Dropdown */}
      <div className="ui-wrapper-sm my-28 flex flex-col items-center">
        <h2 className="ui-heading text-h2 text-center">Dropdown & Popover</h2>
        <Dropdown title="Dropdown">
          <Link to="/react">Tvorba webů</Link>
          <Link to="/react">Grafika a tiskoviny</Link>
          <Link to="/react">Online marketing</Link>
          <Link to="/react">Další služba</Link>
        </Dropdown>
      </div>

      {/* Popover */}
      <div className="ui-wrapper-sm my-28 flex flex-col items-center">
        <h2 className="ui-heading text-h2 text-center">Popover</h2>
        <Popover title="Popover">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam
            blanditiis nostrum illo incidunt quis neque facere error minima
            suscipit explicabo consectetur illum, quos eaque ex labore
            cupiditate tempore quas cumque ad magnam expedita nulla.
          </p>
        </Popover>
      </div>

      {/* Dialog */}
      <div className="ui-wrapper-sm my-28 flex flex-col items-center">
        <h2 className="ui-heading text-h2 text-center">Dialog</h2>
        <Dialog
          openButton={
            <div className="ui-button" variant="flat-expand">
              <span>Otevřít dialog</span>
            </div>
          }
          title="Dialog"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam
          blanditiis nostrum illo incidunt quis neque facere error minima
          suscipit explicabo consectetur illum, quos eaque ex labore
          cupiditate tempore quas cumque ad magnam expedita nulla."
          closeButton={
            <div className="ui-button" variant="flat-expand">
              <span>Rozumím</span>
            </div>
          }
        ></Dialog>
      </div>

      {/* Modal */}
      <div className="ui-wrapper-sm my-28 flex flex-col items-center">
        <h2 className="ui-heading text-h2 text-center">Modal</h2>
        <Modal
          openButton={
            <div className="ui-button" variant="flat-expand">
              <span>Otevřít modal</span>
            </div>
          }
          closeButton={
            <div className="ui-button" variant="flat-expand">
              <span>zavřít</span>
            </div>
          }
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            corporis nemo placeat voluptatibus eius voluptate similique nulla,
            non ratione corrupti?
          </p>
        </Modal>
      </div>

      {/* Modal Image */}
      <div className="ui-wrapper-sm my-28 flex flex-col items-center">
        <h2 className="ui-heading text-h2 text-center">Modal Image</h2>
        <ModalImage
          openButton={
            <div className="ui-button" variant="flat-expand">
              <span>Otevřít modal Image</span>
            </div>
          }
        >
          <StaticImage
            src="../static/images/italy.jpg"
            alt="Itálie"
            width="1920"
            height="1200"
            objectFit="contain"
            placeholder="blurred"
            loading="lazy"
          />
        </ModalImage>
      </div>
    </Layout>
  );
}
