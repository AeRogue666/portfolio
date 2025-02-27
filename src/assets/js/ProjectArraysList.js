import { reactive } from "vue";
/* Router content */
export const routerLinkContentList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        home: "Accueil",
        projects: "Projets perso",
        works: "Projets pro",
        contact: "Contact",
        about: "CV",
        legalmentions: "Mentions légales",
        cgu: "CGU",
        privacy: "Données personnelles",
        sitemap: "Sitemap",
        portfolio: "Portfolio",
        made: "fait avec",
        love: "amour",
        by: "par",
        notfound: "Page 404",
        maincontent: "Passer directement au contenu principal",
        openmenu: "Ouvrir le menu",
        closemenu: "Fermer le menu",
        navlinks: "Liens du site",
        themecontent: [
          {
            id: "dark",
            content: "Le site passera en thème foncé - Thème actuel : clair",
          },
          {
            id: "light",
            content: "Le site passera en thème clair - Thème actuel : foncé",
          },
        ],
        sociallinks: [
          {
            id: 1,
            content: "AurelDev",
            url: "https://www.github.com/AeRogue666",
            icon: "github",
            type: "fab",
            title: "Lien externe vers ma page Github",
          },
          {
            id: 2,
            content: "AurelDev",
            url: "https://www.linkedin.com",
            icon: "linkedin",
            type: "fab",
            title: "Lien externe vers ma page LinkedIn",
          },
          {
            id: 3,
            content: "pro@aureldev.fr",
            url: "mailto:pro@aureldev.fr",
            icon: "contact-card",
            type: "fas",
            title:
              "Lien externe qui va ouvrir votre boîte mail et pré-remplir un mail avec mon adresse mail professionnelle",
          },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        home: "Home",
        projects: "My projects",
        works: "Works",
        contact: "Contact",
        about: "CV",
        legalmentions: "Legals mentions",
        cgu: "TOS",
        privacy: "Privacy policy",
        sitemap: "Sitemap",
        portfolio: "Portfolio",
        made: "made with",
        love: "love",
        by: "by",
        notfound: "404 Page",
        maincontent: "Going to the main content",
        openmenu: "Open menu",
        closemenu: "Close menu",
        navlinks: "Site links",
        themecontent: [
          {
            id: "dark",
            content:
              "The site will be switched to dark theme - Actual theme: dark",
          },
          {
            id: "light",
            content:
              "The site will be switched to light theme - Actual theme: light",
          },
        ],
        sociallinks: [
          {
            id: 1,
            content: "AurelDev",
            url: "https://www.github.com/AeRogue666",
            icon: "github",
            type: "fab",
            title: "External link to my Github repository",
          },
          {
            id: 2,
            content: "AurelDev",
            url: "https://www.linkedin.com",
            icon: "linkedin",
            type: "fab",
            title: "External link to my LinkedIn page",
          },
          {
            id: 3,
            content: "pro@aureldev.fr",
            url: "mailto:pro@aureldev.fr",
            icon: "contact-card",
            type: "fas",
            title:
              "External link that gonna open your mailbox and preset a new mail with my professionnal mail",
          },
        ],
      },
    ],
  },
]);
/* Languages */
export const LanguagesList = reactive([
  {
    code: "en-UK",
    alias: ["en_US", "en-US", "en_UK", "en_GB", "en-GB", "en", "gb"],
    name: "English",
    label: "Please select your language",
    lang: "en",
  },
  {
    code: "fr-FR",
    alias: ["fr_FR", "fr_CA", "fr-CA", "fr"],
    name: "Français",
    label: "Veuillez sélectionner votre langue",
    lang: "fr",
  },
]);
/* Professionnal works page */
export const worksList = reactive([
  {
    code: "fr-FR",
    data: [],
  },
  {
    code: "en-UK",
    data: [],
  },
]);
/* Personnal projects page */
export const projectsList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        id: 1,
        title: "Projet 1 - Site de recettes de cuisine",
        description:
          "Création d'un site de recettes de cuisine avec ExpressJS et du CSS Natif pour la partie frontend, NodeJS et Directus + PostGreSQL pour la partie backend.",
        content: "",
        dateCreatedText: "Créé en",
        dateCreated: "",
        dateUpdatedText: "Mis à jour en",
        dateUpdated: "",
        images: [1, 2, 3, 4, 5, 6, 7],
        tagstitle: "Liste des languages utilisés pour réaliser ce projet",
        tags: [1, 2, 3, 4, 5, 6, 7],
        url: [
          {
            id: 1,
            url: "https://www.github.com/AeRogue666/Project1-Recipes",
            icon: "github",
          },
        ],
        mdlink: "Project1.md",
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        id: 1,
        title: "Project 1 - Cooking recipes website",
        description:
          "Creation of a cooking recipes website with ExpressJS and Native CSS for the frontend, NodeJS and Directus + PostGreSQL for the backend.",
        content: "",
        dateCreatedText: "Created at",
        dateCreated: "",
        dateUpdatedText: "Updated at",
        dateUpdated: "",
        images: [1, 2, 3, 4, 5, 6, 7],
        tagstitle: "Languages list used for this project",
        tags: [1, 2, 3, 4, 5, 6, 7],
        url: [
          {
            id: 1,
            url: "https://www.github.com/AeRogue666/Project1-Recipes",
            icon: "github",
          },
        ],
        mdlink: "Project1.md",
      },
    ],
  },
]);
/* Tags for Works/Projects pages */
export const tagsColorList = [
  { id: 1, title: "HTML", color: "red", icon: "html5" },
  { id: 2, title: "CSS", color: "rebeccapurple", icon: "css" },
  { id: 3, title: "JavaScript", color: "yellow", icon: "square-js" },
  { id: 4, title: "ExpressJS", color: "orange", icon: "" },
  { id: 5, title: "NodeJS", color: "gray", icon: "node-js" },
  { id: 6, title: "Directus", color: "blueviolet", icon: "" },
  { id: 7, title: "PostGreSQL", color: "cornflowerblue", icon: "" },
  { id: 8, title: "React", color: "dodgerblue", icon: "react" },
  { id: 9, title: "TailWindCSS", color: "darkgreen", icon: "" },
  { id: 10, title: "Bootstrap", color: "victoria", icon: "bootstrap" },
  { id: 11, title: "VueJs", color: "mint", icon: "vuejs" },
  { id: 12, title: "MySQL", color: "vivid-orange", icon: "" },
  { id: 13, title: "Webpack", color: "denim", icon: "" },
  { id: 14, title: "Github", color: "tia-maria", icon: "github" },
  { id: 15, title: "Git", color: "portland-orange", icon: "git" },
  { id: 16, title: "Vite", color: "green", icon: "" },
];
/* Images for Works/Projects pages */
export const imagesList = [
  {
    code: "fr-FR",
    data: [
      {
        id: 1,
        title: "Image créé par AurelDev",
        url: "Homepage_desktop",
        description:
          "Image de la page d'accueil du site de recettes de cuisine",
      },
      {
        id: 2,
        title: "Image créé par AurelDev",
        url: "Recipes_desktop",
        description:
          "Image de la page des recettes du site de recettes de cuisine",
      },
      {
        id: 3,
        title: "Image créé par AurelDev",
        url: "Recipes_filter_desktop",
        description:
          "Image du filtre de la page des recettes du site de recettes de cuisine",
      },
      {
        id: 4,
        title: "Image créé par AurelDev",
        url: "Contact_desktop",
        description:
          "Image de la page de contact du site de recettes de cuisine",
      },
      {
        id: 5,
        title: "Image créé par AurelDev",
        url: "Recipe_part1_desktop",
        description:
          "Image de la page d'une recette (partie 1) du site de recettes de cuisine",
      },
      {
        id: 6,
        title: "Image créé par AurelDev",
        url: "Recipe_part2_desktop",
        description:
          "Image de la page d'une recette (partie 1=2 - menus fermés) du site de recettes de cuisine",
      },
      {
        id: 7,
        title: "Image créé par AurelDev",
        url: "Recipe_part2_down_desktop",
        description:
          "Image de la page d'une recette (partie 2 - menus ouverts) du site de recettes de cuisine",
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        id: 1,
        title: "Image created by AurelDev",
        url: "Homepage_desktop",
        description: "Image of the recipes website home page",
      },
      {
        id: 2,
        title: "Image created by AurelDev",
        url: "Recipes_desktop",
        description: "Image from the recipes page of the recipes website",
      },
      {
        id: 3,
        title: "Image created by AurelDev",
        url: "Recipes_filter_desktop",
        description: "Image of the recipes page filter on the recipes website",
      },
      {
        id: 4,
        title: "Image created by AurelDev",
        url: "Contact_desktop",
        description: "Image of the contact page on the recipes website",
      },
      {
        id: 5,
        title: "Image created by AurelDev",
        url: "Recipe_part1_desktop",
        description: "Image of a recipe page (part 1) on the recipes website",
      },
      {
        id: 6,
        title: "Image created by AurelDev",
        url: "Recipe_part2_desktop",
        description:
          "Image of a recipe page (part 2 - closed menus) on the recipes website",
      },
      {
        id: 7,
        title: "Image created by AurelDev",
        url: "Recipe_part2_down_desktop",
        description:
          "Image of a recipe page (part 2 - open menus) on the recipes website",
      },
    ],
  },
];
export const galleryList = [
  {
    code: "fr-FR",
    data: [
      {
        ariaGallery: "Galerie d'images du projet",
        ariaPreviousSlide: "Naviguer jusqu'à l'image précédente",
        ariaNextSlide: "Naviguer jusqu'à l'image suivante",
        iconArrowUp: "Flèche pointant vers le haut",
        iconArrowDown: "Flèche pointant vers le bas",
        iconArrowLeft: "Flèche pointant vers la gauche",
        iconArrowRight: "Flèche pointant vers la droite",
        ariaNavigateToSlide: `Naviguer jusqu'à l'image {slideNumber}`,
        itemXofY: `Image {currentSlide} sur {slidesCount}`,
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        ariaGallery: "Gallery",
        ariaPreviousSlide: "Navigate to previous slide",
        ariaNextSlide: "Navigate to next slide",
        iconArrowUp: "Arrow pointing upwards",
        iconArrowDown: "Arrow pointing downwards",
        iconArrowLeft: "Arrow pointing to the left",
        iconArrowRight: "Arrow pointing to the right",
        ariaNavigateToSlide: `Navigate to slide {slideNumber}`,
        itemXofY: `Item {currentSlide} of {slidesCount}`,
      },
    ],
  },
];
/* Home page */
export const homePageContentList = reactive([
  {
    code: "en-UK",
    introduction: "Hello, I'm AurelDev",
    title1: "I like",
    making: "making",
    title2: "interactive, accessible and meaningful things with",
    subtitle1: "and I",
    heart: "love",
    subtitle2: "what I do",
    quote:
      "Through my work, I'd like to make the web a more pleasant place for everyone, and especially for people with disabilities.",
    sociallinks: [
      {
        id: 1,
        content: "AurelDev",
        url: "https://www.github.com/AeRogue666",
        icon: "github",
        type: "fab",
        title: "External link to my Github repository",
      },
      {
        id: 2,
        content: "AurelDev",
        url: "https://www.linkedin.com",
        icon: "linkedin",
        type: "fab",
        title: "External link to my LinkedIn page",
      },
      {
        id: 3,
        content: "pro@aureldev.fr",
        url: "mailto:pro@aureldev.fr",
        icon: "contact-card",
        type: "fas",
        title:
          "External link that gonna open your mailbox and preset a new mail with my professionnal mail",
      },
    ],
    contactme: "Contact me",
    about: "View and download my CV",
    cv: [{ title: "Download my CV", url: "./files/pdf/cv_aureldev_en.pdf" }],
    completedproject: "Completed projects",
    preferredlanguage: "Preferred languages",
    preferredtechnos: "Preferred technologies",
    contact: [{ title: "I am available on", subtitle: "And you can" }],
  },
  {
    code: "fr-FR",
    introduction: "Bonjour, je suis AurelDev ",
    title1: "J'aime",
    making: "créer",
    title2: "des trucs interactifs, accessibles et qui ont du sens avec du",
    subtitle1: "et J'",
    heart: "aime",
    subtitle2: "ce que je fais",
    quote:
      "J'aimerais, avec mon travail, faire du web un endroit plus agréable pour tous, et surtout pour les personnes en situation de handicap.",
    sociallinks: [
      {
        id: 1,
        content: "AurelDev",
        url: "https://www.github.com/AeRogue666",
        icon: "github",
        type: "fab",
        title: "Lien externe vers ma page Github",
      },
      {
        id: 2,
        content: "AurelDev",
        url: "https://www.linkedin.com",
        icon: "linkedin",
        type: "fab",
        title: "Lien externe vers ma page LinkedIn",
      },
      {
        id: 3,
        content: "pro@aureldev.fr",
        url: "mailto:pro@aureldev.fr",
        icon: "contact-card",
        type: "fas",
        title:
          "Lien externe qui va ouvrir votre boîte mail et pré-remplir un mail avec mon adresse mail professionnelle",
      },
    ],
    contactme: "Me contacter",
    about: "Visionner et télécharger mon CV",
    cv: [
      {
        title: "Télécharger directement mon CV",
        url: "./files/pdf/cv_aureldev_fr.pdf",
      },
    ],
    preferredlanguage: "Langages préférés",
    completedproject: "Projets réalisés",
    preferredtechnos: "Technologies préférés",
    contact: [
      {
        title: "Je suis joignable par les moyens suivants",
        subtitle: "Vous pouvez aussi",
      },
    ],
  },
]);
/* About section */
export const aboutList = reactive([
  {
    code: "fr-FR",
    title: "A propos",
    children1: [
      {
        content:
          "Depuis mon enfance, j'ai toujours adoré découvrir de nouvelles choses, de nouveaux horizons, tourner des problèmes complexes en des tâches plus simples et abordables.",
      },
      {
        content:
          "Je ne sais plus à quand cette passion remonte mais j'aime le web, aussi bien sa culture que son fonctionnement. C'est d'ailleurs pour cela que j'ai choisis cette voie.",
      },
    ],
    children2: [
      {
        id: 1,
        title: "Développeur",
        icon: "code",
        children: [
          {
            content:
              "VueJs, ExpressJs et TailwindCSS sont au coeur des technologies web les plus employés pour créer des applications et sites web.",
          },
          {
            content:
              "Fort de mon expérience, certes courte, mais riche d'apprentissages et d'améliorations, j'ai appris à créer des interfaces et des sites sur ces technologies en respectant les besoins attendus et le cahier des charges établi.",
          },
        ],
      },
      {
        id: 2,
        title: "Designer",
        icon: "pen",
        children: [
          { content: "L'UX/UI est au coeur toute création web." },
          {
            content:
              "Une interface qui n'est pas correctement conçue ne donnera pas envie à l'utilisateur d'aller plus loin dans son exploration du site ou de l'application.",
          },
          {
            content:
              "Je m'engage à créer des interfaces conviviales, harmonieuses, faciles à utiliser et accessibles à tous.",
          },
        ],
      },
      {
        id: 3,
        title: "Accessibilité",
        icon: "eye",
        children: [
          {
            content:
              "L'accessibilité des applications et notamment des interfaces est un enjeu crucial pour permettre à un site d'attirer un maximum de clients potentiels.",
          },
          {
            content:
              "Cela implique de concevoir des interfaces accessibles sur des supports variés (téléphone, tablette, montre, téléphone pliable, télévision, ordinateur) mais aussi de garantir par l'accessibilité du contenu aux personnes présentant divers handicaps.",
          },
          {
            content:
              "Toutes mes créations sont accessibles et utilisables avec des logiciels de lecture d'écran, dans le respect des normes en vigueur dans l'industrie.",
          },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    title: "About",
    children1: [
      {
        content:
          "From my childhood, I've always loved discovering new things, new horizons, turning complex problems into simpler and more affordable tasks.",
      },
      {
        content:
          "I don't remember when this passion dates back, but I love the web, both its culture and its functioning. This is why I chose this path.",
      },
    ],
    children2: [
      {
        id: 1,
        title: "Developper",
        icon: "person",
        children: [
          {
            content:
              "VueJs, ExpressJs & TailwindCSS are at the core of the  most commonly used web technologies for creating applications and websites.",
          },
          {
            content:
              "With my admittedly limited but substantial experience in learning and improving junior skills, I've gained the ability to build interfaces and sites using these technologies, while respecting the expected needs and established specifications.",
          },
        ],
      },
      {
        id: 2,
        title: "Designer",
        icon: "pen",
        children: [
          { content: "UX/UI is the foundation of all web design." },
          {
            content:
              "An interface that isn't properly designed will not encourange users to explore the site or application further.",
          },
          {
            content:
              "I am committed to creating user-friendly interfaces that are harmonious, easy to use and accessible to all.",
          },
        ],
      },
      {
        id: 3,
        title: "Accessibility",
        icon: "eye",
        children: [
          {
            content:
              "Ensuring the accessibility of applications, and in particular interfaces, is a crucial issue for any site seeking to maximize customer acquisition.",
          },
          {
            content:
              "This means making and ensuring seamless interaction across a diverse range of media including telephone, tablet, watch, folding phone, television and computer interfaces, as well as making content accessible to people with diverse disabilities.",
          },
          {
            content:
              "All my creations are designed to be fully accessible and navigable by screen-reading software, in compliance with current industry standards.",
          },
        ],
      },
    ],
  },
]);
/* CV page */
export const cvList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        title: "Curriculum Vitae",
        presentation: "Visualiser et télécharger mon CV au format PDF ou Web",
        picture: "Portrait d'AurelDev, auteur de ce portfolio, réalisé en CSS.",
        children1: [
          {
            children: [
              {
                content: "Choisissez une action dans le menu",
                classes: "",
              },
              {
                content: "Selectionner une action",
                classes: "font-semibold",
              },
              {
                content: "Le CV apparaîtra ici à la place de ce texte.",
                classes: "",
              },
            ],
          },
          /* {
            children: [
              {
                content:
                  "Récemment diplômé mais ambitieux et motivé, je me suis découvert une appétence pour l'UX/UI, l'Accessibilité et post-formation, pour l'animation CSS.",
              },
              {
                content:
                  "Je suis passionné par l'astronomie, l'astrophoto, les livres (un véritable rat de bibliothèque, 100% pur livre), les jeux vidéos, la robotique, les nouvelles technologies et idées novatrices.",
              },
              {
                content:
                  "Je suis propriétaire de deux handicaps, Dysgraphie et Dyspraxie, et j'en ai fait une force.",
              },
            ],
          },
          {
            children: [
              {
                content: "Je fais ce que je fais parce que j'aime ce que je fais.",
              },
              {
                content:
                  "J'ai toujours adoré interagir avec les autres et parler de mes passions, de ce que je créé ou de ce que d'autres réalisent.",
              },
              {
                content:
                  "J'aimerais, avec mon travail, faire du web un endroit plus agréable pour tous et surtout pour les personnes en situation de handicap.",
              },
              {
                content:
                  "En espérant que nous nous croiserons au détour d'un carrefour et que nous pourrons, ensemble, faire de ce monde un meilleur endroit.",
              },
            ],
          }, */
        ],
        contact: "Me contacter",
        actiontitle: "Sélectionner une action",
        actions: [
          {
            downloadbutton: [
              {
                title: "Télécharger le CV",
                url: "./files/pdf/cv_aureldev_fr.pdf",
              },
            ],
            openbutton: [{ title: "Ouvrir le CV" }],
            selectbutton: [
              { title: "Ouvrir le CV au format", url: "cv_aureldev_fr" },
            ],
            newpagebutton: [
              {
                title: "Ouvrir le CV (redirection)",
                url: "./files/pdf/cv_aureldev_fr.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        title: "Curriculum Vitae",
        presentation: "Visualize and download my CV at the PDF or Web format",
        picture: "Picture of AurelDev, portfolio author, maked with CSS.",
        children1: [
          {
            children: [
              {
                content: "Please select an action in the menu",
                classes: "",
              },
              {
                content: "Select an action",
                classes: "font-semibold",
              },
              {
                content: "The CV gonna appear at the place of this text.",
                classes: "",
              },
            ],
          },
          /* {
        children: [
          {
            content:
              "Recently graduated but ambitious and motivated, I discovered an appetite for UX/UI, Accessibility, and post-graduate, for CSS animation.",
          },
          {
            content:
              "I am passionate about Astronomy, Astrophotography, books (a true bookworm, 100% pure book), video games, robotic, new technologies and innovative ideas.",
          },
          {
            content:
              "I am the owner of two handicaps called Dysgraphia and Dyspraxia, and I turned that in a strenght.",
          },
        ],
      },
      {
        children: [
          {
            content: "I do what I do because I love what I do.",
          },
          {
            content:
              "I love interacting with others and I've always loved talking about my passions and what I do, or other create.",
          },
          {
            content:
              "I'd like, with my work, to make web a better place for everyone, and especially for people with disabilities.",
          },
          {
            content:
              "I hope we'll meet at a crossroads and that together, we can make the world a better place.",
          },
        ],
      }, */
        ],
        contact: "Contact me",
        actiontitle: "Select an action",
        actions: [
          {
            downloadbutton: [
              { title: "Download CV", url: "./files/pdf/cv_aureldev_en.pdf" },
            ],
            openbutton: [{ title: "Open the CV" }],
            selectbutton: [
              { title: "Open the CV at format", url: "cv_aureldev_en" },
            ],
            newpagebutton: [
              {
                title: "Open the CV (redirection)",
                url: "./files/pdf/cv_aureldev_en.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
]);
export const skillsList = reactive([
  {
    code: "fr-FR",
    id: "social-skills",
    title: "Compétences",
    data: [
      { id: 1, content: "Développement front-end" },
      { id: 2, content: "Développement d'applications mobiles" },
      { id: 3, content: "Développement back-end" },
      { id: 4, content: "Conception d'interfaces UX/UI" },
      { id: 5, content: "Accessibilité" },
      { id: 6, content: "Optimisations d'interfaces" },
      { id: 7, content: "Suivi des évolutions technologiques" },
      { id: 8, content: "Sens de l'initiative et proactivité" },
      { id: 9, content: "Sens de la communication" },
      { id: 10, content: "Capacité d'adaptation" },
      {
        id: 11,
        content: "A l'écoute des autres et des critiques constructives",
      },
      { id: 12, content: "Curiosité et envie d'apprendre" },
      { id: 13, content: "Sens de l'autonomie" },
      { id: 14, content: "Esprit d'analyse" },
    ],
  },
  {
    code: "en-UK",
    id: "social-skills",
    title: "Skills",
    data: [
      { id: 1, content: "Front-end developments" },
      { id: 2, content: "Mobiles apps developments" },
      { id: 3, content: "Back-end developments" },
      { id: 4, content: "UX/UI interfaces design" },
      { id: 5, content: "Accessibility" },
      { id: 6, content: "Interfaces optimization" },
      { id: 7, content: "Follow technological developments" },
      { id: 8, content: "Sens of initiating and proactivity" },
      { id: 9, content: "Sens of communication" },
      { id: 10, content: "Ability to adapt" },
      { id: 11, content: "Attentive to others and constructive criticism" },
      { id: 12, content: "Sense of autonomy" },
      { id: 13, content: "Curiosity and desire to learn" },
      { id: 14, content: "Analytical mindset" },
    ],
  },
]);
export const skillsITList = reactive([
  {
    code: "fr-FR",
    id: "technologies-skills",
    title: "Compétences informatiques",
    data: [
      { id: 1, content: "Vue (VueJs)" },
      { id: 2, content: "React (ReactJS)" },
      { id: 3, content: "JavaScript" },
      { id: 4, content: "HTML" },
      { id: 5, content: "CSS" },
      { id: 6, content: "Express" },
      { id: 7, content: "Svelte" },
      { id: 8, content: "MySQL" },
      { id: 9, content: "PostgreSQL" },
      { id: 10, content: "Directus" },
      { id: 11, content: "RestAPI" },
      { id: 12, content: "VS Code" },
      { id: 13, content: "WordPress" },
      { id: 14, content: "Git" },
      { id: 15, content: "Github" },
      { id: 16, content: "NPM" },
      { id: 17, content: "Webpack" },
      { id: 18, content: "JSON" },
      { id: 19, content: "SCRUM" },
      { id: 20, content: "KANBAN" },
      { id: 21, content: "Méthode Agile" },
    ],
  },
  {
    code: "en-UK",
    id: "technologies-skills",
    title: "Technological skills",
    data: [
      { id: 1, content: "Vue (VueJs)" },
      { id: 2, content: "React (ReactJS)" },
      { id: 3, content: "JavaScript" },
      { id: 4, content: "HTML" },
      { id: 5, content: "CSS" },
      { id: 6, content: "Express" },
      { id: 7, content: "Svelte" },
      { id: 8, content: "MySQL" },
      { id: 9, content: "PostgreSQL" },
      { id: 10, content: "Directus" },
      { id: 11, content: "RestAPI" },
      { id: 12, content: "VS Code" },
      { id: 13, content: "WordPress" },
      { id: 14, content: "Git" },
      { id: 15, content: "Github" },
      { id: 16, content: "NPM" },
      { id: 17, content: "Webpack" },
      { id: 18, content: "JSON" },
      { id: 19, content: "SCRUM" },
      { id: 20, content: "KANBAN" },
      { id: 21, content: "Agile method" },
    ],
  },
]);
export const languagesList = reactive([
  {
    code: "fr-FR",
    id: "languages",
    title: "Langues",
    data: [
      { id: 1, content: "Français", level: "Langue maternelle" },
      { id: 2, content: "Anglais", level: "Partiellement B2/C1" },
    ],
  },
  {
    code: "en-UK",
    id: "languages",
    title: "Languages",
    data: [
      { id: 1, content: "French", level: "Native language" },
      { id: 2, content: "English", level: "Partially B2/C1" },
    ],
  },
]);
export const hobbiesList = reactive([
  {
    code: "fr-FR",
    id: "hobbies",
    title: "Centres d'intérêts",
    data: [
      { id: 1, content: "Astronomie" },
      { id: 2, content: "Astrophotographie" },
      { id: 3, content: "Lire des livres" },
      { id: 4, content: "Passion pour les jeux vidéos" },
      { id: 5, content: "Robotique" },
      { id: 6, content: "Nouvelles technologies" },
      { id: 7, content: "Expériences de bénévolat" },
    ],
  },
  {
    code: "en-UK",
    id: "hobbies",
    title: "Interests",
    data: [
      { id: 1, content: "Astronomy" },
      { id: 2, content: "Astrophotography" },
      { id: 3, content: "Read books" },
      { id: 4, content: "Passion for videogames" },
      { id: 5, content: "Robotic" },
      { id: 6, content: "New technologies" },
      { id: 7, content: "Volunteer experiences" },
    ],
  },
]);
export const cvContentList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        title: "AurelDev",
        subtitle: "Développeur front-end junior",
        adress: "Ardèche, France",
        email: "pro@aureldev.fr",
        portfolio: "www.aureldev.fr",
        altportfolio: "Lien vers le portfolio",
        children1: [
          {
            id: "resume",
            title: "Résumé",
            children: [
              {
                content:
                  "Développeur front-end passionné par les nouvelles technologies et l'univers du numérique.",
              },
              {
                content:
                  "Je suis formé à la création de sites web et d'applications mobiles à l'aide des langages Vue, React, JavaScript, Express, CSS et HTML.",
              },
              {
                content:
                  "Créatif et rigoureux, je mets un point d'honneur à créer des interfaces conviviales, harmonieuses, faciles d'utilisation et accessibles à tous.",
              },
              { content: "Disponible immédiatement." },
            ],
          },
        ],
        children2: [
          {
            id: "experiences",
            title: "Expériences",
            data: [
              {
                title: "Technicien d'Assistance Informatique",
                dateStarted: "01-01-2022",
                dateEnded: "05-01-2022",
                enterprise: "Energie SDED",
                adress: "3 Av. de la Gare, 26300 Alixan",
                website: "www.sded.org",
                url: "https://www.sded.org/",
                data: [
                  {
                    content:
                      "Gérer les entrées et sorties d'équipement informatique de l'entreprise",
                  },
                  {
                    content:
                      "Traiter des incidents et assurer le suivi du parc en temps réel",
                  },
                  {
                    content:
                      "Elaborer un index autonome de l'entièreté du matériel du parc",
                  },
                  {
                    content:
                      "Diagnostiquer, intervenir et résoudre un dysfonctionnement matériel ou logiciel",
                  },
                  {
                    content:
                      "Installer, déployer et personnaliser un poste utilisateur",
                  },
                ],
              },
              {
                title: "Administrateur Réseaux et Développeur web",
                dateStarted: "09/01/2017",
                dateEnded: "05/01/2018",
                enterprise: "ACEPP ADEHL",
                adress: "300 Route de Mirabel, 07170 Lussas",
                website: "www.acepp-adehl.fr",
                url: "https://www.acepp-adehl.fr",
                data: [
                  {
                    content:
                      "Gérer le parc informatique et conseiller des utilisateurs (Diagnostiquer, intervenir et résoudre des dysfonctionnements, acheter du matériel)",
                  },
                  {
                    content:
                      "Installer et configurer un nom de domaine (DNS) et un hébergement web",
                  },
                  {
                    content:
                      "Créer un site internet (CMS - WordPress) en respectant le cahier des charges et les besoins des clients (fonctionne désormais sous un autre CMS)",
                  },
                  {
                    content:
                      "Installer et configurer un serveur de sauvegarde (NAS) pour permettre une souveraineté sur les données de l'entreprise qui était sauvegardées dans le cloud (RGPD)",
                  },
                  {
                    content:
                      "Créer des fiches explicatives sur l'usage du NAS pour les utilisateurs novices",
                  },
                ],
              },
            ],
          },
        ],
        children3: [
          {
            id: "formations",
            title: "Formations & Diplômes",
            data: [
              {
                title: "Titre de développeur web et web-mobile",
                dateStarted: "01-01-2023",
                dateEnded: "08-01-2023",
                enterprise: "Ecole O'Clock",
                website: "www.oclock.io",
                url: "https://www.oclock.io/",
                other: "(DWWWM - RNCP37674 / ROME M1805 Equivalent Bac +2)",
              },
              {
                title: "Baccalauréat STI2D",
                dateStarted: "09-05-2016",
                dateEnded: "07-12-2018",
                enterprise:
                  "Lycée général, technologique et professionnel Les Catalins",
                website: "www.catalins.fr",
                url: "https://www.catalins.fr",
                other: "",
              },
            ],
          },
        ],
        children4: [
          {
            id: "social-skills",
            title: "Compétences",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          },
          {
            id: "technologies-skills",
            title: "Compétences informatiques",
            data: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ],
          },
          {
            id: "languages",
            title: "Langues",
            data: [1, 2],
          },
          {
            id: "hobbies",
            title: "Centres d'intérêts",
            data: [1, 2, 3, 4, 5, 6, 7],
          },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        title: "AurelDev",
        subtitle: "Developer front-end junior",
        adress: "Ardèche, France",
        email: "pro@aureldev.fr",
        portfolio: "www.aureldev.fr",
        altportfolio: "Link to portfolio",
        children1: [
          {
            id: "resume",
            title: "Resume",
            children: [
              {
                content:
                  "Front-end developer with a passion for new technologies and the digital world.",
              },
              {
                content:
                  "I'm trained to create websites and mobile applications using Vue, React, JavaScript, Express, CSS and HTML.",
              },
              {
                content:
                  "Creative and rigorous, I make a point of creating user-firendly interfaces that are harmonious, easy to use and accessible to all.",
              },
              { content: "Available immediately." },
            ],
          },
        ],
        children2: [
          {
            id: "experiences",
            title: "Experiences",
            data: [
              {
                title: "IT support technician",
                dateStarted: "01-01-2022",
                dateEnded: "05-01-2022",
                enterprise: "Energie SDED",
                adress: "3 Av. de la Gare, 26300 Alixan",
                website: "www.sded.org",
                url: "https://www.sded.org/",
                data: [
                  {
                    content:
                      "Manage the entry and exit of the company's IT equipment",
                  },
                  {
                    content:
                      "Handle incidents and monitor the fleet in real time",
                  },
                  {
                    content:
                      "Draw up an autnomous index of all hardware in the fleet",
                  },
                  {
                    content:
                      "Diagnose, interven and resolve hardware and software malfunctions",
                  },
                  {
                    content: "Install, deploy and customize user workstations",
                  },
                ],
              },
            ],
          },
        ],
        children3: [
          {
            id: "formations",
            title: "Training & qualifications",
            data: [
              {
                title: "Web and web-mobile developer title",
                dateStarted: "01-01-2023",
                dateEnded: "08-01-2023",
                enterprise: "O'Clock school",
                website: "www.oclock.io",
                url: "https://www.oclock.io/",
                other: "(DWWWM - RNCP37674 / ROME M1805 Bac +2 equivalent)",
              },
              {
                title: "STI2D Bachelor's degree",
                dateStarted: "09-05-2016",
                dateEnded: "07-12-2018",
                enterprise:
                  "General, technological and professional high school Les Catalins",
                website: "www.catalins.fr",
                url: "https://www.catalins.fr",
                other: "",
              },
            ],
          },
        ],
        children4: [
          {
            id: "social-skills",
            title: "Social skills",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          },
          {
            id: "technologies-skills",
            title: "Technological skills",
            data: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ],
          },
          {
            id: "languages",
            title: "Languages",
            data: [1, 2],
          },
          {
            id: "hobbies",
            title: "Interests/Hobbies",
            data: [1, 2, 3, 4, 5, 6, 7],
          },
        ],
      },
    ],
  },
]);
/* Contact page */
export const contactContentList = reactive([
  {
    code: "en-UK",
    contact: "",
    media: "",
    form: [
      {
        title: "Contact form",
        data: [
          {
            children: [
              {
                content:
                  "In accordance with Github's data collection policies, we are unable to provide a contact form for the purpose of gathering personal customer data.",
              },
              {
                content:
                  "However, you may still submit your inquiry by clicking the button below:",
              },
            ],
            contactbtn: "Contact me on pro@aureldev.fr",
          },
        ],
      },
    ],
  },
  {
    code: "fr-FR",
    contact: "Contact",
    media: "Réseaux sociaux",
    form: [
      {
        title: "Formulaire de contact",
        data: [
          {
            children: [
              {
                content:
                  "En raison de la réglementation de Github, notre hébergeur, nous ne pouvons pas vous proposer de formulaire de contact recueillant des données personnelles.",
              },
              {
                content:
                  "Cependant, vous pouvez nous contacter en cliquant sur le bouton ci-dessous :",
              },
            ],
            contactbtn: "Me contacter sur pro@aureldev.fr",
          },
        ],
      },
    ],
  },
]);
/* Privacy Policy page */
export const cookiesList = [
  {
    code: "fr-FR",
    data: [
      {
        id: 1,
        name: "language",
        publisher: "Aureldev",
        purpose: "Permet de sauvegarder le choix de la langue (nom)",
        retention: "session",
      },
      {
        id: 2,
        name: "languageCode",
        publisher: "Aureldev",
        purpose: "Permet de sauvegarder le choix de la langue (code)",
        retention: "session",
      },
      {
        id: 3,
        name: "user-theme",
        publisher: "Aureldev",
        purpose: "Permet de sauvegarder le choix du theme (clair/foncé)",
        retention: "session",
      },
      {
        id: 3,
        name: "disability-text",
        publisher: "Aureldev",
        purpose: "Permet de sauvegarder les choix visuels (taille des textes)",
        retention: "session",
      },
      {
        id: 3,
        name: "disability-color",
        publisher: "Aureldev",
        purpose: "Permet de sauvegarder les choix visuels (couleur des textes)",
        retention: "session",
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        id: 1,
        name: "language",
        publisher: "Aureldev",
        purpose: "Allows you to save your choice of language (name)",
        retention: "session",
      },
      {
        id: 2,
        name: "languageCode",
        publisher: "Aureldev",
        purpose: "Allows you to save your choice of language (code)",
        retention: "session",
      },
      {
        id: 3,
        name: "user-theme",
        publisher: "Aureldev",
        purpose: "Allows you to save your choice of theme (light/dark)",
        retention: "session",
      },
      {
        id: 4,
        name: "disability-text",
        publisher: "Aureldev",
        purpose: "Save visual choices (text size)",
        retention: "session",
      },
      {
        id: 5,
        name: "disability-color",
        publisher: "Aureldev",
        purpose: "Save visual choices (colour)",
        retention: "session",
      },
    ],
  },
];
/* Not Found page */
export const notFoundContentList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        title: "404 Error",
        subtitle: "Page Not Found",
        text1: "Il semblerait que votre requête vous ai mené au ",
        text2: "Chemin de travers",
        text3:
          "Mais pas de panique, voici quelques liens qui pourrait vous intéresser :",
        text4:
          "La prochaine fois que vous emploierez de la poudre de cheminettes, pensez à dire ",
        text5: "Chemin de traverse",
        data: [
          { title: "Accueil", icon: "home", url: "/" },
          { title: "Projets personnels", icon: "pen", url: "projects" },
          { title: "Projets professionnels", icon: "user", url: "works" },
          { title: "Contact", icon: "contact-card", url: "/#contact" },
          { title: "A propos", icon: "user", url: "cv" },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        title: "404 Error",
        subtitle: "Page Not Found",
        text1: "It seems your query has led you to the ",
        text2: "Diagonally",
        text3: "But don't panic, here are a few links that might interest you:",
        text4: "Next time you use floo powder, remember to say ",
        text5: "Diagon Alley",
        data: [
          { title: "Home", icon: "home", url: "/" },
          { title: "Personnal projects", icon: "pen", url: "projects" },
          { title: "Professionnal works", icon: "user", url: "works" },
          { title: "Contact", icon: "contact-card", url: "/#contact" },
          { title: "About", icon: "user", url: "cv" },
        ],
      },
    ],
  },
]);
/* 
 - Projects :
  {
    id: 1,
    title: "",
    description: "",
    content: "",
    dateCreatedText: "",
    dateCreated: "",
    dateUpdatedText: "",
    dateUpdated: "",
    images: [{ id: 1, title: "", url: "", description: "" }],
    tagstitle: "",
    tags: [1, 2, 3],
    url: [{ id: 1, url: "", icon: "" }],
    mdlink: "",
  },
  - Works :
  {
    id: 1,
    title: "",
    description: "",
    content: "",
    dateCreatedText: "",
    dateCreated: "",
    dateUpdatedText: "",
    dateUpdated: "",
    for: "",
    by: "",
    client: "",
    employer: "",
    images: [{ id: 1, title: "", url: "", description: "" }],
    tagstitle: "",
    tags: [1, 2, 3],
    url: [{ id: 1, url: "", icon: "" }],
    mdlink: "",
  },
*/
