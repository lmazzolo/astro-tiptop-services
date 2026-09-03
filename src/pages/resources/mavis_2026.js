import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const COLAB_URL_PREDICT_EXPLORE = 'https://colab.research.google.com/drive/1AqLoxbADs6wAU79Nq6PkElaR6LtQL2Fc?usp=sharing';
const COLAB_URL_SELECT = 'https://colab.research.google.com/drive/17dA_0X6kHCzrS210wVg9KBmy8UTEB2JG?usp=sharing';

export default function MAVIS2026Page() {

  const notebookUrlPredictExplore = useBaseUrl(
    'tutorials/MAVIS2026_TipTop_HandsOn_A.ipynb'
  );

  const iniUrlMavis = useBaseUrl(
    'tutorials/mavis.ini'
  );

  const notebookUrlSelect = useBaseUrl(
    'tutorials/MAVIS2026_TipTop_Select.ipynb'
  );

  const iniUrlAsterism = useBaseUrl(
    'tutorials/mavis_asterism.ini'
  );

  return (
    <Layout
      title="MAVIS 2026 — TipTop Hands-On"
      description="TipTop hands-on session at MAVIS 2026"
    >

      <div className="container margin-vert--lg">

        <div className="row">

          {/* ======================================================
              SIDEBAR
          ====================================================== */}

          <div className="col col--3">

            <nav style={{ position: 'sticky', top: '4rem' }}>

              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0
                }}
              >

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/about_us">
                    🪪 About us
                  </Link>
                </li>

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/references">
                    📘 Key Publications & References
                  </Link>
                </li>

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/contributors">
                    🔑 Contributors Area
                  </Link>
                </li>

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/AO_school">
                    🔭 AO school
                  </Link>
                </li>

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/mavis_2026">
                    ✨ MAVIS 2026 - Hands-On
                  </Link>
                </li>

                <li style={{ marginBottom: '0.3rem' }}>
                  <Link to="/resources/internship_opportunities">
                    💼 Internship Opportunities
                  </Link>
                </li>

                <li style={{ marginBottom: '1rem' }}>
                  <Link to="/resources/contact">
                    📬 Contact Support
                  </Link>
                </li>

              </ul>

            </nav>

          </div>


          {/* ======================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="col col--8">

            <h1 style={{ textAlign: 'center' }}>
              ✨ MAVIS 2026 — TipTop Hands-On
            </h1>


            {/* ====================================================
                INTRODUCTION
            ==================================================== */}

            <p
              style={{
                textAlign: 'center',
                maxWidth: '750px',
                margin: '0 auto 1.5rem'
              }}
            >

              Welcome to the <strong>TipTop Hands-On Session</strong>{' '}
              of the{' '}

              <a
                href="https://www.eso.org/sci/meetings/2026/MAVIS2026/program.html"
                target="_blank"
                rel="noreferrer"
              >
                <strong>MAVIS 2026 conference</strong>
              </a>.

              <br /><br />

               In this one-hour session, we will use
              <strong> TipTop</strong> directly to simulate and explore
              adaptive-optics PSFs, using
              <Link to="/docs/orion/aoinstruments#mavis"> <strong>MAVIS </strong></Link>  
              as our main use case.

              <br /><br />

              Although we focus on MAVIS today, the workflow introduced here
              is not instrument-specific: the same approach can be reused to
              explore PSFs for other AO instruments supported by TipTop such as  
              <Link to="/docs/orion/aoinstruments#micado"> MICADO</Link>, 
              <Link to="/docs/orion/aoinstruments#harmoni"> HARMONI</Link>, 
              <Link to="/docs/orion/aoinstruments#morfeo"> MORFEO</Link>...

            </p>


            {/* ====================================================
                PHILOSOPHY
            ==================================================== */}

            <div
              className="alert alert--primary"
              style={{ margin: '1.5rem 0' }}
            >
              <h3 style={{ marginTop: 0 }}>
                🎯 Predict → Explore → Select
              </h3>

              <p style={{ marginBottom: 0 }}>
                We will start from a validated MAVIS configuration,
                predict the AO PSF and explore how it changes when the
                observing configuration is modified.
                If time allows, we will also introduce NGS asterism selection.
              </p>
            </div>


            {/* ====================================================
                WHY TIPTOP?
            ==================================================== */}

            <h2>Why use TipTop directly?</h2>

            <p>
              TipTop can be used in different ways: as a standalone simulation
              tool, as part of larger scientific or operational workflows,
              or as a modelling component integrated into other software.
            </p>

            <p>
              Running TipTop directly gives you access to the underlying simulation
              workflow: you can inspect and modify the AO configuration, explore
              different observing conditions, compare the resulting PSFs and
              performance metrics, or integrate TipTop predictions into your own
              simulation and analysis tools.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                margin: '1.5rem 0'
              }}
            >

              <div
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              >
                <h3>🔎 Understand</h3>
                  <p>
                    Inspect a TipTop configuration and connect its main parameters
                    to the AO simulation and its outputs.
                  </p>
              </div>


              <div
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              >
                <h3>🔬 Explore</h3>

                <p>
                  Change observing conditions or AO parameters and compare
                  how the predicted PSF responds.
                </p>
              </div>


              <div
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              >
                <h3>🧩 Integrate</h3>

                <p>
                  Use AO PSF predictions programmatically inside your own
                  simulation, analysis, or observation-preparation tools.
                </p>
              </div>

            </div>

            {/* <p>
              During the hands-on, we will focus mainly on the first two:
              understanding a MAVIS simulation and turning TipTop into a
              small numerical experiment.
            </p> */}


            {/* ====================================================
                PREDICT
            ==================================================== */}

            <h2>1 — 🔭 Predict</h2>

            <blockquote>
              <strong>
                Given a MAVIS configuration, what PSF does TipTop predict?
              </strong>
            </blockquote>

            <p>
              We will start from a validated MAVIS configuration and run
              a first simulation.
            </p>

            <p>
              We will visualize the science and guide-star geometry,
              inspect the predicted PSFs across the MCAO field,
              and introduce the main AO performance metrics returned by
              TipTop:
              <strong> Strehl Ratio (SR)</strong>,
              <strong> FWHM</strong>, and
              <strong> Encircled Energy (EE)</strong>.
            </p>

            <p>
              These quantities describe different aspects of the PSF,
              so we will compare scalar metrics with the PSF morphology
              itself.
            </p>

            {/* ====================================================
            EXPLORE
            ==================================================== */}

            <hr style={{ margin: '2.5rem 0' }} />

            <h2>2 — 🔬 Explore</h2>

            <blockquote>
              <strong>
                What happens if I change the observing conditions?
              </strong>
            </blockquote>

            <p>
              Once we have a baseline MAVIS prediction, we will use TipTop
              to explore how the predicted PSF responds to changes in the
              observing configuration.
            </p>

            <p>
              Instead of running a single fixed configuration, we will vary
              parameters and compare the resulting PSFs and AO performance metrics.
              {/* This allows us to turn TipTop into a small numerical
              experiment tailored to a science question. */}
            </p>


            {/* <h3>Guided experiment</h3>

            <p>
              We will first explore the effect of
              <strong> zenith angle</strong> on the MAVIS PSF.
            </p>

            <p>
              Rather than simply asking whether the AO performance gets
              better or worse, we will translate the result into an
              observing question:
            </p>

            <blockquote>
              <strong>
                If my science requires a given PSF performance,
                up to which zenith angle would my observation
                remain acceptable?
              </strong>
            </blockquote> */}

            {/* <p>
              We will then explore different parameters or PSF properties relevant to astronomical observations.
            </p>

            <p>
              Possible directions include:
            </p>

            <ul>

              <li>
                <strong>Seeing</strong> — how robust is the predicted
                MAVIS PSF to changing atmospheric conditions?
              </li>

              <li>
                <strong>Guide-star brightness</strong> — what happens
                when the available Natural Guide Stars are fainter?
              </li>

              <li>
                <strong>Field dependence</strong> — does a change in
                observing conditions affect all science directions in
                the same way?
              </li>

              <li>
                <strong>Metric choice</strong> — do SR, FWHM and EE
                lead to the same conclusion?
              </li>

              <li>
                <strong>PSF morphology</strong> — does the change
                mainly affect the core, the halo, or both?
              </li>

            </ul> */}

