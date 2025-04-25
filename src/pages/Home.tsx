import React from "react";
import Intro from '../components/Intro';
import ProjectCard from '../components/ProjectCard';
// import ConferenceTalk from '../components/ConferenceTalk';
import './Home.css';

const Home = () => {
    const projects = [
        {
            title: 'PilotHelper',
            subTitle: 'Secure chat application for pilots',
            imageUrl: '../assets/PilotHelper.png',
            link: 'https://www.pilothelper.com',
            description: 'PilotHelper is a secure chat application designed to support pilots with real-time assistance. It features a custom GPT-powered AI assistant for contextual responses, MongoDB for message storage, and RESTful APIs for seamless data management. This project showcases expertise in state management, responsive UI design, and secure communication protocols.',
            codeLink: ''
        },
        {
            title: 'Vtraxx',
            subtitle: 'Spotify Top Track Generator',
            imageUrl: 'images/Vtraxx.jpg',
            link: 'https://vtraxx.herokuapp.com',
            description: 'I created this app using Spotify\'s API combined with Node.js and javascript. After asking for the user\'s Spotify login, it gathers their most recent top 10 and displays it on a cassette tape. Originally this generated 10 tracks but I reduced it to 5 for now so I could increase the font and make the tracks easier to read. This project is important to me because I learned JavaScript as well as how to implement APIs.',
            codeLink: 'https://github.com/LeonardHawkes/vtraxx'
          },
          {
            title: 'Covid-19 Tracker',
            subtitle: 'Coronavirus worldwide Cases',
            imageUrl: 'images/Covid-19.jpg',
            link: 'https://covid-2021-tracker.herokuapp.com',
            description: 'I created this program using Java and Spring Framework. The application collects the raw global Covid-19 cases and displays it as a readable table. This project was interesting because I learned how to implement Spring into my Java code and utilizing Java 12 to host java applications on the internet.',
            codeLink: 'https://github.com/LeonardHawkes/coronavirus-tracker'
          },
          {
            title: 'Snake',
            subtitle: 'Snake clone created in Java',
            imageUrl: 'images/SnakeGame.gif',
            link: '',
            description: 'I created this in Java using Javax and implementing listeners. The user moves the snake with the arrow keys. I used a for loop to increase the snake\'s size when it consumes the pixel and created a score method to increment as you collect pixels. I created collision detection for each side of the border(up, down, left, right) and also created a collision if the head of the snake touches any of the other body parts.',
            codeLink: 'https://github.com/LeonardHawkes/Snake'
          },
          {
            title: 'Flappy Bird',
            subtitle: 'Flappy Bird clone created in Java',
            imageUrl: 'images/FlappyBird.gif',
            link: '',
            description: 'I created this in Java using Javax and implementing listeners. The user moves the bird by clicking or they can use the spacebar. The game will continue indefinitely and will continue generating random pipes as obstacles. Since Chrome doesn\'t support Java Applications anymore I recorded some gameplay and converted said gameplay into a gif to demonstrate all the features.',
            codeLink: 'https://github.com/LeonardHawkes/FlappyBirdJava'
          },
          {
            title: 'Java Quiz',
            subtitle: '10 Question Java Quiz',
            imageUrl: 'images/OnlineTest.gif',
            link: '',
            description: 'I created this in Javax swing and awt to create a JFrame and implementing listeners. I use array instead of a database so it doesn\'t require as much memory. This also cannot be run through HTML so I recorded myself running the application and converted it into a gif to demonstrate the questions available in the app.',
            codeLink: 'https://github.com/LeonardHawkes/JavaTest'
          }
        ];
      
        return (
            <div id="main">
              <Intro />
              
              {/* Featured Conference Talk */}
              {/* <ConferenceTalk /> */}
              
              {/* Featured Post */}
              <article className="post featured">
                <header className="major">
                  <h2>
                    <a href="https://www.linkedin.com/in/leonardhawkes/">My name is Leonard Hawkes</a>
                  </h2>
                  <p>
                    I'm a passionate developer, but more importantly I'm passionate
                    about technology. This website is meant to showcase my skills and aptitude.
                  </p>
                </header>
              </article>
        
              {/* Projects Section */}
              <section className="posts">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </section>
            </div>
          );
};

export default Home;