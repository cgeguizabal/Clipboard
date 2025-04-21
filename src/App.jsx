import "./index.css";
import React from "react";

function App() {
  return (
    <>
      {/* <!-- HERO SECTION  --> */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src="logo.svg" className="mx-auto my-16" alt="LogoHeader" />
          <h3>A history of everything you copy</h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-[#9eabb1]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard history and synchronize across
            devices.
          </p>

          {/* <!-- BUTTON CONTAINER --> */}
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-11 rounded-full shadow-xl shadow-[#26baa442] bg-[#26baa4] border-[#1d9f8b] border-b-4 duration-200 cursor-pointer hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-10 rounded-full shadow-xl shadow-[#6072ff47] bg-[#6073ff] border-[#5763c0] border-b-4 duration-200 cursor-pointer hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Snippets Section --> */}
      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* <!-- FEATURES SECTION --> */}
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* <!-- IMAGE --> */}
            <div className="md:w-1/2">
              <img
                src="image-computer.png"
                alt="computer"
                className="md:absolute top-0 right-[50%]"
              />
            </div>

            {/* <!-- ITEMS CONTAINER --> */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* <!-- item 1 --> */}
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md text-[#9eabb1]">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* <!-- item 2 --> */}
              <div>
                <h5>iCloud Sync</h5>
                <p className="max-w-md text-[#9eabb1]">
                  Instantly saves and syncs snippets across all your devices.
                  Never lose your snippets again.
                </p>
              </div>
              {/* <!-- item 3 --> */}
              <div>
                <h5>Complete History</h5>
                <p className="max-w-md text-[#9eabb1]">
                  Retrieve any snippets from the past. Easily organize
                  everything
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ACCESS ANYWHERE SECTION --> */}
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content text-xl mb-24">
            Whether you’re on the go, or at your computer, you can access all
            your snippets in a few simple clicks.
          </p>
          <img src="image-devices.png" alt="Tablet" className="mx-auto" />
        </div>
      </section>
      {/* <!-- Supercharge Section --> */}
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content text-xl mb-16">
            We’ve got the tools to boost your productivity.
          </p>

          {/* <!-- Items Container --> */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* <!-- Item 1 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img src="icon-blacklist.svg" alt="" class="mb-6" />
              <h5>Create blacklist</h5>
              <p className="max-w-md text-[#9eabb1]">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img src="icon-text.svg" alt="" className="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-[#9eabb1]">
                Remove unwanted formatting from copied text for a clean and
                simple paste.
              </p>
            </div>
            {/* <!-- Item 3 --> */}
            <div className="flex flex-col items-center space-y-5">
              <img src="icon-preview.svg" alt="" classNames="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-[#9eabb1]">
                Quick preview of all snippets on hover. No need to open each
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- REFERENCES SECTION --> */}
      <section id="references">
        <div class="flex flex-col items-center justify-between max-w-5xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="logo-google.png" alt="" />
          <img src="logo-ibm.png" alt="" />
          <img src="logo-microsoft.png" alt="" />
          <img src="logo-hp.png" alt="" />
          <img src="logo-vector-graphics.png" alt="" />
        </div>
      </section>
      {/* <!-- BOTTOM CTA SECTION --> */}
      <section id="bottom-cta">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOs</h3>
          <p className="section-content text-xl mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          {/* <!-- BUTTON CONTAINER --> */}
          <div className="button-container">
            <a
              href="#"
              className="p-4 px-11 rounded-full shadow-xl shadow-[#26baa442] bg-[#26baa4] border-[#1d9f8b] border-b-4 duration-200 cursor-pointer hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-10 rounded-full shadow-xl shadow-[#6072ff47] bg-[#6073ff] border-[#5763c0] border-b-4 duration-200 cursor-pointer hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container pb-5">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* <!-- IMAGE --> */}
            <img src="logo.svg" className="scale-50" alt="" />
            {/* <!-- CONTAINER FOR MENUS & SOCIAL --> */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-[#9eabb1]">
              {/* <!-- Menus --> */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* <!-- MENU1 --> */}
                <div className="flex flex-col space-y-4 text center md:text-left">
                  <div>
                    <a href="" className="hover:text-[#26baa4]">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="" className="hover:text-[#26baa4]">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* <!-- MENU2 --> */}
                <div className="flex flex-col space-y-4 text center md:text-left">
                  <div>
                    <a href="" className="hover:text-[#26baa4]">
                      Privacy & Policy
                    </a>
                  </div>
                  <div>
                    <a href="" className="hover:text-[#26baa4]">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* <!-- MENU3 --> */}
                <div className="flex flex-col space-y-4 text center md:text-left">
                  <div>
                    <a href="" className="hover:text-[#26baa4]">
                      Install Guide
                    </a>
                  </div>
                  <div>
                    <p className="attribution">
                      Challenge by
                      <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                      >
                        Frontend Mentor
                      </a>
                      . Coded by
                      <a href="https://www.frontendmentor.io/profile/cgeguizabal">
                        Guillermo Eguizabal
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- SOCIAL ICONS --> */}

              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src="icon-facebook.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="icon-twitter.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/icon-instagram.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
