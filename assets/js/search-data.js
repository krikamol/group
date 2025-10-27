// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-manifesto",
          title: "Manifesto",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/manifesto/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Members of the RI Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "This page lists publications that appeared after September 2022. Prior publications can be found at [here](https://www.krikamol.org/publication/).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pubs/";
          },
        },{id: "nav-vacancy",
          title: "Vacancy",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "nav-riss",
          title: "RISS",
          description: "The Rational Intelligence Seminar Series (RISS), seeks to advance the understanding of rationality, efficiency and reliability in machine learning systems. These seminars serve as a forum for discussions and quick dissemination of results.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/riss/";
          },
        },{id: "post-imprecise-learning-for-dummies-a-new-perspective-on-training-ml-models-for-real-world",
      
        title: 'Imprecise Learning for dummies: A new perspective on training ML models for real-world... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@anurags.it/imprecise-learning-for-dummies-a-new-perspective-on-training-ml-models-for-real-world-0021d2ba5eb7?source=rss-4e6f7d0c8689------2", "_blank");
        
      },
    },{id: "post-imprecise-learning-for-dummies-how-to-solve-for-human-ai-alignment-medium",
      
        title: 'Imprecise Learning for dummies: How to solve for Human AI-Alignment | Medium <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Imprecise Learning for dummies: A new perspective on training ML models for real-world In the real world, new conditions and changing scenarios often differ from training data, causing current ML …",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@anurags.it/imprecise-learning-for-dummies-a-new-perspective-on-training-ml-models-for-real-world-0021d2ba5eb7", "_blank");
        
      },
    },{id: "news-welcome-to-muandet-group",
          title: 'Welcome to Muandet Group!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/welcome-to-muandet-group/";
            },},{id: "news-farewell-dinner-for-simon-föll",
          title: 'Farewell dinner for Simon Föll',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/farewell-dinner-simon-foell/";
            },},{id: "news-cispa-machine-learning-day",
          title: 'CISPA Machine Learning Day',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/machine-learning-day/";
            },},{id: "news-jake-fawkes-from-the-university-of-oxford-is-visiting-our-group",
          title: 'Jake Fawkes from the University of Oxford is visiting our group',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jake-fawkes-visitor/";
            },},{id: "news-siu-lun-chau-has-passed-his-ph-d-viva",
          title: 'Siu Lun Chau has passed his Ph.D. viva!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/siu-lun-chau-viva/";
            },},{id: "news-we-publish-the-rational-intelligence-manifesto",
          title: 'We publish the Rational Intelligence Manifesto',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/rational-intelligence-manifesto/";
            },},{id: "news-our-gdu-paper-is-accepted-for-publication-at-tmlr",
          title: 'Our GDU paper is accepted for publication at TMLR!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/gdu-paper-acceptance/";
            },},{id: "news-masha-naslidnyk-joins-our-group-as-a-research-intern",
          title: 'Masha Naslidnyk joins our group as a research intern',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/masha-naslidnyk-welcome-dinner/";
            },},{id: "news-we-got-1-oral-and-1-spotlight-at-neurips2023",
          title: 'We got 1 oral and 1 spotlight at NeurIPS2023!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/neurips-papers-acceptance/";
            },},{id: "news-siu-lun-chau-presented-his-research-on-stochastic-explanations-at-the-university-of-oxford-and-eth-zurich",
          title: 'Siu Lun Chau presented his research on stochastic explanations at the University of...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/siu-lun-chau-talks/";
            },},{id: "news-jake-fawkes-shahine-bouabid-and-renan-gadoni-join-our-group-as-research-interns",
          title: 'Jake Fawkes, Shahine Bouabid, and Renan Gadoni join our group as research interns...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jake-shahine-renan-welcome/";
            },},{id: "news-shahine-bouabid-talks-about-opportunities-for-data-driven-modeling-in-climate-science",
          title: 'Shahine Bouabid talks about opportunities for data-driven modeling in climate science',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/shahine-talk-climate-science/";
            },},{id: "news-renan-gadoni-talks-about-a-landscape-of-global-ai-regulations",
          title: 'Renan Gadoni talks about a landscape of global AI regulations',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/renan-talk-ai-regulations/";
            },},{id: "news-siu-lun-chau-is-presenting-a-poster-spotlight-on-stochastic-explanations-at-the-australian-data-science-network-conference",
          title: 'Siu Lun Chau is presenting a poster spotlight on stochastic explanations at the...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/siu-lun-chau-ASDN/";
            },},{id: "news-our-csl-paper-accpeted-at-aaai-24-as-oral-presentation",
          title: 'Our CSL paper accpeted at AAAI-24 as Oral Presentation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/AAAI-Acceptance-Oral/";
            },},{id: "news-our-paper-coexbo-got-accepted-at-aistats-24",
          title: 'Our paper CoExBO got accepted at AISTATS-24',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/AISTATS-Acceptance/";
            },},{id: "news-kiet-presents-our-aaai-24-oral-paper",
          title: 'Kiet presents our AAAI-24 Oral Paper',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Kiet-presents-at-AAAI/";
            },},{id: "news-rational-intelligence-lab-participated-in-dagstuhl-seminar-on-ai-for-social-good",
          title: 'Rational Intelligence Lab Participated in Dagstuhl Seminar on AI for Social Good',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Dagstuhl-visit/";
            },},{id: "news-our-paper-on-domain-generalization-got-accepted-at-icml-24",
          title: 'Our paper on Domain Generalization got accepted at ICML-24',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ICML-Acceptance/";
            },},{id: "news-we-present-coexbo-at-aistats-24",
          title: 'We present CoExBo at AISTATS-24',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/AISTATS-Presentation/";
            },},{id: "news-we-present-a-spotlight-paper-at-icml-2024",
          title: 'We present a spotlight paper at ICML 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ICML2024-Spotlight/";
            },},{id: "news-we-participated-in-the-sipta-school-in-ghent-belgium",
          title: 'We participated in the SIPTA School in Ghent, Belgium',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/SIPTA-School/";
            },},{id: "news-joint-workshop-of-our-ml-reading-group",
          title: 'Joint workshop of our ML reading group',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Reading-Group-Workshop/";
            },},{id: "news-year-end-group-dinner",
          title: 'Year end group dinner',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Endoftheyear-Groupdinner/";
            },},{id: "news-siu-lun-presented-at-amazon-berlin",
          title: 'Siu Lun presented at Amazon Berlin',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Amazon-Berlin-Visit/";
            },},{id: "riss-the-relative-value-of-prediction",
          title: 'The relative value of prediction',
          description: "",
          section: "Riss",handler: () => {
              window.location.href = "/riss/juan-perdomo/";
            },},{id: "riss-prediction-potential-outcomes-and-performativity",
          title: 'Prediction, Potential Outcomes, and Performativity',
          description: "",
          section: "Riss",handler: () => {
              window.location.href = "/riss/sebastian-zezulka/";
            },},{id: "riss-posterior-mean-matching-generative-modeling-through-online-bayesian-inference",
          title: 'Posterior Mean Matching: Generative Modeling through Online Bayesian Inference',
          description: "",
          section: "Riss",handler: () => {
              window.location.href = "/riss/yixin-wang/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%61%6E%64%65%74@%63%69%73%70%61.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/https://github.com/muandet-lab", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/krikamol", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
