import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { categories } from "./data";
import "./styles.css";

/* =========================================================
   ENVIRONMENT VARIABLES
========================================================= */

const ADSENSE_CLIENT =
  import.meta.env.VITE_ADSENSE_CLIENT || "";

const ADSENSE_SLOT_TOP =
  import.meta.env.VITE_ADSENSE_SLOT_TOP || "";

const ADSENSE_SLOT_MID =
  import.meta.env.VITE_ADSENSE_SLOT_MID || "";

const ADSENSE_SLOT_BOTTOM =
  import.meta.env.VITE_ADSENSE_SLOT_BOTTOM || "";

const GA_ID =
  import.meta.env.VITE_GA_ID || "";


/* =========================================================
   HILLTOPADS
========================================================= */


/*
   =========================================================
   TOP BANNER
   Zone: 7452441
   =========================================================
*/

const HILLTOP_TOP_SCRIPT = `
(function(tnid){
  var d = document,
      s = d.createElement('script'),
      l = d.currentScript || d.scripts[d.scripts.length - 1];

  s.settings = tnid || {};

  s.src = "//peacefulbicycle.com/bOX/V.sQd/GclE0-YDWOcH/re/mN9/u_ZwUjlGk_PGTScm0HNGTFI/0dNdDLEwtGNCzAQ/1OM/jxQM0ZNoQv";

  s.async = true;
  s.referrerPolicy = 'no-referrer-when-downgrade';

  l.parentNode.insertBefore(s, l);
})({});
`;


/*
   =========================================================
   MIDDLE BANNER
   Zone: 7452705
   =========================================================
*/

const HILLTOP_MIDDLE_SCRIPT = `
(function(cpvf){
  var d = document,
      s = d.createElement('script'),
      l = d.currentScript || d.scripts[d.scripts.length - 1];

  s.settings = cpvf || {};

  s.src = "//peacefulbicycle.com/bAX/V.sjdXGel/0hYzWfcm/-eWmb9wumZiUMl/kQPhT_cb0FN-T/IE3SMYDHUEt/NvzuQp1KMbjpcGwVOUQR";

  s.async = true;
  s.referrerPolicy = 'no-referrer-when-downgrade';

  l.parentNode.insertBefore(s, l);
})({});
`;


/*
   =========================================================
   BOTTOM BANNER
   Zone: 7452729
   =========================================================
*/

const HILLTOP_BOTTOM_SCRIPT = `
(function(mh){
  var d = document,
      s = d.createElement('script'),
      l = d.currentScript || d.scripts[d.scripts.length - 1];

  s.settings = mh || {};

  s.src = "//peacefulbicycle.com/bxXOV.sVdBGUlG0/YXWJcI/meMmS9/ukZVUclBkMPITbc/0aNGTEIW3wMbj-k/tLNVzaQP1/MMjPcBzFMMwr";

  s.async = true;
  s.referrerPolicy = 'no-referrer-when-downgrade';

  l.parentNode.insertBefore(s, l);
})({});
`;


/*
   =========================================================
   POPUNDER
   Zone: 7456209
   =========================================================
*/

const HILLTOP_POPUNDER_SCRIPT = `
(function(eomwvs){
  var d = document,
      s = d.createElement('script'),
      l = d.currentScript || d.scripts[d.scripts.length - 1];

  s.settings = eomwvs || {};

  s.src = "//second-director.com/cJDp9b6/b.2/5jlBSAWWQt9dNMzPQ/1/NNjII/waOMSv0u3/N_DeUG2YMmjQE/zu";

  s.async = true;
  s.referrerPolicy = 'no-referrer-when-downgrade';

  l.parentNode.insertBefore(s, l);
})({});
`;


/* =========================================================
   HILLTOP AD COMPONENT
========================================================= */

function HilltopAd({ position }) {
  const id = `hilltop-ad-${position}`;

  useEffect(() => {
    const container =
      document.getElementById(id);

    if (!container) return;

    /*
       Prevent duplicate loading.
    */

    if (
      container.dataset.loaded === "true"
    ) {
      return;
    }

    let scriptCode = "";

    if (position === "top") {
      scriptCode =
        HILLTOP_TOP_SCRIPT;
    }

    if (position === "middle") {
      scriptCode =
        HILLTOP_MIDDLE_SCRIPT;
    }

    if (position === "bottom") {
      scriptCode =
        HILLTOP_BOTTOM_SCRIPT;
    }

    if (!scriptCode) return;

    container.dataset.loaded =
      "true";

    const script =
      document.createElement("script");

    script.type =
      "text/javascript";

    script.async = true;

    script.referrerPolicy =
      "no-referrer-when-downgrade";

    script.text =
      scriptCode;

    container.appendChild(script);

  }, [id, position]);

  return (
    <div
      id={id}
      className={`hilltop-ad-slot hilltop-${position}`}
      data-position={position}
      aria-label="Advertisement"
    />
  );
}