{/* 
            <div
              className="alert alert--warning"
              style={{ margin: '1.2rem 0' }}
            >

              <strong>🧪 Your challenge</strong>

              <br /><br />

              Choose one question and produce
              <strong> one figure</strong> that answers it.

              <br /><br />

              Be ready to summarize your result in one sentence.

            </div> */}


            {/* ====================================================
                SELECT
            ==================================================== */}

            <hr style={{ margin: '2.5rem 0' }} />

            <h2>3 — ⭐ Select <small>(optional)</small></h2>

            <blockquote>
              <strong>
                What if several guide-star configurations are possible?
              </strong>
            </blockquote>

            <p>
              If time allows, we will introduce TipTop's
              <code> asterismSelection</code> capability.
            </p>

            <p>
              Starting from a set of candidate Natural Guide Stars,
              TipTop can generate possible asterisms, evaluate their
              predicted AO performance, and rank the resulting configurations.
            </p>

            <p>
              The accompanying notebook also shows how the selection results
              are saved and can be reloaded without recomputing all asterisms.
            </p>


            {/* <h3>Can you predict the best asterism?</h3>

            <p>

              Before running the selection, we will look at the
              candidate guide-star field and make our own prediction.

            </p>

            <blockquote>

              <strong>
                Which asterism would you choose from the guide-star
                positions and brightnesses alone?
              </strong>

            </blockquote>

            <p>

              We will then compare that intuition with the
              performance predicted by TipTop.

            </p> */}

            {/* <p>

              This provides a direct connection between
              <strong> PSF modelling</strong> and
              <strong> observation preparation</strong>.

            </p> */}


            {/* ====================================================
                TAKE HOME
            ==================================================== */}
{/* 
            <div
              className="alert alert--success"
              style={{ margin: '2.5rem 0' }}
            >

              <h3 style={{ marginTop: 0 }}>
                The workflow to remember
              </h3>

              <div
                style={{
                  textAlign: 'center',
                  fontSize: '1.15rem',
                  margin: '1rem 0'
                }}
              >

                <strong>
                  PREDICT → EXPLORE → SELECT
                </strong>

              </div>

              <div style={{ textAlign: 'center' }}>

                science question
                {' → '}
                observing configuration
                {' → '}
                TipTop PSF
                {' → '}
                what-if experiment
                {' → '}
                observing decision

              </div>

            </div> */}


            {/* ====================================================
                MATERIAL
            ==================================================== */}

            <hr style={{ margin: '2.5rem 0' }} />

            <h2 id="hands-on">
              💻 Hands-on material
            </h2>

            <p>
              The hands-on is organized in two parts. Please download the
              corresponding notebooks and MAVIS configuration files before
              the session.
            </p>


            {/* ====================================================
                PART A
            ==================================================== */}

            <h3>Part A — Predict & Explore</h3>

            <p>
              This is the main part of the hands-on. We will run a MAVIS
              simulation, inspect the predicted PSFs and performance metrics,
              and explore changes in the observing configuration.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                flexWrap: 'wrap',
                margin: '1rem 0 1.5rem'
              }}
            >
              <a
                className="button button--primary button--lg"
                href={notebookUrlPredictExplore}
                download
              >
                ⬇️ Download Predict & Explore notebook
              </a>

              <a
                className="button button--secondary button--lg"
                href={iniUrlMavis}
                download
              >
                ⬇️ Download mavis.ini
              </a>
            </div>


            {/* ====================================================
                PART B
            ==================================================== */}

            <h3>Part B — Select <small>(optional)</small></h3>

            <p>
              If time allows, we will use TipTop to evaluate and compare
              possible NGS asterisms. This notebook can also be completed
              independently after the session.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                flexWrap: 'wrap',
                margin: '1rem 0 1.5rem'
              }}
            >
              <a
                className="button button--primary button--lg"
                href={notebookUrlSelect}
                download
              >
                ⬇️ Download Select notebook
              </a>

              <a
                className="button button--secondary button--lg"
                href={iniUrlAsterism}
                download
              >
                ⬇️ Download mavis_asterism.ini
              </a>
            </div>


            {/* ====================================================
                COLAB
            ==================================================== */}

            <h3>Colab</h3>

            <p>
              If you prefer not to use a local installation, both notebooks
              are also available as Colab-ready versions.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <a
                className="button button--secondary button--lg"
                href={COLAB_URL_PREDICT_EXPLORE}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://colab.research.google.com/assets/colab-badge.svg"
                  alt=""
                  style={{
                    height: '1.1em',
                    verticalAlign: 'middle',
                    marginRight: 8
                  }}
                />
                Predict & Explore
              </a>

              <a
                className="button button--secondary button--lg"
                href={COLAB_URL_SELECT}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://colab.research.google.com/assets/colab-badge.svg"
                  alt=""
                  style={{
                    height: '1.1em',
                    verticalAlign: 'middle',
                    marginRight: 8
                  }}
                />
                Select (optional)
              </a>
            </div>


            {/* ====================================================
                BEFORE SESSION
            ==================================================== */}

            <hr style={{ margin: '2.5rem 0' }} />

            <h2 id="before-session">
              ✅ Before you start
            </h2>
            <p>

              Please simply make sure that TipTop is installed and that
              the minimal Quickstart runs successfully.

            </p>


            <ul>

              <li>

                <Link to="/docs/general/installation">

                  <strong>
                    TipTop Installation Tutorial
                  </strong>

                </Link>

              </li>

              <li>

                <Link to="/docs/quickstart">

                  <strong>
                    TipTop Quickstart
                  </strong>

                </Link>

              </li>

            </ul>


            <div
              className="alert alert--success"
              style={{ margin: '1rem 0 2rem' }}
            >

              <strong>You are ready if:</strong>{' '}

              the TipTop Quickstart runs without errors and produces
              a PSF FITS file.

            </div>


            {/* ====================================================
                TECHNICAL REQUIREMENTS
            ==================================================== */}

            <h3>Technical requirements</h3>

            <ul>

              <li>Python 3.11+</li>

              <li>
                TipTop v1.5.1 or later
              </li>

              <li>
                GPU is not required
              </li>

            </ul>


            {/* ====================================================
                TROUBLESHOOTING
            ==================================================== */}

            <h2 id="troubleshooting">
              🛟 Troubleshooting & support
            </h2>

            <p>

              If you encounter installation problems before the
              session, please contact:

              <br /><br />

              <strong>Lisa-Marie Mazzolo</strong>

              <br />

              📬 lisa-marie.mazzolo@lam.fr

            </p>


            {/* ====================================================
                GOING FURTHER
            ==================================================== */}

            <hr style={{ margin: '2.5rem 0' }} />

            <h2 id="more-info">
              📚 Going further
            </h2>
            <p>

              More detailed examples and reference material are
              available in the TipTop documentation.

            </p>


            <ul>

              <li>

                <Link to="/docs/general/installation">
                  Installation
                </Link>

              </li>

              <li>

                <Link to="/docs/quickstart">
                  Quickstart
                </Link>

              </li>

              <li>

                <Link to="/docs/orion/howtosetuplaunchfile">
                  Running TipTop and retrieving results
                </Link>

              </li>

              <li>

                <Link to="/docs/aquila/running_selection/">
                  Asterism selection
                </Link>

              </li>

            </ul>


            <p
              style={{
                fontSize: '0.9rem',
                opacity: 0.8,
                marginTop: '2rem'
              }}
            >

              {/* TipTop is developed as part of the Astro-TipTop
              Services ecosystem. */}

            </p>

          </div>

        </div>

      </div>

    </Layout>
  );
}