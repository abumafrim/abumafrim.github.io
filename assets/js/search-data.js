// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected projects in African and low-resource language technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Code, datasets, and tools.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "An abridged CV — use the button above to download it as a PDF. Full CV available on request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses and training in NLP, machine learning, and software engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-our-2026-publications-so-far-and-where-african-nlp-is-heading",
        
          title: 'Our 2026 publications so far, and where African NLP is heading <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Publicly available work I&#39;ve been part of this year in translation, sentiment, speech, language ID, and benchmarking for African languages.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/embed/feed/update/urn:li:share:7466049073943425025", "_blank");
          
        },
      },{id: "post-african-languages-reach-record-web-presence-in-common-crawl-data",
        
          title: 'African languages reach record web presence in Common Crawl data <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "African languages just hit their highest-ever representation on the web!!!The latest Common Crawl (Jan 2026) shows African languages at 0.057% of all crawled pages, an all-time record. That&#39;s 18.5% higher than the previous peak and 343,000+ more pages than the last crawl.Some standout growth in a single month:→ Igbo: +124%→ Sango: +259%→ Tswana: +279%→ Swahili: +45% (now at 294K pages)For context, English sits at 42% — roughly 728x more pages than all 29 detected African languages combined. There&#39;s still a massive gap, but the direction is right. We believe projects like AfriCC are contributing to this shift by actively increasing the volume and diversity of African language content available for web crawlers.The full data is open — Common Crawl publishes language stats for every monthly crawl: https://lnkd.in/dE-WAUeZWhat&#39;s your take — what else can we do to close this gap?#AfriCC #AfricanLanguages #NLP #CommonCrawl #DigitalInclusion #OpenData",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/embed/feed/update/urn:li:share:7425152130686242816", "_blank");
          
        },
      },{id: "post-commonlid-re-evaluating-state-of-the-art-language-identification",
        
          title: 'CommonLID: Re-evaluating State-of-the-Art Language Identification… <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Introducing our workCommonLID: Re-evaluating State-of-the-Art Language Identification Performance on Web DataArXiv: https://lnkd.in/dBgW6b6PSome months ago, I invited the community to participate in a hackathon to annotate a language identification dataset, with authorship on the resulting dataset description paper as an incentive. We are deeply grateful to everyone who participated, as well as to the Common Crawl team led by Pedro Ortiz Suarez, my boss Vukosi Marivate, and our collaborators Shamsuddeen H. Muhammad, PhD, and Atnafu Lambebo Tonja.We hope this resource will inspire a wide range of NLP research and applications, and contribute meaningfully to advancing African NLP.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/embed/feed/update/urn:li:share:7422543844220747776", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-afrisenti-received-the-best-non-archival-paper-award-at-africanlp-2023",
          title: '🏆 AfriSenti received the Best Non-archival Paper award at AfricaNLP 2023.',
          description: "",
          section: "News",},{id: "news-masakhanews-won-the-area-chair-award-resources-amp-amp-evaluation-at-ijcnlp-aacl-2023",
          title: '🏆 MasakhaNEWS won the Area Chair Award (Resources &amp;amp;amp; Evaluation) at IJCNLP-AACL 2023.',
          description: "",
          section: "News",},{id: "news-afrihate-was-listed-in-the-ircai-global-top-100-outstanding-ai-projects-advancing-the-sdgs-unesco",
          title: '🏆 AfriHate was listed in the IRCAI Global Top 100 Outstanding AI Projects...',
          description: "",
          section: "News",},{id: "news-semeval-2024-task-1-semantic-textual-relatedness-earned-a-best-task-paper-honorable-mention",
          title: '🏆 SemEval-2024 Task 1 (Semantic Textual Relatedness) earned a Best Task Paper Honorable Mention....',
          description: "",
          section: "News",},{id: "news-presented-afrihate-a-multilingual-hate-amp-amp-abusive-language-collection-for-african-languages-at-naacl-2025",
          title: 'Presented AfriHate, a multilingual hate &amp;amp;amp; abusive-language collection for African languages, at NAACL 2025....',
          description: "",
          section: "News",},{id: "news-brighter-appeared-at-acl-2025-and-our-semeval-2025-task-11-on-text-based-emotion-detection-ran-across-30-languages",
          title: 'BRIGHTER appeared at ACL 2025, and our SemEval-2025 Task 11 on text-based emotion detection ran...',
          description: "",
          section: "News",},{id: "news-brighter-won-best-resource-paper-at-acl-2025",
          title: '🏆 BRIGHTER won Best Resource Paper at ACL 2025!',
          description: "",
          section: "News",},{id: "news-our-semeval-2025-task-11-on-text-based-emotion-detection-was-awarded-best-task",
          title: '🏆 Our SemEval-2025 Task 11 on text-based emotion detection was awarded Best Task.',
          description: "",
          section: "News",},{id: "news-awarded-principal-investigator-on-afrigemma-advancing-african-language-nlp-for-research-healthcare-and-societal-benefit",
          title: 'Awarded Principal Investigator on AfriGemma: Advancing African Language NLP for Research, Healthcare, and...',
          description: "",
          section: "News",},{id: "news-as-visiting-professor-taught-nlp-amp-amp-llms-at-the-african-institute-for-mathematical-sciences-aims-south-africa-nov-dec-2025",
          title: 'As Visiting Professor, taught NLP &amp;amp;amp; LLMs at the African Institute for Mathematical...',
          description: "",
          section: "News",},{id: "news-co-organising-two-semeval-2026-shared-tasks-multilingual-online-polarization-detection-and-dimensional-aspect-based-sentiment-amp-amp-stance",
          title: 'Co-organising two SemEval-2026 shared tasks — multilingual online polarization detection, and dimensional aspect-based...',
          description: "",
          section: "News",},{id: "news-several-papers-at-africanlp-2026-rabat-where-i-also-serve-as-a-workshop-co-organiser",
          title: 'Several papers at AfricaNLP 2026 (Rabat), where I also serve as a workshop co-organiser....',
          description: "",
          section: "News",},{id: "news-new-preprint-afriscience-mt-towards-decolonizing-science-in-africa-through-text-translation",
          title: 'New preprint: AfriScience-MT — Towards Decolonizing Science in Africa through Text Translation. 📄...',
          description: "",
          section: "News",},{id: "news-new-preprint-temporal-simultaneity-predicts-annotation-quality-in-sentiment-corpora",
          title: 'New preprint: Temporal Simultaneity Predicts Annotation Quality in Sentiment Corpora. 📄',
          description: "",
          section: "News",},{id: "news-returning-to-aims-south-africa-as-visiting-professor-to-teach-nlp-amp-amp-llms-for-the-upcoming-nov-dec-2026-cohort",
          title: 'Returning to AIMS South Africa as Visiting Professor to teach NLP &amp;amp;amp; LLMs...',
          description: "",
          section: "News",},{id: "projects-afrigemma",
          title: 'AfriGemma',
          description: "A multimodal, multilingual Pan-African large language model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afrigemma/";
            },},{id: "projects-afrihate",
          title: 'AfriHate',
          description: "Hate &amp;amp; abusive-language datasets for African languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afrihate/";
            },},{id: "projects-afriscience-mt",
          title: 'AfriScience-MT',
          description: "Decolonising science in Africa through machine translation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afriscience-mt/";
            },},{id: "projects-afrisenti-amp-amp-naijasenti",
          title: 'AfriSenti &amp;amp;amp; NaijaSenti',
          description: "Twitter sentiment benchmarks for African languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afrisenti/";
            },},{id: "projects-brighter-amp-amp-emotion-detection",
          title: 'BRIGHTER &amp;amp;amp; Emotion Detection',
          description: "Human-annotated emotion datasets for 28+ languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brighter-emotion/";
            },},{id: "projects-hausa-visual-genome-amp-amp-havqa",
          title: 'Hausa Visual Genome &amp;amp;amp; HaVQA',
          description: "Multimodal datasets for Hausa.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hausa-multimodal/";
            },},{id: "projects-open-language-data-initiative",
          title: 'Open Language Data Initiative',
          description: "Open machine-translation data for low-resource languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oldi/";
            },},{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/99660099932/", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/254/2143", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%64%72%69%73.%61%62%64%75%6C%6D%75%6D%69%6E@%75%70.%61%63.%7A%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/abumafrim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abumafrim", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3795-8381", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/AAP-3518-2021/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UJBFXaoAAAAJ", "_blank");
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