/* =========================================================
   ADSENSE COMPONENT
========================================================= */

function AdSlot({
  slot,
  label = "Advertisement",
}) {
  const enabled =
    Boolean(
      ADSENSE_CLIENT &&
      slot
    );

  useEffect(() => {
    if (!enabled) return;

    try {
      window.adsbygoogle =
        window.adsbygoogle || [];

      const ads =
        document.querySelectorAll(
          `ins.adsbygoogle[data-ad-slot="${slot}"]`
        );

      ads.forEach((ad) => {
        if (
          !ad.getAttribute(
            "data-adsbygoogle-status"
          )
        ) {
          window.adsbygoogle.push({});
        }
      });

    } catch (error) {
      console.warn(
        "AdSense error:",
        error
      );
    }

  }, [enabled, slot]);

  return (
    <div
      className={`ad-slot ${
        enabled
          ? "ad-live"
          : "ad-ready"
      }`}
      aria-label={label}
    >

      {enabled ? (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: "100px",
          }}
          data-ad-client={
            ADSENSE_CLIENT
          }
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <>
          <span>
            {label}
          </span>

          <small>
            Ad placement ready —
            connect your AdSense
            publisher ID and slot
            in .env
          </small>
        </>
      )}

    </div>
  );
}


/* =========================================================
   LOGO
========================================================= */

const logoUrl = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;


/* =========================================================
   FEATURED SWAPS
========================================================= */

const featuredSwaps = [
  {
    paid: "ChatGPT Plus",
    free: "DeepSeek",
    category: "Chatbots",
    categoryId: "chatbots",
  },

  {
    paid: "Midjourney",
    free: "Ideogram",
    category: "Image Generation",
    categoryId: "image",
  },

  {
    paid: "GitHub Copilot",
    free: "Continue",
    category: "Coding",
    categoryId: "coding",
  },

  {
    paid: "ElevenLabs",
    free: "Kokoro TTS",
    category: "Voice",
    categoryId: "voice",
  },

  {
    paid: "Suno",
    free: "MusicGen",
    category: "Music",
    categoryId: "music",
  },

  {
    paid: "Adobe Premiere Pro",
    free: "DaVinci Resolve",
    category: "Video Editing",
    categoryId: "video-editing",
  },
];


/* =========================================================
   ICONS
========================================================= */

function Icon({ name }) {
  const icons = {

    search: (
      <svg viewBox="0 0 24 24">
        <circle
          cx="11"
          cy="11"
          r="6.8"
        />

        <path d="m16.2 16.2 4 4" />
      </svg>
    ),

    arrow: (
      <svg viewBox="0 0 24 24">
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    menu: (
      <svg viewBox="0 0 24 24">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),

    close: (
      <svg viewBox="0 0 24 24">
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    ),

    sparkle: (
      <svg viewBox="0 0 24 24">
        <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" />
      </svg>
    ),

    external: (
      <svg viewBox="0 0 24 24">
        <path d="M14 5h5v5" />
        <path d="M19 5 11 13" />
        <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </svg>
    ),
  };

  return (
    <span className="svg-icon">
      {icons[name]}
    </span>
  );
}


/* =========================================================
   TOOL LOGO
========================================================= */

function ToolLogo({ tool }) {
  const [failed, setFailed] =
    useState(false);

  if (failed) {
    return (
      <div className="tool-logo fallback">
        {tool.name
          .slice(0, 2)
          .toUpperCase()}
      </div>
    );
  }

  return (
    <div className="tool-logo">

      <img
        src={logoUrl(tool.domain)}
        alt=""
        loading="lazy"
        onError={() =>
          setFailed(true)
        }
      />

    </div>
  );
}


/* =========================================================
   TOOL CARD
========================================================= */

function ToolCard({
  tool,
  kind,
  onOpen,
}) {
  const isFree =
    kind === "free";

  return (
    <article
      className={`tool-card ${
        isFree
          ? "free-card"
          : ""
      }`}
    >

      <button
        className="tool-main"
        onClick={() =>
          onOpen(
            tool
          )
        }
        aria-label={`View details for ${tool.name}`}
      >

        <div className="tool-top">

          <ToolLogo
            tool={tool}
          />

          <div className="tool-meta">

            <h4>
              {tool.name}
            </h4>

            <p>
              {tool.description}
            </p>

          </div>

        </div>


        <div className="tool-bottom">

          {isFree ? (

            <span
              className={`status-badge ${
                tool.status ===
                "Open Source"
                  ? "open"
                  : tool.status ===
                    "Free Tier"
                  ? "tier"
                  : ""
              }`}
            >

              <span className="status-dot" />

              {tool.status}

            </span>

          ) : (

            <span className="price">
              {tool.pricing}
            </span>

          )}


          <span className="details-link">

            Details

            <Icon name="arrow" />

          </span>

        </div>

      </button>


      <a
        className="visit-btn"
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent(
              "swapclone-tool-click",
              {
                detail: {
                  name:
                    tool.name,
                  kind,
                },
              }
            )
          )
        }
      >

        {isFree
          ? "Use Free"
          : "Visit"}

        <Icon
          name="external"
        />

      </a>

    </article>
  );
}


