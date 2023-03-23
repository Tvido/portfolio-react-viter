const portfolioData = [
  {
    id: 11,
    title: "Liceum 20",
    description:
      "Lyceum SPA-site. Maximum variety of different components. Dynamic creation of Routs. A large number of partitions, which are perfectly optimized for maximum performance, even with complex nesting. The site is prepared for the possibility of putting it on the back-end in the future.",
    codeLink: "https://github.com/Tvido/liceum20",
    demoLink: "https://liceum20.com.ua/",
    picture: "https://i.ibb.co/JBpyny2/2.jpg",
    type: ["React.JS", "All"],
  },
  {
    id: 21,
    title: "Photographer Portfolio Site",
    description:
      "Photographer's portfolio site. Implemented navigation through sections with fully responsive for different devices. UA-US language change and dark-light theme change on JavaScript. Ability to send a completed feedback form with validation. Galleries realized by Wsiper.js.",
    codeLink: "https://github.com/Tvido/boyko",
    demoLink: "https://tvido.github.io/boyko/",
    picture: "https://i.ibb.co/tmNTmDk/5.jpg",
    type: ["HTML/CSS/JS", "All"],
  },
  {
    id: 31,
    title: "Green City | Collaboration",
    description:
      "Eco-project. The main tasks of the project were to resolve tasks with input fields, UI/UX bugs.",
    codeLink: "https://github.com/ita-social-projects/GreenCityClient/",
    demoLink: "https://www.testgreencity.ga/#/greenCity",
    picture: "https://i.ibb.co/ZcQPPPR/1.jpg",
    type: ["Angular", "All"],
  },
  {
    id: 41,
    title: "Job Seeker Site",
    description:
      "Back-end for a job search site. Where different access rights have been developed for posting ads for the employer and the job-seeker. Implemented authentication, the ability to add, edit and delete items.",
    codeLink: "https://github.com/Tvido/refugees",
    demoLink: "#",
    picture:
      "data:image/jpeg;base64,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",
    type: ["Node.JS", "All"],
  },
  {
    id: 51,
    title: "Photoschool Site",
    description:
      "Website-presentation of photography school courses. There are used php-mailer and validation to send letters. Wsiper.js for gallery-portfolio. Change themes using Javascript. Animation using the ScrollReveal library. Including fully responsive for different devices.",
    codeLink: "https://github.com/Tvido/photoschool",
    demoLink: "https://tvido.github.io/photoschool/",
    picture: "https://i.ibb.co/m9HThF4/1.jpg",
    type: ["HTML/CSS/JS", "All"],
  },
  {
    id: 61,
    title: "Flight Data info | Collaboration",
    description:
      "Assistant for finding the most profitable flights. Collaboration. A map was developed using AmCharts5 with a substitution of the departure airport for the destination airports according to the data of popular air routes.",
    codeLink:
      "https://github.com/if137angular/if137angular/commits?author=Tvido",
    demoLink: "https://if137angular.github.io/if137angular/#/",
    picture: "https://i.ibb.co/WvTdM9Y/fdi.jpg",
    type: ["Angular", "All"],
  },
];

export default portfolioData;
