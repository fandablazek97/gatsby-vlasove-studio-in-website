import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import HeroStudioIn from "../components/HeroStudioIn";
import Parallax from "react-rellax";
import GalleryStudioIn from "../components/GalleryStudioIn";

// Icons
import { HiLocationMarker } from "react-icons/hi";

// Logos
import loreal from "../static/svg/loreal.svg";
import wella from "../static/svg/wella.svg";

// Scroll Reveal Animations
import FadeUp from "../libraries/scroll-reveal/FadeUp";
import FadeIn from "../libraries/scroll-reveal/FadeIn";

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Dámské a pánské kadeřnictví v Plzni | Vlasové Studio IN"
        description="Dámské a pánské kadeřnictví nabízející kompletní profesionální péči o vaše vlasy. Prodej vlasové kosmetiky Wella a  L'Oréal, slavnostní účesy a mnoho dalšího"
        keywords="kadernictvi plzen, pansky strih, kadernictvi"
      />

      {/* Main Content */}
      <HeroStudioIn />

      {/* O nás */}
      <section
        id="o-nas"
        className="ui-wrapper min-h-screen py-16 sm:py-36 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 lg:gap-24"
      >
        <FadeIn
          as="div"
          className="col-span-1 row-start-2 row-end-2 sm:row-start-1 sm:row-end-1 mb-8 sr-duration-1000"
        >
          <StaticImage
            as="div"
            src="../static/images/hlavni-fotky/studio-in-5.jpg"
            alt="Interiér našeho kadeřnictví"
            placeholder="blurred"
            loading="lazy"
            formats={["avif", "webp"]}
            className="w-full h-full aspect-w-1 aspect-h-1 md:aspect-w-3 md:aspect-h-4"
          />
        </FadeIn>
        <div className="col-span-1 row-start-1 row-end-1 flex flex-col justify-center">
          <FadeUp
            as="h2"
            className="ui-heading text-3xl md:text-4xl lg:text-5xl font-serif font-light"
          >
            Přijďte si k nám pro pocit výjimečnosti
          </FadeUp>
          <FadeUp as="p" className="sr-delay-100">
            Kadeřnictví se nachází v novém a moderním prostředí, kde se o vás
            postará tým profesionálních kadeřnic. U nás se snoubí dlouholetá
            praxe s moderním a individuálním přístupem a proto se k nám naši
            klientky a klienti rádi vrací. Přidejte se k nim.
          </FadeUp>
          <FadeUp
            as="div"
            className="flex items-center space-x-8 md:space-x-12 mt-12 lg:mt-20 sr-delay-200"
          >
            <div className="w-20 md:w-28">
              <img
                src={wella}
                alt="Logo firmy Wella"
                width="200"
                height="123"
              />
            </div>
            <div className="w-28 md:w-36">
              <img
                src={loreal}
                alt="Logo firmy Loreal"
                width="200"
                height="36"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="w-full bg-warm-gray-100 relative">
        <div className="hidden lg:block absolute z-0 top-0 bottom-0 right-0 h-full w-1/4 opacity-15">
          <StaticImage
            src="../static/images/hlavni-fotky/studio-in-2.jpg"
            alt="Interiér našeho kadeřnictví"
            width={2333}
            height={3500}
            layout="constrained"
            placeholder="blurred"
            loading="lazy"
            formats={["avif", "webp"]}
            className="w-full h-full"
          />
        </div>

        {/* Hlavní textový obsah služeb */}
        <div className="ui-wrapper py-16 sm:py-36 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-2">
            <FadeUp
              as="h2"
              className="ui-heading text-h1 font-serif font-light"
            >
              Služby
            </FadeUp>
            <FadeUp as="p" className="max-w-xl sr-delay-100">
              Můžete si u nás vybrat ze široké nabídky služeb. Kompletní nabídku
              jednotlivých služeb s ceníkem naleznete níže.
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-20">
              <FadeUp as="div" className="col-span-1 space-y-5">
                <span className="text-h1 text-default-strong font-serif font-light">
                  01
                </span>
                <h3 className="ui-heading font-semibold text-h4">
                  Dámské, pánské a dětské účesy
                </h3>
                <p className="text-sm">
                  Vyhotovíme Vám účes přímo podle přestav. Snažíme se vytvořit
                  střih, který je perfektní jak při odchodu z kadeřnictví ,tak i
                  při každodenní domácí péči.
                </p>
              </FadeUp>
              <FadeUp as="div" className="col-span-1 space-y-5 sm:sr-delay-200">
                <span className="text-h1 text-default-strong font-serif font-light">
                  02
                </span>
                <h3 className="ui-heading font-semibold text-h4">
                  Slavnostní účesy
                </h3>
                <p className="text-sm">
                  Potřebujete krásný účes na ples? V našem kadeřnictví česáme
                  profesionální účesy na každou společenskou událost.
                </p>
              </FadeUp>
              <FadeUp as="div" className="col-span-1 space-y-5">
                <span className="text-h1 text-default-strong font-serif font-light">
                  03
                </span>
                <h3 className="ui-heading font-semibold text-h4">
                  Prodej vlasové kosmetiky
                </h3>
                <p className="text-sm">
                  Přímo v naší provozovně si můžete zakoupit kosmetiku od značek
                  Wella a L’Oréal, kterou v kadeřnictví sami používáme.
                </p>
              </FadeUp>
              <FadeUp as="div" className="col-span-1 space-y-5 sm:sr-delay-200">
                <span className="text-h1 text-default-strong font-serif font-light">
                  04
                </span>
                <h3 className="ui-heading font-semibold text-h4">
                  Poradenství
                </h3>
                <p className="text-sm">
                  Rádi Vám poskytneme poradenství ohledně volby střihu, vlasové
                  kosmetiky nebo péče o vlasy. Rádi s Vámi probereme přání i
                  představu o jakémkoliv účesu.
                </p>
              </FadeUp>
            </div>
            <FadeUp>
              <AnchorLink
                to="/#kontakt"
                className="ui-link-3 text-2xl text-default-strong font-serif font-light mt-28"
              >
                Rezervujte si termín
              </AnchorLink>
            </FadeUp>
          </div>

          <FadeIn className="hidden lg:block col-span-1 shadow-lg mb-20 sr-duration-1000">
            <StaticImage
              as="div"
              src="../static/images/hlavni-fotky/studio-in-8.jpg"
              alt="Interiér našeho kadeřnictví"
              layout="fullWidth"
              placeholder="blurred"
              loading="lazy"
              formats={["avif", "webp"]}
              className="w-full h-full"
            />
          </FadeIn>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="w-full bg-warm-gray-100">
        <div className="ui-wrapper pt-12 sm:pt-28 pb-12">
          <FadeUp as="h2" className="ui-heading text-h1 font-serif font-light">
            Ceník služeb
          </FadeUp>
          <FadeUp as="p" className="max-w-xl sr-delay-100">
            Ceny nejčastějších služeb naleznete v tabulce. Kompletní nabídku a
            ceník našich služeb naleznetezde.
          </FadeUp>
        </div>

        {/* Ceník - tabulka */}
        <div className="ui-wrapper">
          <div className="flex flex-col justify-between items-center p-8 md:p-14 w-full h-auto shadow-xl bg-white transform translate-y-10 lg:translate-y-20 relative z-10">
            <hr />
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
                Název služby 1
              </span>
              <span className="text-3xl text-default-strong font-serif font-light">
                249,-
              </span>
            </div>
            <hr />
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
                Název služby 2
              </span>
              <span className="text-3xl text-default-strong font-serif font-light">
                249,-
              </span>
            </div>
            <hr />
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
                Název služby 3
              </span>
              <span className="text-3xl text-default-strong font-serif font-light">
                249,-
              </span>
            </div>
            <hr />
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-default-strong font-semibold mb-0 leading-none">
                Název služby 4
              </span>
              <span className="text-3xl text-default-strong font-serif font-light">
                249,-
              </span>
            </div>
            <hr />
            <Link
              to="/"
              className="text-gray-800 text-sm font-semibold uppercase tracking-wider py-4 px-7 mt-6 border-2 border-gray-800 bg-transparent transition-colors duration-default hover:text-white hover:bg-gray-950 a11y-focus text-center"
            >
              Zobrazit kompletní ceník
            </Link>
          </div>
        </div>

        {/* Parallax */}
        <div className="w-full h-96 lg:h-112 xl:h-144 overflow-hidden object-cover hidden md:block relative z-0">
          <Parallax speed={-3} percentage={0.6} className="w-full">
            <StaticImage
              src="../static/images/hlavni-fotky/studio-in-1.jpg"
              alt="Společná fotka kadeřnic"
              placeholder="blurred"
              loading="lazy"
              layout="fullWidth"
              className="w-full h-full"
              objectFit="cover"
              objectPosition="50% 50%"
              formats={["avif", "webp"]}
            />
          </Parallax>
        </div>

        <StaticImage
          src="../static/images/hlavni-fotky/studio-in-1.jpg"
          alt="Společná fotka kadeřnic"
          placeholder="blurred"
          loading="lazy"
          layout="fullWidth"
          className="w-full h-128 md:hidden"
          objectFit="cover"
          objectPosition="50% 50%"
          formats={["avif", "webp"]}
        />
      </section>

      {/* Kadeřnice */}
      <section id="kadernice" className="w-full bg-warm-gray-100">
        <div className="ui-wrapper py-16 sm:py-36">
          <FadeUp as="h2" className="ui-heading text-h1 font-serif font-light">
            Naše kadeřnice
          </FadeUp>
          <FadeUp as="p" className="max-w-xl sr-delay-100">
            Postará se o Vás tým profesionálních kadeřnic. Stačí si pouze
            rezervovat svůj termín a o ostatní se postaráme my.
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-16 mt-20">
            {/* 1 Simona */}
            <FadeUp as="div" className="col-span-1 space-y-4">
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Simona.jpg"
                alt="Kadeřnice Simona"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Simona</div>
              <a
                href="tel:420123456789"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 777 227 440
              </a>
            </FadeUp>
            {/* 2 Aneta */}
            <FadeUp as="div" className="col-span-1 space-y-4 sr-delay-100">
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Aneta.jpg"
                alt="Kadeřnice Aneta"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Aneta</div>
              <a
                href="tel:420775210397"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 775 210 397
              </a>
            </FadeUp>
            {/* 3 Ivana */}
            <FadeUp as="div" className="col-span-1 space-y-4 sm:sr-delay-200">
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Ivana.jpg"
                alt="Kadeřnice Ivana"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Ivana</div>
              <a
                href="tel:420777635293"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 777 635 293
              </a>
            </FadeUp>
            {/* 4 Jiřina */}
            <FadeUp
              as="div"
              className="col-span-1 space-y-4 sr-delay-100 sm:sr-delay-0 lg:sr-delay-300"
            >
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Jirina.jpg"
                alt="Kadeřnice Jiřina"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Jiřina</div>
              <a
                href="tel:420123456789"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 773 099 336
              </a>
            </FadeUp>
            {/* 1 Lucka */}
            <FadeUp
              as="div"
              className="col-span-1 space-y-4 sm:sr-delay-100 lg:sr-delay-0"
            >
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Lucka.jpg"
                alt="Kadeřnice Lucka"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Lucka</div>
              <a
                href="tel:420734676730"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 734 676 730
              </a>
            </FadeUp>
            {/* 2 Martina */}
            <FadeUp
              as="div"
              className="col-span-1 space-y-4 sm:sr-delay-200 sr-delay-100"
            >
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Martina.jpg"
                alt="Kadeřnice Martina"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Martina</div>
              <a
                href="tel:420123456789"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 702 190 655
              </a>
            </FadeUp>
            {/* 3 Monika */}
            <FadeUp as="div" className="col-span-1 space-y-4 lg:sr-delay-200">
              <StaticImage
                as="div"
                src="../static/images/hlavni-fotky/Monika.jpg"
                alt="Kadeřnice Monika"
                layout="fullWidth"
                objectFit="cover"
                placeholder="blurred"
                loading="lazy"
                formats={["avif", "webp"]}
                className="aspect-w-4 aspect-h-5"
              />
              <div className="ui-heading text-h4">Monika</div>
              <a
                href="tel:420123456789"
                className="ui-link-3 text-xl font-serif font-light"
              >
                +420 603 922 696
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Info k objednání */}
      <section className="w-full bg-gray-700">
        <div className="ui-wrapper-sm py-16 sm:py-36 text-center">
          <FadeUp
            as="h2"
            className="ui-heading text-h1 font-serif font-light text-white text-center"
          >
            Na kdy se můžete objednat?
          </FadeUp>
          <FadeUp
            as="p"
            className="ui-lead text-gray-200 text-center max-w-xl mx-auto sr-delay-100"
          >
            Otevírací doba je každý tyden od pondělí do pátku a to vždy podle
            aktuálních objednávek. Zavolejte nám a vyberte si termín, který vám
            bude vyhovat.
          </FadeUp>
        </div>
      </section>

      <GalleryStudioIn />

      {/* Kontakt */}
      <section id="kontakt" className="w-full bg-warm-gray-100">
        <div className="ui-wrapper pt-16 sm:pt-36 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div className="col-span-1">
            <FadeUp
              as="h2"
              className="ui-heading text-h1 font-serif font-light"
            >
              Kontakt
            </FadeUp>
            <FadeUp
              as="div"
              className="flex flex-col lg:flex-row lg:sr-delay-200"
            >
              <a
                href="tel:420123456789"
                className="ui-link-3 text-xl text-default-strong font-serif font-light mr-12 mb-5"
              >
                +420 123 456 789
              </a>
              <a
                href="mailto:info@vlasovestudioin.cz"
                className="ui-link-3 text-xl text-default-strong font-serif font-light sr-delay-100"
              >
                Info@vlasovestudioin.cz
              </a>
            </FadeUp>
          </div>
          <FadeUp as="div" className="col-span-1 lg:sr-delay-400">
            <h3 className="ui-heading text-h3">Fakturační údaje</h3>
            <p className="mt-10">
              <strong>Simona Michlová</strong>
              <br />
              Plzeň 1, Bolevec, U Velkého rybníka 951/28 <br />
              IČO: 71566805 <br />
              DIČ: CZ71566805 <br />
              <br />
              Fyzická osoba podnikající dle živnostenského zákona nezapsaná v
              obchodním rejstříku
            </p>
          </FadeUp>
        </div>

        {/* Mapa */}
        <div className="ui-wrapper pb-24 sm:pb-36 pt-20 sm:pt-28 text-center">
          <a
            href="https://www.google.com/maps/place/Pra%C5%BEsk%C3%A1+27,+301+00+Plze%C5%88+3/@49.7470067,13.3791268,17z/data=!4m5!3m4!1s0x470af1e597179655:0xcc3a9ec858a04c44!8m2!3d49.7470067!4d13.3813155"
            target="_blank"
            rel="noreferrer"
            className="ui-link-3 text-h2 font-serif font-light text-default-strong mb-8"
          >
            <HiLocationMarker className="mr-2" />
            <span>Pražská 27, Plzeň 301 00</span>
          </a>
          <div className="w-full h-144 max-h-screen bg-white border border-warm-gray-300 shadow-2xl">
            <iframe
              title="Vlasové studio IN Adresa"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Pra%C5%BEsk%C3%A1%2027,%20Plze%C5%88%20301%2000+(Vlasov%C3%A9%20studio%20IN)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
