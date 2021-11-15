import React from "react";
import { Link } from "gatsby";

// Base
import Layout from "../base/Layout";
import Seo from "../base/Seo";

// Components
import Hero from "../components/global/Hero";

// Icons
import { MdPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

export default function revealUiPage() {
  return (
    <Layout>
      <Seo
        title="Ui css třídy"
        description="Ui komponenty se snadno zapomatovatelnou a logickou syntaxí."
        keywords=""
        thumbnail="og-image.jpg"
      />

      {/* Main content */}
      <Hero
        title="CSS třídy"
        subtitle="Ui komponenty se snadno zapomatovatelnou a logickou syntaxí."
      />

      {/* Typografie */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Typografie</h2>

        <h1 className="ui-heading text-h1">Nadpis h1</h1>
        <h2 className="ui-heading text-h2">Nadpis h2</h2>
        <h3 className="ui-heading text-h3">Nadpis h3</h3>
        <h4 className="ui-heading text-h4">Nadpis h4</h4>
        <h5 className="ui-heading text-h5">Nadpis h5</h5>
        <h6 className="ui-heading text-h6">Nadpis h6</h6>
        <p className="ui-lead my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt
          illum quibusdam ullam perspiciatis omnis amet aspernatur magni, velit
          quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eum
          obcaecati reiciendis, impedit cumque alias consequuntur qui id, non,
          quos quis maxime labore debitis distinctio praesentium. Aliquid
          ducimus quae corporis natus numquam aliquam accusamus accusantium
          rerum harum, ut corrupti ab, expedita recusandae nam et commodi
          dolorem tempore veritatis at voluptatem!
        </p>

        <h3 className="ui-heading text-h3 my-12">List</h3>
        <ul className="ui-list mb-10">
          <li>ui list item #1</li>
          <li>ui list item #2</li>
          <li>ui list item #3</li>
        </ul>
        <ol className="ui-list">
          <li>ui list item #1</li>
          <li>ui list item #2</li>
          <li>ui list item #3</li>
        </ol>
      </div>

      {/* Barvy textu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Barvy textu</h2>

        <div className="space-y-10">
          <h3 className="ui-heading text-h5 text-default">text-default</h3>
          <h3 className="ui-heading text-h5 text-default-strong">
            text-default-strong
          </h3>
          <h3 className="ui-heading text-h5 text-primary">text-primary</h3>
          <h3 className="ui-heading text-h5 text-secondary">text-secondary</h3>
          <h3 className="ui-heading text-h5 text-success">text-success</h3>
          <h3 className="ui-heading text-h5 text-error">text-error</h3>
          <h3 className="ui-heading text-h5 text-warning">text-warning</h3>
          <h3 className="ui-heading text-h5 text-info">text-info</h3>
        </div>
      </div>

      {/* Barvy pozadí */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Barvy pozadí</h2>

        <div className="space-y-10">
          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-primary">
            <p className="text-white">bg-primary</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-secondary">
            <p className="text-white">bg-secondary</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-success">
            <p className="text-white">bg-success</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-info">
            <p className="text-white">bg-info</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-warning">
            <p className="text-white">bg-warning</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-error">
            <p className="text-white">bg-error</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-background">
            <p className="text-default">bg-background</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center border border-default border-solid rounded-lg bg-background-100">
            <p className="text-default">bg-background-100</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-background-200">
            <p className="text-default">bg-background-200</p>
          </div>

          <div className="w-full py-8 flex items-center justify-center rounded-lg bg-background-300">
            <p className="text-default">bg-background-300</p>
          </div>
        </div>
      </div>

      {/* Separátor */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Separátory</h2>

        <h3 className="ui-heading text-h4 ui-separator" data-position="left">
          Separátor vlevo
        </h3>
        <h3
          className="ui-heading text-h4 ui-separator text-center"
          data-position="center"
        >
          Separátor uprostřed
        </h3>
        <h3
          className="ui-heading text-h4 ui-separator text-right"
          data-position="right"
        >
          Separátor vpravo
        </h3>
      </div>

      {/* Divider */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Divider</h2>
        <hr className="ui-divider" />
      </div>

      {/* Wrappery */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Wrappery</h2>
      </div>

      <div className="space-y-10 mb-32">
        <div className="ui-wrapper-lg rounded-xl bg-background-200">
          <div className="w-full rounded-xl bg-blue-500 dark py-8 mb-4 flex flex-col items-center justify-center">
            <h3 className="text-white text-h3 ui-heading">ui-wrapper-lg</h3>
            <span className="text-white text-center text-lg">
              100% šířka / 1rem + 3vw padding
            </span>
          </div>
        </div>

        <div className="ui-wrapper rounded-xl bg-background-200">
          <div className="w-full rounded-xl bg-emerald-500 dark py-8 mb-4 flex flex-col items-center justify-center">
            <h3 className="text-white text-h3 ui-heading">ui-wrapper</h3>
            <span className="text-white text-center text-lg">
              1280px maximální šířka / 1rem + 3vw padding
            </span>
          </div>
        </div>

        <div className="ui-wrapper-sm rounded-xl bg-background-200">
          <div className="w-full rounded-xl bg-yellow-500 dark py-8 mb-4 flex flex-col items-center justify-center">
            <h3 className="text-white text-h3 ui-heading">ui-wrapper-sm</h3>
            <span className="text-white text-center text-lg">
              900px maximální šířka / 1rem + 3vw padding
            </span>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Citát</h2>

        <blockquote>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            repudiandae a aperiam, iste veritatis voluptas hic facere ut natus
            reprehenderit!
          </p>
          <span className="ui-quote-sign">Jméno a příjmení</span>
        </blockquote>
      </div>

      {/* Links */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Links</h2>

        <div className="space-y-10 flex flex-col">
          <Link to="/" className="ui-link text-lg">
            ui-link
          </Link>

          <Link to="/" className="ui-link-2 text-lg">
            ui-link-2
          </Link>

          <Link to="/" className="ui-link-3 text-lg">
            ui-link-3
          </Link>

          <Link to="/" className="text-lg self-start">
            běžný odkaz
          </Link>
        </div>
      </div>

      {/* Tlačítka */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Tlačítka</h2>

        <h3 className="ui-heading text-h3 my-12">Flat varianty</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button" variant="flat">
            <span>Flat</span>
          </button>

          <button className="ui-button" variant="flat-slide">
            <span>Flat-slide</span>
          </button>

          <button className="ui-button" variant="flat-expand">
            <span>Flat-expand</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Outline varianty</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button text-emerald-500" variant="outline">
            <span>Outline</span>
          </button>

          <button
            className="ui-button text-emerald-500"
            variant="outline-slide"
          >
            <span>Outline-slide</span>
          </button>

          <button
            className="ui-button text-emerald-500"
            variant="outline-expand"
          >
            <span>Outline-expand</span>
          </button>

          <button
            className="ui-button text-emerald-500"
            variant="outline-invert"
          >
            <span>Outline-invert</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Text varianty</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button text-blue-600" variant="text">
            <span>Text</span>
          </button>

          <button className="ui-button text-blue-600" variant="text-outline">
            <span>Text-outline</span>
          </button>

          <button className="ui-button text-blue-600" variant="text-invert">
            <span>Text-invert</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">S ikonou</h3>
        <div className="space-x-6 my-12">
          <button
            className="ui-button text-blue-600"
            variant="text"
            data-icon="left"
          >
            <FaFacebookF />
            <span>Ikona vlevo</span>
          </button>

          <button
            className="ui-button text-purple-500"
            variant="outline-expand"
            data-icon="right"
          >
            <span>Ikona vpravo</span>
            <MdPhone />
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Samostatná ikona</h3>
        <div className="space-x-6 my-12">
          <button
            className="ui-button text-blue-600"
            variant="text"
            data-icon="single"
          >
            <FaFacebookF />
          </button>

          <button
            className="ui-button text-yellow-500"
            variant="outline"
            data-icon="single"
          >
            <MdPhone />
          </button>

          <button
            className="ui-button text-red-500"
            variant="flat"
            data-icon="single"
          >
            <FaFacebookF />
          </button>
          <button
            className="ui-button text-blue-600"
            variant="text"
            data-icon="single"
            data-shape="circle"
          >
            <FaFacebookF />
          </button>

          <button
            className="ui-button text-yellow-500"
            variant="outline"
            data-icon="single"
            data-shape="circle"
          >
            <MdPhone />
          </button>

          <button
            className="ui-button text-red-500"
            variant="flat"
            data-icon="single"
            data-shape="circle"
          >
            <FaFacebookF />
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Velikosti</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button" variant="flat" data-size="sm">
            <span>Small</span>
          </button>

          <button className="ui-button" variant="flat">
            <span>Default</span>
          </button>

          <button className="ui-button" variant="flat" data-size="lg">
            <span>Large</span>
          </button>

          <button className="ui-button" variant="flat" data-size="xl">
            <span>Extra Large</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Druhe zaoblení</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button text-green-500" variant="flat">
            <span>Default</span>
          </button>

          <button
            className="ui-button text-red-600"
            variant="flat"
            data-shape="square"
          >
            <span>Square</span>
          </button>

          <button
            className="ui-button text-orange-500"
            variant="flat"
            data-shape="rounded"
          >
            <span>Rounded</span>
          </button>

          <button
            className="ui-button text-teal-500"
            variant="flat"
            data-shape="pill"
          >
            <span>Pill</span>
          </button>

          <button
            className="ui-button text-blue-500"
            variant="flat"
            data-shape="circle"
          >
            <span>Circle</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Speciální stavy</h3>
        <div className="space-x-6 my-12">
          <button className="ui-button" variant="flat" data-loading="true">
            <span>Loading</span>
          </button>

          <button className="ui-button" variant="flat" disabled>
            <span>Disabled</span>
          </button>
        </div>

        <h3 className="ui-heading text-h3 my-12">Button group</h3>
        <div className="ui-button-group">
          <button className="ui-button" variant="flat">
            <span>Group</span>
          </button>
          <button className="ui-button" variant="flat">
            <span>Group</span>
          </button>
          <button className="ui-button" variant="flat">
            <span>Group</span>
          </button>
        </div>
      </div>

      {/* Štítky */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Štítky</h2>

        <div className="space-x-6 my-12">
          <div className="ui-badge" data-size="sm">
            small
          </div>
          <div className="ui-badge">Normal</div>
          <div className="ui-badge" data-size="lg">
            large
          </div>
          <div className="ui-badge" data-size="xl">
            extra large
          </div>
        </div>

        <div className="space-x-6 my-12">
          <div className="ui-badge">Normal</div>
          <div className="ui-badge" data-shape="square">
            Square
          </div>
          <div className="ui-badge" data-shape="rounded">
            rounded
          </div>
          <div className="ui-badge" data-shape="pill">
            pill
          </div>
        </div>

        <h3 className="ui-heading text-h3 my-12">Badge group</h3>
        <div className="ui-badge-group">
          <div className="ui-badge">Normal</div>
          <div className="ui-badge">Normal</div>
          <div className="ui-badge">Normal</div>
        </div>
      </div>

      {/* Upozornení */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Upozornení</h2>

        <div className="space-y-10">
          <div className="ui-alert text-success">text-success</div>

          <div className="ui-alert text-error">text-error</div>

          <div className="ui-alert text-warning">text-warning</div>

          <div className="ui-alert text-info">text-info</div>

          <div className="ui-alert text-success">
            <h5 className="mb-4 font-bold">Tohle je super!</h5>
            <hr />
            <button className="ui-button text-success" variant="flat">
              <span>Tlačítko</span>
            </button>
          </div>

          <div className="ui-alert text-info">
            <h3 className="mb-4 text-h5 font-bold">Tohle je informace!</h3>
            <hr />
            <button className="ui-button text-info" variant="flat">
              <span>Tlačítko</span>
            </button>
          </div>

          <div className="ui-alert text-error">
            <h3 className="mb-4 text-h5 font-bold">Tohle je fakt špatný!</h3>
            <hr />
            <button className="ui-button text-error" variant="flat">
              <span>Tlačítko</span>
            </button>
          </div>

          <div className="ui-alert text-white bg-error">
            <h3 className="mb-4 text-h5 font-bold">Tohle je fakt špatný!</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              commodi asperiores iure unde repellat minima atque? Officiis ab
              praesentium fuga.
            </p>
            <hr />
            <button className="ui-button text-red-400" variant="flat">
              <span>Tlačítko</span>
            </button>
          </div>
        </div>
      </div>

      {/* Zobrazení kódu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Zobrazení kódu</h2>

        <code>styles/ui/code.css</code>
      </div>

      {/* Zobrazení tagu */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Zobrazení tagu</h2>

        <span className="ui-tag">styles/ui/tag.css</span>
      </div>

      {/* Klávesová zkratka */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Klávesová zkratka</h2>
        <kbd>ctrl</kbd> + <kbd>c</kbd>
      </div>

      {/* Spinner */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Spinner</h2>

        <div className="flex flex-col space-y-10">
          <h3 className="ui-heading text-h3">Výchozí barva</h3>
          <div className="flex space-x-10 flex-wrap">
            <div className="ui-spinner" data-size="xs"></div>
            <div className="ui-spinner" data-size="sm"></div>
            <div className="ui-spinner"></div>
            <div className="ui-spinner" data-size="lg"></div>
            <div className="ui-spinner" data-size="xl"></div>
            <div className="ui-spinner" data-size="2xl"></div>
          </div>

          <h3 className="ui-heading text-h3">text-secondary</h3>
          <div className="flex space-x-10 flex-wrap">
            <div className="ui-spinner text-secondary" data-size="xs"></div>
            <div className="ui-spinner text-secondary" data-size="sm"></div>
            <div className="ui-spinner text-secondary"></div>
            <div className="ui-spinner text-secondary" data-size="lg"></div>
            <div className="ui-spinner text-secondary" data-size="xl"></div>
            <div className="ui-spinner text-secondary" data-size="2xl"></div>
          </div>

          <h3 className="ui-heading text-h3">text-emerald-500</h3>
          <div className="flex space-x-10 flex-wrap">
            <div className="ui-spinner text-emerald-500" data-size="xs"></div>
            <div className="ui-spinner text-emerald-500" data-size="sm"></div>
            <div className="ui-spinner text-emerald-500"></div>
            <div className="ui-spinner text-emerald-500" data-size="lg"></div>
            <div className="ui-spinner text-emerald-500" data-size="xl"></div>
            <div className="ui-spinner text-emerald-500" data-size="2xl"></div>
          </div>

          <h3 className="ui-heading text-h3">text-orange-500</h3>
          <div className="flex space-x-10 flex-wrap">
            <div className="ui-spinner text-orange-500" data-size="xs"></div>
            <div className="ui-spinner text-orange-500" data-size="sm"></div>
            <div className="ui-spinner text-orange-500"></div>
            <div className="ui-spinner text-orange-500" data-size="lg"></div>
            <div className="ui-spinner text-orange-500" data-size="xl"></div>
            <div className="ui-spinner text-orange-500" data-size="2xl"></div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Progress bar</h2>

        <div className="flex flex-col space-y-10">
          <h3 className="ui-heading text-h3 pt-20">S hodnotou</h3>
          <h4 className="ui-heading text-h4">sm</h4>
          <progress
            className="ui-progress"
            data-size="sm"
            value="64"
            max="100"
          ></progress>
          <h4 className="ui-heading text-h4">výchozí</h4>
          <progress className="ui-progress" value="26" max="100"></progress>
          <h4 className="ui-heading text-h4">lg</h4>
          <progress
            className="ui-progress"
            data-size="lg"
            value="78"
            max="100"
          ></progress>
          <h4 className="ui-heading text-h4">xl</h4>
          <progress
            className="ui-progress"
            data-size="xl"
            value="32"
            max="100"
          ></progress>

          <h3 className="ui-heading text-h3 pt-20">Indeterminate</h3>
          <h4 className="ui-heading text-h4">sm</h4>
          <progress
            className="ui-progress"
            data-size="sm"
            indeterminate="true"
          ></progress>
          <h4 className="ui-heading text-h4">výchozí</h4>
          <progress className="ui-progress" indeterminate="true"></progress>
          <h4 className="ui-heading text-h4">lg</h4>
          <progress
            className="ui-progress"
            data-size="lg"
            indeterminate="true"
          ></progress>
          <h4 className="ui-heading text-h4">xl</h4>
          <progress
            className="ui-progress"
            data-size="xl"
            indeterminate="true"
          ></progress>
        </div>
      </div>

      {/* Formuláře */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Formuláře</h2>

        <h3 className="ui-heading text-h3">S placeholderem</h3>
        <div className="space-y-6">
          <div className="ui-input">
            <input type="text" placeholder="Jméno a příjmení" />
          </div>
          <div className="ui-input">
            <textarea
              name="ta"
              id=""
              cols="30"
              rows="6"
              placeholder="Zpráva"
            ></textarea>
          </div>
        </div>

        <h3 className="ui-heading text-h3 mt-16">S floating labelem</h3>
        <div className="space-y-6">
          <div className="ui-input">
            <input
              type="text"
              id="fl"
              placeholder="Jméno a příjmení"
              className="input-floating"
            />
            <label htmlFor="fl">Jménop a příjmení</label>
          </div>
          <div className="ui-input">
            <textarea
              name="ta-2"
              id=""
              cols="30"
              rows="10"
              placeholder="Zpráva"
              className="input-floating"
            ></textarea>
            <label htmlFor="ta-2">Zpráva</label>
          </div>
        </div>

        <h3 className="ui-heading text-h3 mt-16">
          Addony a skupiny (lze použít i floating label)
        </h3>
        <div className="space-y-6">
          <div className="ui-input-group">
            <div className="ui-input-addon">+420</div>
            <div className="ui-input">
              <input type="tel" placeholder="Telefonní číslo" />
            </div>
          </div>

          <div className="ui-input-group">
            <div className="ui-input-addon">
              <MdPhone />
            </div>
            <div className="ui-input">
              <input type="tel" placeholder="Telefonní číslo" />
            </div>
          </div>

          <div className="ui-input-group">
            <div className="ui-input-addon">www.</div>
            <div className="ui-input">
              <input type="text" placeholder="Váš web" />
            </div>
            <div className="ui-input-addon">.cz</div>
          </div>
        </div>

        <h3 className="ui-heading text-h3 mt-16">Select</h3>
        <div className="space-y-6">
          <div className="ui-select">
            <select name="" id="">
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
              <option value="Bmw">Bmw</option>
            </select>
          </div>
        </div>

        <h3 className="ui-heading text-h3 mt-16">Další nastylované inputy</h3>
        <div className="space-y-6">
          <div className="ui-input">
            <input type="file" />
          </div>

          <div className="ui-input">
            <input type="color" />
          </div>

          <div className="space-x-4">
            <div className="ui-checkbox">
              <input type="checkbox" />
            </div>

            <div className="ui-checkbox">
              <input type="checkbox" />
            </div>

            <div className="ui-radio">
              <input type="radio" />
            </div>

            <div className="ui-radio">
              <input type="radio" />
            </div>
          </div>

          <div className="space-x-4">
            <div className="ui-switch" data-size="sm">
              <input type="checkbox" />
            </div>

            <div className="ui-switch">
              <input type="checkbox" />
            </div>

            <div className="ui-switch" data-size="lg">
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>

      {/* Styly formulářů */}
      <div className="ui-wrapper mb-32">
        <h2 className="ui-heading text-h2 mb-20">Styly formulářů</h2>

        <h3 className="ui-heading text-h3 mt-16">Výchozí podle proměnných</h3>
        <form className="space-y-6">
          <div className="ui-input">
            <input type="text" placeholder="Jméno a příjmení" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="ui-input">
              <input type="mail" placeholder="E-mail" required />
            </div>

            <div className="ui-input">
              <input type="tel" placeholder="Telefon" />
            </div>
          </div>

          <div className="ui-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Zpráva"
            ></textarea>
          </div>

          <div className="ui-checkbox">
            <input type="checkbox" id="gdpr" required className="mr-3" />
            <label htmlFor="gdpr">
              Souhlasím se
              <Link to="/gdpr" className="ui-link-2 font-normal ml-1">
                zpracováním osobních údajů.
              </Link>
            </label>
          </div>
        </form>

        <h3 className="ui-heading text-h3 mt-16">Filled</h3>
        <form className="ui-form-filled space-y-6">
          <div className="ui-input">
            <input type="text" placeholder="Jméno a příjmení" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="ui-input">
              <input type="mail" placeholder="E-mail" required />
            </div>

            <div className="ui-input">
              <input type="tel" placeholder="Telefon" />
            </div>
          </div>

          <div className="ui-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Zpráva"
            ></textarea>
          </div>

          <div className="ui-checkbox">
            <input type="checkbox" id="gdpr" required className="mr-3" />
            <label htmlFor="gdpr">
              Souhlasím se
              <Link to="/gdpr" className="ui-link-2 font-normal ml-1">
                zpracováním osobních údajů.
              </Link>
            </label>
          </div>
        </form>

        <h3 className="ui-heading text-h3 mt-16">Flushed</h3>
        <form className="ui-form-flushed space-y-6">
          <div className="ui-input">
            <input type="text" placeholder="Jméno a příjmení" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="ui-input">
              <input type="mail" placeholder="E-mail" required />
            </div>

            <div className="ui-input">
              <input type="tel" placeholder="Telefon" />
            </div>
          </div>

          <div className="ui-input">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Zpráva"
            ></textarea>
          </div>

          <div className="ui-checkbox">
            <input type="checkbox" id="gdpr" required className="mr-3" />
            <label htmlFor="gdpr">
              Souhlasím se
              <Link to="/gdpr" className="ui-link-2 font-normal ml-1">
                zpracováním osobních údajů.
              </Link>
            </label>
          </div>
        </form>
      </div>
    </Layout>
  );
}
