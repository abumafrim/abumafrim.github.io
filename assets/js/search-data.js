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
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-️-may-the-4th-be-with-you-in-a-research-lab-not-so-far-away-while-data-science-for-social-impact",
        
          title: '🛰️ May the 4th Be With You! “In a research lab not so... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "🛰️ May the 4th Be With You! “In a research lab not so far away…”While Jedi Masters battled Sith Lords in the stars, our DSFSI researchers were hard at work confronting the dark side of data scarcity, language bias, and limited compute across the African continent. Today, we celebrate the Force of responsible AI through five powerful papers from the DSFSI alliance:1️⃣ Political Sentiment in the Twitter System (JeDEM Journal)The Election Strikes BackPenelope Matloga, Vukosi Marivate, and Kayode Olaleye analyzed political sentiment on X (Twitter) during South Africa’s 2021 local government elections. Using RoBERTa, VADER, and GPT-3.5, they revealed public sentiments toward the ANC and detected bot activities.📖 Read: https://lnkd.in/dnv-auTv🎧 Listen: https://lnkd.in/dQ_Hkh2M2️⃣ Translation with the Force of Prompts (Machine Learning with Applications)The Prompt AwakensPitso Khoboko, Vukosi Marivate, and Joseph Sefara fine-tuned Mistral 7B to translate English into isiZulu and isiXhosa. Through prompt engineering and QLoRA, they achieved impressive results with minimal computational resources.📖 Read: https://lnkd.in/eCU5XrCm🎧 Listen: https://lnkd.in/eq4hDRuq3️⃣ QA for Farmers on the Outer Rim (Applied AI Letters)The Agrarian Jedi CouncilFiskani Banda, Vukosi Marivate, and Joyce Nakatumba-Nabende developed a multilingual question-answering system for smallholder farmers, utilizing Pula Imvula farming articles and few-shot learning techniques.📖 Read: https://lnkd.in/d-Gv-rKM🎧 Listen: https://lnkd.in/d2BkvZ-N4️⃣ Summarizing the Jedi Archives: ZASCA-Sum (Data in Brief)The Republic’s Legal Records, Now Machine-ReadableIdris Abdulmumin and Vukosi Marivate introduced ZASCA-Sum, a dataset of over 4,000 South African Supreme Court of Appeal judgments and media summaries, facilitating legal summarization research.📖 Read: https://lnkd.in/ddT6YWnF📂 Data: https://lnkd.in/dppQ8rBf💫 A Galactic Alliance of AcknowledgementsThese victories were made possible by the unwavering support of:Absa Group Chair of Data ScienceOpenAI (research compute credits)SADiLaR, GRAIN SA/GRAAN SAFCDO and IDRC (AI4D)Legal guidance from Dr. Chijioke Okorie, PhD Okorie (Data Science Law Lab)⚔️ This is the way. As we build a future where African languages and legal systems are well represented in the digital world, we salute the researchers carrying the light of innovation.May the Data be with you. — The DSFSI Alliance",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/embed/feed/update/urn:li:share:7324708613220921344", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
