import './App.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
      pages: ['Home', 'About Me', 'Projects', 'Contact'],
    }
  }

  handleClick(page) {
    this.setState({
      page: page,
    });
  }

  render() {
    const currentpage = this.state.page;

    return (
      <div className='App' >
        <Header
          value={this.state.pages}
          onClick={(p) => this.handleClick(p)}
        />
        <div className='App-body'>
          <Appbody
            name={currentpage}
          />
        </div>
      </div>
    );
  }
}

class Appbody extends React.Component {

  content(name) {
    switch (name) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />
      case "Projects":
        return <Projects />
      case "Contact":
        return <Contact />
    }
  }

  render() {
    return (
      <div>
        {this.content(this.props.name)}
      </div>
    );
  }
}

function Header(props) {
  return (
    <div className='App-header'>
      <h1>Jan-Philipp Andresen - Software Developer</h1>
      {props.value.map((value) =>
        <Links
          value={value}
          onClick={() => props.onClick(value)}
          key={value}
        />
      )}
    </div>
  );
}

function Links(props) {
  return (
    <span key={props.value} className='App-click' onClick={props.onClick}>
      {props.value}
    </span>
  );
}

function Home() {
  return (
    <div>Hi, on this page you will find something about me and my projects. Have fun while exploring it</div>
  );
}

function AboutMe() {
  return (
    <div>
      <h3>About Me</h3>
      <article>
        <p>My name is Philipp and i'm living in Harrislee near Flensburg in the north of Germany directly on the danish border.</p>
        <p>I worked as a Network Administrator for 6 years. Then i decided to continue my education and started studying applied computer science on Flensburg university of applied sciences.</p>
        <p>During the studies i learned a lot about software developing and get more and more interested in it. From all concepts of programming i like most functional programming.</p>
        <p>My Portfolio of Programming languages and Technologies are:</p>
        <ul>
          <li>Java</li>
          <li>Java EE</li>
          <li>Kotlin</li>
          <li>KTOR</li>
          <li>Exposed</li>
          <li>Compose</li>
          <li>Android</li>
          <li>Go</li>
          <li>Haskell</li>
          <li>Elm</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>C#</li>
          <li>Delphi</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Unity 3D</li>
          <li>git</li>
          <li>Maven</li>
          <li>Gradle</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>WPF</li>
        </ul>
        <p>Today i work as a Software and Full Stack Web developer</p>
      </article>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <div>
        <article>
          <p>During my studies and carrer i developed a few projects. </p>
          <p>The Projects the list below you can have a look to it.</p>
          <ul>
            <li><a href='https://github.com/Phillemove/minesweeper'>Minesweeper Game</a></li>
            <li><a href='https://github.com/Phillemove/viergewinnt'>Four in a Row Game</a></li>
            <li><a href='https://github.com/Phillemove/twitterwall'>Twitterwall Web Application</a></li>
            <li><a href='https://github.com/Phillemove/Lernkartenapp'>Learning Card App</a></li>
            <li><a href='https://github.com/Phillemove/planningtool'>Calendar and Contact Management Application</a></li>
            <li><a href='https://github.com/Phillemove/elearning-plattform'>ELearning Plattform</a></li>
            <li><a href='https://github.com/Phillemove/FoodFacts'>Food Facts Application</a></li>
            <li><a href='https://github.com/Phillemove/snake'>Snake Game</a></li>
            <li><a href='https://github.com/Phillemove/OpenAPIGenerator'>Open API Generator</a></li>
          </ul>
          <p>As Semester Project i was part of a developing Team for a java linter made with haskell programming language.</p>
          <p>As Bachelor Thesis project i designed and programmed an openapi-code generator for ktor server applications. This generator is completly written in kotlin code.</p>
        </article>
      </div>
    </div>
  );
}

function Contact() {
  const [state, handleSubmit] = useForm("xoqbbwjz");
  if (state.succeeded) {
    return <p>Thank you for your Request</p>;
  }
  return (
    <div>
      <h3>Contact Me</h3>
      <p>If you have any Questions or need Help realizing your Project Idea, you can contact me here</p>
      <form onSubmit={handleSubmit} className="Contact">
        <label htmlFor="email" className='Label' id='labelEmail'>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className='Email'
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <br />
        <label htmlFor='message' className='Label' id='labelMessage'>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className='Message'
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" disabled={state.submitting} className="Button">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
