import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles/';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import shaqImage from '../../assets/shaq-startscreen.png';
import pubImage from '../../assets/homepage-image.jpeg';
import cinemapImage from '../../assets/cinemap-home.png';
import songToFilmImage from '../../assets/song-to-film-homepage.png';

const work = [
  {
    id: 1,
    // eslint-disable-next-line quotes
    name: "Shaq's Free Throw Nightmare - Solo 7 Days",
    image: shaqImage,
    live: 'https://jdeering94.github.io/Shaq-s-Free-Throw-Nightmare/',
    repo: 'https://github.com/jdeering94/Shaq-s-Free-Throw-Nightmare',
    description:
      'Our brief was to build a grid-based game using HTML, CSS, and JavaScript over the course of a week. This was a solo project, and I decided to model mine off of the classic Space Invaders, and decided it was an opportunity to have fun with the styling to create a basketball themed version. ',
  },
  {
    id: 2,
    name: 'Pub Quiz Generator - Duo 48hrs',
    image: pubImage,
    live: 'https://pub-quiz-generator-ga-sei62.netlify.app/',
    repo: 'https://github.com/jdeering94/Pub-Quiz-Generator',
    description:
      'Built using React and a public trivia API from API Ninjas. Paired up, we had 48 hours to make a working front end for an available API. We decided to make a quiz generator from an API that has access to a large number of questions. We split up the responsibilities, working on both SCSS and API integration using React.',
  },
  {
    id: 3,
    name: 'Cinemap - Trio 7 Days',
    image: cinemapImage,
    live: 'https://cinemap.netlify.app/',
    repo: 'https://github.com/jdeering94/cinemap-api',
    description:
      'We were tasked with building a fullstack MERN app, and we decided to build an app that would categorise world cinema by origin. I worked on both the frontend and backend, making use of Node and React for the frontend, and built the API using MongoDB and express. The styling was done using Bulma.',
  },
  {
    id: 4,
    name: 'Song to Film - Solo 7 Days',
    image: songToFilmImage,
    live: 'https://song-to-film.netlify.app/',
    repo: 'https://github.com/jdeering94/song-to-film-api',
    description:
      'The brief was to build a fullstack app using Django for the API, and React for the frontend. The styling was a combination of Tailwind and Material UI. I decided to build a site that would allow users to search for songs used in films, and display the usage of each song for the film it was in, and in addition add their own song and film choices. ',
  },
];

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
  },
  typography: {
    fontFamily: ['baskerville'],
  },
});

const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-around font-baskerville" id="projects">
        <h1 className="m-10 p-10 text-4xl py-36">Projects</h1>
        <Splide
          aria-labelledby="Sample Projects"
          options={{
            rewind: true,
            width: 800,
            height: 600,
            interval: 4000,
            autoplay: true,
            perMove: 1,
            type: 'fade',
            pauseOnHover: true,
          }}
        >
          {work.map((project) => (
            <SplideSlide key={project.id}>
              <Card sx={{ maxWidth: 700 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">
                    <a href={project.live}>Live</a>
                  </Button>
                  <Button size="large">
                    <a href={project.repo}>Repo</a>
                  </Button>
                </CardActions>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </ThemeProvider>
  );
};

export default Projects;
