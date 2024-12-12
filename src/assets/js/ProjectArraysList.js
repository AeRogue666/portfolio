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
        about: "A propos",
        legalmentions: "Mentions légales",
        cgu: "CGU",
        privacy: "Données personnelles",
        faq: "FAQ",
        sitemap: "Sitemap",
        portfolio: "Portfolio",
        made: "fait avec",
        love: "amour",
        by: "par",
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
        about: "About",
        legalmentions: "Legals mentions",
        cgu: "TOS",
        privacy: "Privacy policy",
        faq: "Q/A",
        sitemap: "Sitemap",
        portfolio: "Portfolio",
        made: "made with",
        love: "love",
        by: "by",
      },
    ],
  },
]);
/* Professionnal works page */
export const worksList = reactive([
  {
    code: "fr-FR",
    data: [
      {
        id: 1,
        title: "Projet 1",
        description: "Un projet professionnel réalisé en entreprise",
        content: "Un projet professionnel réalisé dans l'entreprise Machintruc",
        dateCreatedText: "Créé en",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Mis à jour en",
        dateUpdated: "11-05-2024",
        for: "Pour",
        by: "Par",
        client: "Client 1",
        employer: "Employeur 1",
        images: [
          {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
            description: "Image décrivant le projet",
            imageURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
          },
        ],
        tagstitle: "Liste des languages utilisés pour réaliser ce projet",
        tags: [1, 2, 3, 4, 7, 8],
        url: [
          { id: 1, url: "https://www.github.com/AeRogue666/", icon: "github" },
        ],
      },
      {
        id: 2,
        title: "Projet 2",
        description: "Un projet professionnel réalisé en entreprise",
        content: "Un projet professionnel réalisé dans l'entreprise Machintruc",
        dateCreatedText: "Créé en",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Mis à jour en",
        dateUpdated: "11-05-2024",
        for: "Pour",
        by: "Par",
        client: "Client 2",
        employer: "Employeur 2",
        images: [
          {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
            description: "Image décrivant le projet",
            imageURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
          },
        ],
        tagstitle: "Liste des languages utilisés pour réaliser ce projet",
        tags: [1, 2, 3],
        url: [
          { id: 1, url: "https://www.github.com/AeRogue666/", icon: "github" },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        id: 1,
        title: "Project 1",
        description: "A professionnal project created in enterprise",
        content:
          "A professionnal project created in the enterprise SomethingThing",
        dateCreatedText: "Created at",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Updated at",
        dateUpdated: "11-05-2024",
        for: "For",
        by: "By",
        client: "Client 1",
        employer: "Employer 1",
        images: [
          {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
            description: "An image",
            imageURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
          },
        ],
        tagstitle: "Languages list used for this project",
        tags: [1, 2, 3, 4, 7, 8],
        url: [
          { id: 1, url: "https://www.github.com/AeRogue666/", icon: "github" },
        ],
      },
      {
        id: 2,
        title: "Project 2",
        description: "A professionnal project created in enterprise",
        content:
          "A professionnal project created in the enterprise SomethingThing",
        dateCreatedText: "Created at",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Updated at",
        dateUpdated: "11-05-2024",
        for: "For",
        by: "By",
        client: "Client 2",
        employer: "Employer 2",
        images: [
          {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
            description: "An image",
            imageURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/03/Devicetemplates_computer-02.png",
          },
        ],
        tagstitle: "Languages list used for this project",
        tags: [1, 2, 3],
        url: [
          { id: 1, url: "https://www.github.com/AeRogue666/", icon: "github" },
        ],
      },
    ],
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
        content:
          "Création d'un site de recettes de cuisine avec ExpressJS et du CSS Natif pour la partie frontend, NodeJS et Directus + PostGreSQL pour la partie backend.",
        dateCreatedText: "Créé en",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Mis à jour en",
        dateUpdated: "11-05-2024",
        images: [
          {
            id: 1,
            url: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/Item_Frame_JE2_BE2.png",
            description: "Une image d'un item frame",
            imageURL:
              "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/Item_Frame_JE2_BE2.png",
          },
        ],
        tagstitle: "Liste des languages utilisés pour réaliser ce projet",
        tags: [1, 2, 3, 4, 5, 6, 7],
        url: [
          {
            id: 1,
            url: "https://www.github.com/AeRogue666/Project1-Recipes",
            icon: "github",
          },
        ],
      },
    ],
  },
  {
    code: "en-UK",
    data: [
      {
        id: 1,
        title: "",
        description: "",
        content: "",
        dateCreatedText: "Created at",
        dateCreated: "11-05-2024",
        dateUpdatedText: "Updated at",
        dateUpdated: "11-05-2024",
        images: [{ id: 1, url: "", description: "", imageURL: "" }],
        tagstitle: "Languages list used for this project",
        tags: [1, 2, 3, 4, 5, 6, 7],
        url: [
          {
            id: 1,
            url: "https://www.github.com/AeRogue666/Project1-Recipes",
            icon: "github",
          },
        ],
      },
    ],
  },
]);
/* Tags for Works/Projects pages */
export const tagsColorList = [
  { id: 1, title: "HTML", color: "red" },
  { id: 2, title: "CSS", color: "blue" },
  { id: 3, title: "JavaScript", color: "green" },
  { id: 4, title: "ExpressJS", color: "yellow" },
  { id: 5, title: "NodeJS", color: "gray" },
  { id: 6, title: "Directus", color: "blueviolet" },
  { id: 7, title: "PostGreSQL", color: "cornflowerblue" },
  { id: 8, title: "React", color: "dodgerblue" },
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
    quote: "",
    contactme: "Contact me",
    contact: "Contact",
    about: "About",
    faq: "Q/A",
    cv: [{ title: "Download my CV", url: "./files/cv_aureldev_en.pdf" }],
    pro: [
      {
        title: "Professionnal works",
        titleText: "Click me to see more professionnal works",
        more: "See more",
      },
    ],
    perso: [
      {
        title: "Personnal projects",
        titleText: "Click me to see more personnal projects",
        more: "See more",
      },
    ],
    notenoughtitle: "You haven't add enough",
    notenoughcontent: "Don't hesitate anymore and visite the following pages",
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
    contactme: "Me contacter",
    contact: "Contact",
    about: "A propos",
    faq: "FAQ",
    cv: [{ title: "Télécharger mon CV", url: "./files/cv_aureldev_fr.pdf" }],
    pro: [
      {
        title: "Projets professionnels",
        titleText:
          "Cliquez-moi dessus pour voir plus de projets professionnels",
        more: "Voir plus",
      },
    ],
    perso: [
      {
        title: "Projets personnels",
        titleText: "Cliquez-moi dessus pour voir plus de projets personnels",
        more: "Voir plus",
      },
    ],
    notenoughtitle: "Vous êtes encore là ",
    notenoughcontent: "Alors n'hésitez plus et visitez donc ces pages-ci ",
  },
]);
/* About page */
export const aboutList = reactive([
  {
    code: "fr-FR",
    title: "A propos",
    presentation:
      "Bonjour, je suis Aurélien GASNIER, développeur web junior de 25 ans, habitant en Ardèche mais parfaitement mobile et disponible.",
    picture:
      "Portrait d'Aurélien GASNIER, auteur de ce portfolio, réalisé en CSS.",
    children: [
      {
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
      },
      {
        children: [
          {
            content:
              "Je suis propriétaire de deux handicaps, Dysgraphie et Dyspraxie, et j'en ai fait une force.",
          },
          {
            content:
              "Récemment diplômé mais ambitieux et motivé, je me suis découvert une appétence pour l'UX/UI, l'Accessibilité et post-formation, pour l'animation CSS.",
          },
          {
            content:
              "Je suis passionné par l'Astronomie, l'Astrophoto, les livres (un véritable rat de bibliothèque, 100% pur livre), les jeux vidéos, la robotique, les nouvelles technologies et idées novatrices.",
          },
        ],
      },
      {
        children: [
          {
            content:
              "Je fais ce que je fais parce que j'aime ce que je fais. J'ai toujours adoré interagir avec les autres et parler de mes passions, de ce que je créé.",
          },
          {
            content:
              "J'aimerai, avec mon travail, faire du web un endroit plus agréable pour tous et surtout pour les personnes en situation de handicap.",
          },
          {
            content:
              "En espérant que nous nous croiserons au détour d'un carrefour et que nous pourrons, ensemble, faire de ce monde un meilleur endroit.",
          },
        ],
      },
    ],
    contact: "Me contacter",
    dltitle: "Télécharger le CV",
    dlurl: "./files/cv_aureldev_fr.pdf",
    opentitle: "Ouvrir le CV dans la page",
    openurl: "cv_aureldev_fr",
    pagetitle: "Ouvrir le CV dans un nouvel onglet",
    pageurl: "./files/cv_aureldev_fr.pdf",
  },
  {
    code: "en-UK",
    title: "About",
    presentation:
      "Hello, I am Aurélien GASNIER, a web developer, 25 years, living in Ardèche (France), but totally mobile and available.",
    portrait: "Picture of Aurélien GASNIER, portfolio author, maked with CSS.",
    children: [
      {
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
      },
      {
        children: [
          {
            content:
              "I am the owner of two handicaps called Dysgraphia and Dyspraxia, and I turned that in a strenght.",
          },
          {
            content:
              "Recently graduated but ambitious and motivated, I discovered an appetite for UX/UI, Accessibility, and post-graduate, for CSS animation.",
          },
          {
            content:
              "I am passionate about Astronomy, Astrophotography, books (a true bookworm, 100% pure book), video games, robotic, new technologies and innovative ideas.",
          },
        ],
      },
      {
        children: [
          {
            content:
              "I do what I do because I love what I do. I love interacting with others and I've always loved talking about my passions and what I do.",
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
      },
    ],
    contact: "Contact me",
    dltitle: "Download CV",
    dlurl: "./files/cv_aureldev_en.pdf",
    opentitle: "Open the CV in the page",
    openurl: "cv_aureldev_en",
    pagetitle: "Open the CV in a new page",
    pageurl: "./files/cv_aureldev_en.pdf",
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
          { title: "Projets personnels", icon: "pen", url: "/projects" },
          { title: "Projets professionnels", icon: "user", url: "/works" },
          { title: "Contact", icon: "contact-card", url: "/conact" },
          { title: "A propos", icon: "user", url: "/a-propos" },
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
          { title: "Personnal projects", icon: "pen", url: "/projects" },
          { title: "Professionnal works", icon: "user", url: "/works" },
          { title: "Contact", icon: "contact-card", url: "/contact" },
          { title: "About", icon: "user", url: "/about" },
        ],
      },
    ],
  },
]);
/* 
    {id:1, title:'', description:'', content:'', dateCreatedText:'', dateCreated:'', dateUpdatedText:'', dateUpdated:'', 
        images:[
            {id:1, url:'', description:'', imageURL:''}
        ], 
        tagstitle:'',
        tags:[
            {id:1, title:'', color:''}
        ],
        url:[
            {id:1, url:'', icon:''}
        ]
    },
*/