/* =========================================================
   LEGAL PAGE
========================================================= */

function LegalPage({
  type,
  onBack,
}) {

  const pages = {

    privacy: {

      title:
        "Privacy Policy",

      kicker:
        "YOUR PRIVACY MATTERS",

      body: (
        <>

          <p>
            SwapClone AI is a
            discovery directory.
            We do not require an
            account to browse the
            directory or open
            listed tools.
          </p>

          <h3>
            Information we may
            collect
          </h3>

          <p>
            Basic technical
            information may be
            processed by our
            hosting, analytics,
            security and
            advertising providers.
            This can include pages
            viewed, approximate
            device/browser
            information, referral
            source and aggregated
            usage information.
          </p>

          <h3>
            Analytics and
            advertising
          </h3>

          <p>
            If analytics or
            advertising services
            are enabled, those
            providers may use
            cookies or similar
            technologies according
            to their own policies.
            Advertising may be
            personalized where
            permitted and consent
            requirements apply.
          </p>

          <h3>
            External websites
          </h3>

          <p>
            Tool cards link
            directly to
            third-party websites.
            SwapClone AI does not
            control those sites,
            their privacy
            practices, pricing,
            availability or
            content.
          </p>

          <h3>
            Contact
          </h3>

          <p>
            For privacy questions,
            email{" "}

            <a href="mailto:hello@swapclone.ai">
              hello@swapclone.ai
            </a>

            .
          </p>

        </>
      ),
    },


    terms: {

      title:
        "Terms of Use",

      kicker:
        "SIMPLE, CLEAR, TRANSPARENT",

      body: (
        <>

          <p>
            SwapClone AI provides
            information intended to
            help visitors discover
            AI tools. The directory
            is provided for general
            informational purposes.
          </p>

          <h3>
            Pricing and
            availability
          </h3>

          <p>
            Prices, free tiers,
            limits, features and
            terms can change.
            Always confirm current
            details on the official
            tool website.
          </p>

          <h3>
            Third-party links
          </h3>

          <p>
            External links lead
            to third-party
            services. SwapClone AI
            is not responsible for
            third-party websites,
            products, content,
            outages or policies.
          </p>

          <h3>
            Changes
          </h3>

          <p>
            We may update the
            directory, remove
            outdated entries or
            change these terms as
            the website develops.
          </p>

          <h3>
            Contact
          </h3>

          <p>
            Questions or
            corrections can be
            sent to{" "}

            <a href="mailto:hello@swapclone.ai">
              hello@swapclone.ai
            </a>

            .
          </p>

        </>
      ),
    },
  };

  const page =
    pages[type];

  return (
    <main className="legal-page">

      <button
        className="back-link"
        onClick={onBack}
      >
        ← Back to directory
      </button>

      <span className="about-kicker">
        {page.kicker}
      </span>

      <h1>
        {page.title}
      </h1>

      <div className="legal-copy">
        {page.body}
      </div>

    </main>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

function App() {

  const [active, setActive] =
    useState("all");

  const [filter, setFilter] =
    useState("all");

  const [query, setQuery] =
    useState("");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [selectedTool, setSelectedTool] =
    useState(null);

  const [page, setPage] =
    useState(null);


  /* =======================================================
     ADSENSE + GOOGLE ANALYTICS
     + HILLTOPADS POPUNDER
  ======================================================= */

  useEffect(() => {

    /* -------------------------------------------------------
       ADSENSE
    ------------------------------------------------------- */

    if (ADSENSE_CLIENT) {

      const scriptId =
        "swapclone-adsense";

      if (
        !document.getElementById(
          scriptId
        )
      ) {

        const script =
          document.createElement(
            "script"
          );

        script.id =
          scriptId;

        script.async =
          true;

        script.crossOrigin =
          "anonymous";

        script.src =
          `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

        document.head.appendChild(
          script
        );
      }
    }


    /* -------------------------------------------------------
       GOOGLE ANALYTICS
    ------------------------------------------------------- */

    if (
      GA_ID &&
      !document.getElementById(
        "swapclone-ga"
      )
    ) {

      const s1 =
        document.createElement(
          "script"
        );

      s1.id =
        "swapclone-ga";

      s1.async =
        true;

      s1.src =
        `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

      document.head.appendChild(
        s1
      );


      const s2 =
        document.createElement(
          "script"
        );

      s2.id =
        "swapclone-ga-config";

      s2.textContent = `
        window.dataLayer = window.dataLayer || [];

        function gtag(){
          dataLayer.push(arguments);
        }

        gtag("js", new Date());

        gtag("config", "${GA_ID}", {
          anonymize_ip: true
        });
      `;

      document.head.appendChild(
        s2
      );
    }


    /* -------------------------------------------------------
       HILLTOPADS POPUNDER
       Zone: 7456209
    ------------------------------------------------------- */

    if (
      !document.getElementById(
        "swapclone-hilltop-popunder"
      )
    ) {

      const script =
        document.createElement(
          "script"
        );

      script.id =
        "swapclone-hilltop-popunder";

      script.type =
        "text/javascript";

      script.async =
        true;

      script.referrerPolicy =
        "no-referrer-when-downgrade";

      script.text =
        HILLTOP_POPUNDER_SCRIPT;

      document.head.appendChild(
        script
      );
    }

  }, []);


  /* =======================================================
     TOOL CLICK ANALYTICS
  ======================================================= */

  useEffect(() => {

    const track =
      (event) => {

        if (window.gtag) {

          window.gtag(
            "event",
            "tool_click",
            {
              tool_name:
                event.detail.name,

              tool_type:
                event.detail.kind,
            }
          );
        }
      };


    window.addEventListener(
      "swapclone-tool-click",
      track
    );


    return () => {

      window.removeEventListener(
        "swapclone-tool-click",
        track
      );

    };

  }, []);


  /* =======================================================
     KEYBOARD SHORTCUTS
  ======================================================= */

  useEffect(() => {

    const onKey =
      (e) => {

        if (
          (e.metaKey ||
            e.ctrlKey) &&
          e.key.toLowerCase() ===
            "k"
        ) {

          e.preventDefault();

          document
            .querySelector(
              ".hero-search input"
            )
            ?.focus();
        }


        if (
          e.key ===
          "Escape"
        ) {

          setSelectedTool(
            null
          );
        }
      };


    document.addEventListener(
      "keydown",
      onKey
    );


    return () => {

      document.removeEventListener(
        "keydown",
        onKey
      );

    };

  }, []);


  /* =======================================================
     SEARCH
  ======================================================= */

  const visibleCategories =
    useMemo(() => {

      const q =
        query
          .trim()
          .toLowerCase();


      return categories

        .map(
          (category) => {

            const catMatch =
              category.name
                .toLowerCase()
                .includes(q) ||

              category.id.includes(
                q
              ) ||

              category.tags?.some(
                (t) =>
                  t.includes(q)
              );


            const matchTool =
              (tool) =>
                `${tool.name} ${
                  tool.description
                } ${
                  tool.tags?.join(
                    " "
                  ) || ""
                }`
                  .toLowerCase()
                  .includes(q);


            let paid =
              q && !catMatch
                ? category.paidTools.filter(
                    matchTool
                  )
                : category.paidTools;


            let free =
              q && !catMatch
                ? category.freeAlternatives.filter(
                    matchTool
                  )
                : category.freeAlternatives;


            if (
              filter ===
              "free"
            ) {

              free =
                free.filter(
                  (t) =>
                    t.status ===
                    "Free"
                );
            }


            if (
              filter ===
              "open"
            ) {

              free =
                free.filter(
                  (t) =>
                    t.status ===
                    "Open Source"
                );
            }


            if (
              filter ===
              "tier"
            ) {

              free =
                free.filter(
                  (t) =>
                    t.status ===
                    "Free Tier"
                );
            }


            return {

              ...category,

              paidTools:
                paid,

              freeAlternatives:
                free,

              hasResults:
                catMatch ||
                paid.length >
                  0 ||
                free.length >
                  0,

            };

          }
        )

        .filter(
          (c) =>
            c.hasResults
        );

    }, [
      query,
      filter,
    ]);


  const shownCategories =
    active === "all"
      ? visibleCategories
      : visibleCategories.filter(
          (c) =>
            c.id ===
            active
        );


  const totalTools =
    categories.reduce(
      (n, c) =>
        n +
        c.paidTools
          .length +
        c.freeAlternatives
          .length,
      0
    );


  /* =======================================================
     CATEGORY NAVIGATION
  ======================================================= */

  const chooseCategory =
    (id) => {

      setActive(id);

      setQuery("");

      setFilter(
        "all"
      );

      setMenuOpen(
        false
      );

      setPage(null);


      requestAnimationFrame(
        () => {

          document
            .getElementById(
              id
            )
            ?.scrollIntoView({
              behavior:
                "smooth",

              block:
                "start",
            });

        }
      );
    };


  /* =======================================================
     HOME
  ======================================================= */

  const openHome =
    () => {

      setPage(null);

      setActive(
        "all"
      );

      setQuery("");


      window.scrollTo({
        top: 0,
        behavior:
          "smooth",
      });
    };


  /* =======================================================
     LEGAL PAGE
  ======================================================= */

  if (page) {

    return (

      <div className="app">

        <Header
          query={query}
          setQuery={
            setQuery
          }
          menuOpen={
            menuOpen
          }
          setMenuOpen={
            setMenuOpen
          }
          openHome={
            openHome
          }
          chooseCategory={
            chooseCategory
          }
        />


        <LegalPage
          type={page}
          onBack={
            openHome
          }
        />


        <Footer
          setPage={
            setPage
          }
        />

      </div>
    );
  }


  /* =======================================================
     MAIN WEBSITE
  ======================================================= */

  return (

    <div className="app">

      <Header
        query={query}
        setQuery={
          setQuery
        }
        menuOpen={
          menuOpen
        }
        setMenuOpen={
          setMenuOpen
        }
        openHome={
          openHome
        }
        chooseCategory={
          chooseCategory
        }
      />


      <main>


        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero">

          <div className="eyebrow">

            <Icon
              name="sparkle"
            />

            CURATED AI DIRECTORY

          </div>


          <h1>

            Free AI Alternatives
            <span>.</span>

          </h1>


          <p>

            Find useful
            alternatives to the AI
            tools you normally pay
            for.

          </p>


          <div className="hero-search">

            <Icon
              name="search"
            />


            <input
              value={query}
              onChange={(e) =>
                setQuery(
                  e.target.value
                )
              }
              placeholder="Search ChatGPT, Midjourney, Photoshop..."
              autoComplete="off"
            />


            <kbd>
              ⌘ K
            </kbd>

          </div>


          <div className="quick-links">

            {categories
              .slice(0, 8)
              .map(
                (c, i) => (

                  <React.Fragment
                    key={
                      c.id
                    }
                  >

                    <button
                      onClick={() =>
                        chooseCategory(
                          c.id
                        )
                      }
                    >
                      {c.short}
                    </button>


                    {i <
                      7 && (
                      <span>
                        ·
                      </span>
                    )}

                  </React.Fragment>

                )
              )}

          </div>

        </section>


        {/* =================================================
            TRUST
        ================================================= */}

        <section className="trust-row">

          <span>
            DIRECT OFFICIAL LINKS
          </span>

          <i />

          <span>
            NO ACCOUNT REQUIRED
          </span>

          <i />

          <span>
            FREE • OPEN SOURCE • FREE TIER
          </span>

        </section>


        {/* =================================================
            QUICK SWAPS
        ================================================= */}

        <section
          className="discovery-strip"
          aria-label="Popular AI swaps"
        >

          <div className="discovery-intro">

            <span className="mini-label">
              QUICK SWAPS
            </span>


            <h2>
              Popular paid → free swaps
            </h2>


            <p>
              Start with a familiar
              tool and jump straight
              to an alternative.
            </p>

          </div>


          <div className="swap-grid">

            {featuredSwaps.map(
              (swap) => (

                <button
                  className="swap-card"
                  key={
                    swap.paid
                  }
                  onClick={() =>
                    chooseCategory(
                      swap.categoryId
                    )
                  }
                >

                  <span className="swap-category">
                    {swap.category}
                  </span>


                  <span className="swap-line">

                    <strong>
                      {swap.paid}
                    </strong>


                    <span className="swap-arrow">
                      →
                    </span>


                    <strong className="free-name">
                      {swap.free}
                    </strong>

                  </span>

                </button>

              )
            )}

          </div>

        </section>


        {/* =================================================
            HILLTOP TOP
        ================================================= */}

        <HilltopAd
          position="top"
        />


        {/* =================================================
            ADSENSE TOP
        ================================================= */}

        <AdSlot
          slot={
            ADSENSE_SLOT_TOP
          }
        />


        {/* =================================================
            VALUE STRIP
        ================================================= */}

        <section className="value-strip">

          <div>

            <strong>
              {categories.length}+
            </strong>

            <span>
              categories
            </span>

          </div>


          <div>

            <strong>
              {totalTools}+
            </strong>

            <span>
              tools listed
            </span>

          </div>


          <div>

            <strong>
              100%
            </strong>

            <span>
              direct links
            </span>

          </div>


          <div>

            <strong>
              0
            </strong>

            <span>
              signups required
            </span>

          </div>

        </section>


        {/* =================================================
            DIRECTORY
        ================================================= */}

        <section
          id="categories"
          className="directory"
        >


          <div className="filter-row">

            <div className="category-tabs">

              <button
                className={
                  active ===
                  "all"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActive(
                    "all"
                  )
                }
              >
                All
              </button>


              {categories.map(
                (c) => (

                  <button
                    key={
                      c.id
                    }
                    className={
                      active ===
                      c.id
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      chooseCategory(
                        c.id
                      )
                    }
                  >
                    {c.short}
                  </button>

                )
              )}

            </div>


            <div className="status-filters">

              <button
                className={
                  filter ===
                  "all"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFilter(
                    "all"
                  )
                }
              >
                All
              </button>


              <button
                className={
                  filter ===
                  "free"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFilter(
                    "free"
                  )
                }
              >
                Free
              </button>


              <button
                className={
                  filter ===
                  "open"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFilter(
                    "open"
                  )
                }
              >
                Open Source
              </button>


              <button
                className={
                  filter ===
                  "tier"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setFilter(
                    "tier"
                  )
                }
              >
                Free Tier
              </button>

            </div>

          </div>


          {/* =================================================
              EMPTY SEARCH
          ================================================= */}

          {shownCategories.length ===
          0 ? (

            <div className="empty">

              <div className="empty-icon">
                ⌕
              </div>


              <h3>
                No matching tools
              </h3>


              <p>
                Try a tool name,
                category, or keyword
                like “image” or
                “coding”.
              </p>


              <button
                onClick={() => {

                  setQuery("");

                  setFilter(
                    "all"
                  );

                  setActive(
                    "all"
                  );

                }}
              >
                Clear search
              </button>

            </div>

          ) : (

            shownCategories.map(
              (
                category,
                index
              ) => (

                <React.Fragment
                  key={
                    category.id
                  }
                >


                  {/* =======================================
                      CATEGORY
                  ======================================= */}

                  <section
                    className="category-section"
                    id={
                      category.id
                    }
                  >

                    <div className="category-heading">

                      <div className="category-title">

                        <span className="category-icon">
                          {
                            category.icon
                          }
                        </span>


                        <div>

                          <h2>
                            {
                              category.name
                            }
                          </h2>


                          <p>
                            {
                              category.description
                            }
                          </p>

                        </div>

                      </div>


                      <span className="result-count">

                        {
                          category
                            .paidTools
                            .length +
                          category
                            .freeAlternatives
                            .length
                        }{" "}

                        tools

                      </span>

                    </div>


                    {/* =====================================
                        PAID
                    ===================================== */}

                    {category
                      .paidTools
                      .length >
                      0 && (

                      <div className="group paid-group">

                        <div className="group-head">

                          <div>

                            <h3>
                              Paid Tools
                            </h3>

                            <p>
                              Popular tools
                              that normally
                              require payment.
                            </p>

                          </div>


                          <span className="group-label">
                            PAID
                          </span>

                        </div>


                        <div className="tool-grid">

                          {category
                            .paidTools
                            .map(
                              (t) => (

                                <ToolCard
                                  key={
                                    t.name
                                  }
                                  tool={
                                    t
                                  }
                                  kind="paid"
                                  onOpen={
                                    setSelectedTool
                                  }
                                />

                              )
                            )}

                        </div>

                      </div>

                    )}


                    {/* =====================================
                        FREE
                    ===================================== */}

                    {category
                      .freeAlternatives
                      .length >
                      0 && (

                      <div className="group free-group">

                        <div className="group-head">

                          <div>

                            <h3>

                              <span>
                                ✦
                              </span>{" "}

                              Free Alternatives

                            </h3>


                            <p>
                              Access level
                              is labelled
                              so you know
                              what “free”
                              means.
                            </p>

                          </div>


                          <span className="group-label free-label">
                            FREE OPTIONS
                          </span>

                        </div>


                        <div className="tool-grid">

                          {category
                            .freeAlternatives
                            .map(
                              (t) => (

                                <ToolCard
                                  key={
                                    t.name
                                  }
                                  tool={
                                    t
                                  }
                                  kind="free"
                                  onOpen={
                                    setSelectedTool
                                  }
                                />

                              )
                            )}

                        </div>

                      </div>

                    )}

                  </section>


                  {/* =======================================
                      HILLTOP MIDDLE
                      AFTER THIRD CATEGORY
                  ======================================= */}

                  {index ===
                    2 && (
                    <HilltopAd
                      position="middle"
                    />
                  )}


                  {/* =======================================
                      ADSENSE MIDDLE
                  ======================================= */}

                  {index ===
                    2 && (
                    <AdSlot
                      slot={
                        ADSENSE_SLOT_MID
                      }
                    />
                  )}

                </React.Fragment>

              )
            )

          )}

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="about"
        >

          <div>

            <span className="about-kicker">
              WHY SWAPCLONE AI
            </span>


            <h2>

              Less searching.

              <br />

              <em>
                More creating.
              </em>

            </h2>

          </div>


          <div className="about-copy">

            <p>
              SwapClone AI is a
              curated directory
              built to make AI
              discovery faster.
              Instead of searching
              through long lists,
              visitors can compare
              familiar paid tools
              with free,
              open-source and
              free-tier
              alternatives in one
              place.
            </p>


            <p>
              We link directly to
              official tool
              websites. Pricing,
              limits and
              availability can
              change, so verify
              current details on
              the provider's
              website before
              signing up or paying.
            </p>

          </div>

        </section>


        {/* =================================================
            HOW TO USE
        ================================================= */}

        <section className="editorial-section">

          <div>

            <span className="about-kicker">
              HOW TO USE THE DIRECTORY
            </span>


            <h2>

              Find → compare →{" "}

              <em>
                create.
              </em>

            </h2>

          </div>


          <div className="editorial-steps">

            <article>

              <b>
                01
              </b>


              <h3>
                Search a tool
              </h3>


              <p>
                Type a name such
                as ChatGPT,
                Midjourney or
                Copilot.
              </p>

            </article>


            <article>

              <b>
                02
              </b>


              <h3>
                Check the access level
              </h3>


              <p>
                Use Free, Open
                Source or Free
                Tier labels to
                understand the
                listing.
              </p>

            </article>


            <article>

              <b>
                03
              </b>


              <h3>
                Open the official site
              </h3>


              <p>
                Use the direct
                button to visit the
                provider and verify
                current pricing.
              </p>

            </article>

          </div>

        </section>


        {/* =================================================
            HILLTOP BOTTOM
        ================================================= */}

        <HilltopAd
          position="bottom"
        />


        {/* =================================================
            ADSENSE BOTTOM
        ================================================= */}

        <AdSlot
          slot={
            ADSENSE_SLOT_BOTTOM
          }
        />

      </main>


      {/* ===================================================
          TOOL MODAL
      =================================================== */}

      {selectedTool && (

        <ToolModal
          tool={
            selectedTool
          }
          onClose={() =>
            setSelectedTool(
              null
            )
          }
        />

      )}


      <Footer
        setPage={
          setPage
        }
      />

    </div>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header({
  query,
  setQuery,
  menuOpen,
  setMenuOpen,
  openHome,
  chooseCategory,
}) {

  return (

    <>

      <header className="site-header">

        <a
          className="brand"
          href="#"
          onClick={(e) => {

            e.preventDefault();

            openHome();

          }}
        >

          <img
            src="/swapclone-logo-transparent.png"
            alt="SwapClone AI"
            className="brand-mark"
          />


          <span>

            SwapClone{" "}

            <b>
              AI
            </b>

          </span>

        </a>


        <nav className="desktop-nav">

          <button
            onClick={() =>
              document
                .getElementById(
                  "categories"
                )
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                })
            }
          >
            Categories
          </button>


          <button
            onClick={() =>
              document
                .getElementById(
                  "about"
                )
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                })
            }
          >
            About
          </button>

        </nav>


        <div className="header-search">

          <Icon
            name="search"
          />


          <input
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
              )
            }
            placeholder="Search AI tools..."
            aria-label="Search AI tools"
          />


          {query && (

            <button
              className="clear-search"
              onClick={() =>
                setQuery("")
              }
            >
              ×
            </button>

          )}

        </div>


        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(
              (v) => !v
            )
          }
          aria-label="Menu"
        >

          <Icon
            name={
              menuOpen
                ? "close"
                : "menu"
            }
          />

        </button>

      </header>


      {menuOpen && (

        <div className="mobile-menu">

          <button
            onClick={() => {

              setMenuOpen(
                false
              );

              document
                .getElementById(
                  "categories"
                )
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                });

            }}
          >
            Categories
          </button>


          <button
            onClick={() => {

              setMenuOpen(
                false
              );

              document
                .getElementById(
                  "about"
                )
                ?.scrollIntoView({
                  behavior:
                    "smooth",
                });

            }}
          >
            About
          </button>

        </div>

      )}

    </>
  );
}


