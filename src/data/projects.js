import euroImg from '../assets/projects/euro.gif';
import todoImg from '../assets/projects/todo.gif';
import shImg from '../assets/projects/short.gif';
import chatImg from '../assets/projects/chat.gif';
import portfolioImg from '../assets/projects/portfolio.gif';
import apiImg from '../assets/projects/api.png';

const projects = [
  {
    title: 'Euromillions Notify',
    description:
      'Get an email notification when the euromillions prize is above a pre-defined threshold. Parses XML data from Santa Casa and runs a cronjob before the bi-weekly drafts. ',
    stack: ['Typescript', 'React', 'Styled Components', 'NodeJS', 'Express', 'MongoDB', 'Jest'],
    image: euroImg,
    repo: 'https://github.com/nip10/todo-react-ts',
    demo: 'https://euronotify.diogocardoso.dev',
  },
  {
    title: 'URL Shortener',
    description: "Shorten url's with social sharing.",
    stack: ['Typescript', 'React', 'Styled Components', 'NodeJS', 'Express', 'MongoDB', 'Jest'],
    image: shImg,
    repo: 'https://github.com/nip10/todo-react-ts',
    demo: 'https://sh.diogocardoso.dev',
  },
  {
    title: "Todo's Manager",
    description: "Front-end for managing todo's.",
    stack: ['Typescript', 'React', 'Styled Components'],
    image: todoImg,
    repo: 'https://github.com/nip10/todo-react-ts',
    demo: 'https://todo.diogocardoso.dev',
  },
  {
    title: 'Todo api',
    description: "RESTful API for managing todo's.",
    stack: ['JavaScript', 'Typescript', 'NodeJS', 'Express', 'MongoDB', 'Jest'],
    image: apiImg,
    repo: 'https://github.com/nip10/todo-api',
    demo: 'https://api.todo.diogocardoso.dev',
  },
  {
    title: 'Chat',
    description: 'Simple chat webapp with Geolocation API.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'NodeJS', 'Express', 'SocketIO'],
    image: chatImg,
    repo: 'https://github.com/nip10/node-chat-app',
    demo: 'https://chat.diogocardoso.dev',
  },
  {
    title: 'Tvshow Manager',
    description:
      "Manage your favourite tvshows and discover new ones. Relies on the TheTVDB API to get tvshow's information.",
    stack: ['Pug', 'JavaScript', 'Sass', 'NodeJS', 'PostgreSQL', 'Express'],
    image: 'https://via.placeholder.com/500x300',
    repo: 'https://github.com/nip10/tvshows-manager',
    // demo: 'https://p.diogocardoso.dev/tsm',
  },
  {
    title: 'Telegram Bot',
    description:
      "A Telegram bot that provides weather information. Location can be manually inputted or using the device's location. Users can add locations as favourites for a better experience.",
    stack: ['Javascript', 'Express', 'NodeJS'],
    image: 'https://via.placeholder.com/500x300',
    repo: 'https://github.com/nip10/telegram-bot',
  },
  {
    title: 'Blog',
    description: 'A personal blog mostly about my areas of interest, namely: IoT, Automation, Web-Development.',
    stack: ['Javascript', 'React', 'Gatsby'],
    image: 'https://via.placeholder.com/500x300',
    repo: 'https://github.com/nip10/blog',
    demo: 'https://blog.diogocardoso.dev',
  },
  {
    title: 'Portfolio v2',
    description: 'This website. Built with Gatsby.',
    stack: ['JavaScript', 'React', 'Styled Components', 'Gatsby'],
    image: portfolioImg,
    repo: 'https://github.com/nip10/portfolio19',
    demo: 'https://diogocardoso.dev',
  },
  {
    title: 'Portfolio',
    description: 'Previous version of this website. SPA built with React and Styled Components.',
    stack: ['Typescript', 'React', 'Styled Components'],
    image: 'https://via.placeholder.com/500x300',
    repo: 'https://github.com/nip10/portfolio',
    // demo: 'https://diogocardoso.dev/old',
  },
];

export default projects;
