import React from "react";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";

import Slider from "../components/sliders/Slider";
import Carousel from "../components/sliders/Carousel";
import Accordion from "../components/interactive/Accordion";
import { Tabs, Tab } from "../components/interactive/Tabs";
import Modal from "../components/interactive/Modal";

// Scroll reveal
import FadeUp from "../libraries/scroll-reveal/FadeUp";

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

      {/* Modal */}
      <div className="ui-wrapper my-28 flex flex-col items-center justify-center">
        <h2 className="ui-heading text-h2 text-center">Modal komponent</h2>

        <Modal
          button={
            <div className="ui-button" variant="flat-expand">
              <span>Otevřít modal</span>
            </div>
          }
          content={
            <div className="w-176 flex flex-col items-start justify-center p-12 bg-background dark:bg-background-200 rounded-default space-y-6">
              <h2 className="ui-heading text-h2 self-center text-center">
                Otevřený modal
              </h2>
              <p>
                Celé okno se programuje do přímo podřazeného divu komponentu
                (props children), tudíž není třeba řešit žádnou další logiku
                přes JS a stačí vytvořit html markup a css třídy. Obsahem modalu
                může být úplně cokoliv např. fotka, video, nebo informační okno
                jako je toto.
              </p>
              <p>
                Modal lze zavřít kliknutím kamkoliv na overlay, nebo křížkem v
                pravém horním rohu.
              </p>
            </div>
          }
          isOpen={false}
        />
      </div>
    </Layout>
  );
}