/* =========================================================
   TOOL MODAL
========================================================= */

function ToolModal({
  tool,
  onClose,
}) {

  const isFree =
    !!tool.status;

  return (

    <div
      className="modal-backdrop"
      onMouseDown={(e) =>
        e.target ===
          e.currentTarget &&
        onClose()
      }
    >

      <div
        className="tool-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${tool.name} details`}
      >

        <button
          className="modal-close"
          onClick={
            onClose
          }
          aria-label="Close"
        >
          ×
        </button>


        <div className="modal-top">

          <ToolLogo
            tool={tool}
          />


          <div>

            <span className="mini-label">

              {isFree
                ? tool.status
                : "PAID TOOL"}

            </span>


            <h2>
              {tool.name}
            </h2>


            <p>
              {tool.description}
            </p>

          </div>

        </div>


        <div className="modal-grid">

          <div>

            <span>
              ACCESS
            </span>


            <strong>

              {isFree
                ? tool.status
                : tool.pricing}

            </strong>

          </div>


          <div>

            <span>
              CATEGORY TAGS
            </span>


            <strong>

              {tool.tags
                ?.slice(0, 3)
                .join(
                  " • "
                ) ||
                "AI tool"}

            </strong>

          </div>

        </div>


        <div className="modal-note">

          <b>
            Before you use it
          </b>


          <p>
            Pricing, limits,
            features and
            availability can
            change. Check the
            provider's official
            website for the
            latest details.
          </p>

        </div>


        <a
          className="modal-cta"
          href={
            tool.website
          }
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent(
                "swapclone-tool-click",
                {
                  detail: {
                    name:
                      tool.name,

                    kind:
                      isFree
                        ? "free"
                        : "paid",
                  },
                }
              )
            )
          }
        >

          {isFree
            ? "Use Free"
            : "Visit Official Site"}

          <Icon
            name="external"
          />

        </a>

      </div>

    </div>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer({
  setPage,
}) {

  return (

    <footer className="footer">

      <div className="footer-brand">

        <img
          src="/swapclone-logo-transparent.png"
          alt=""
        />


        <div>

          <strong>

            SwapClone{" "}

            <b>
              AI
            </b>

          </strong>


          <span>
            Free alternatives
            to popular paid AI
            tools.
          </span>

        </div>

      </div>


      <div className="footer-links">

        <a href="#categories">
          Categories
        </a>


        <a href="/about.html">
          About
        </a>


        <a href="mailto:hello@swapclone.ai?subject=Submit%20a%20Tool">
          Submit a Tool
        </a>


        <a href="/privacy.html">
          Privacy
        </a>


        <a href="/terms.html">
          Terms
        </a>

      </div>


      <span className="copyright">
        © 2026 SwapClone AI
      </span>

    </footer>
  );
}


/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById(
    "root"
  )
).render(
  <App />
);