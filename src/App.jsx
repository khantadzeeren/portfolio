import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo1 from "./assets/images/Combined Shape.svg";
import Github1 from "./assets/images/github.svg";
import Github2 from "./assets/images/github2.svg";
import Linkedin from "./assets/images/linkedin.svg";
import Linkedin2 from "./assets/images/linkedin2.svg";
import AdviceGenerator from "./assets/images/advice generator.png";
import Dictionary from "./assets/images/dictionary.png";
import Dictionary1 from "./assets/images/dictionary2.png";
import TicTac from "./assets/images/tic-tac-toe2.png";
import TicTac1 from "./assets/images/tic-tac-toe1.png";
import calculator from "./assets/images/tipcalculator.png";
import todo from "./assets/images/todo.png";
import todo1 from "./assets/images/todo1.png";
import logo2 from "./assets/images/Combined Shape 2.svg";


function App() {
  return (
    <div className="main">
      <div className="top">
        <img src={Logo1} alt="" />

        <div>
          <a href="https://github.com/khantadzeeren">
            <img src={Github2} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/saba-khantadze-710870273/">
            <img className="img1" src={Linkedin2} alt="" />
          </a>
        </div>
      </div>

      <div className="proj1">
        <img className="advice" src={AdviceGenerator} alt="" />

        <div className="text1">
          <h1>Advice Generator</h1>
          <p className="description1">
            {" "}
            This application is designed to provide users with randomly
            generated advice each time they click the "dice" button. It was
            developed using cutting-edge technologies such as React, HTML, CSS,
            and API integration to ensure a seamless user experience. The use of
            these advanced tools allows the application to provide users with a
            dynamic and engaging experience, while also ensuring that the advice
            they receive is relevant and useful. The end result is a polished
            and elegant application that delivers an advice to users with every
            click of the button.
          </p>
          <div>
            <a href="https://advice-generator-six-zeta.vercel.app/">
              <button className="btn1">VIEW PROJECT</button>
            </a>
          </div>
        </div>
      </div>
      <div className="proj2">
        <div className="text2">
          <h1>Dictionary</h1>
          <p className="description2">
            This elegantly designed dictionary app is built using the latest
            technologies, including React, HTML, CSS, and API integration, to
            deliver a seamless user experience. With a sleek interface and
            intuitive design, the app allows you to quickly and easily search
            for any word and access its definition, along with other useful
            information such as synonyms, antonyms, and example sentences. One
            of the standout features of this app is its audio input
            functionality, which enables you to hear the pronunciation of words,
            making it easier to learn and remember them. The app's extensive
            database ensures that you have access to a vast array of words,
            including many obscure ones that you may not find in other
            dictionaries. Whether you're a student, a professional, or simply
            someone who enjoys learning new words, this app is an invaluable
            tool that will enrich your vocabulary and help you communicate more
            effectively. With its advanced features and elegant design, it's no
            wonder that this dictionary app is a top choice for users around the
            world.In addition to its powerful features and elegant design, this
            dictionary app also offers a customizable interface that allows you
            to switch between light and dark modes, depending on your
            preference. Whether you prefer a sleek and modern dark mode or a
            bright and refreshing light mode, this app has you covered.
          </p>
          <a href="https://dictionary-web-app-topaz.vercel.app/">
            <button className="btn1">VIEW PROJECT</button>
          </a>
        </div>

        <div className="imgs">
          <img className="img2" src={Dictionary} alt="" />
          <img className="img3" src={Dictionary1} alt="" />
        </div>
      </div>
      <div className="proj3">
        <div className="imgs2">
          <img className="img4" src={TicTac} alt="" />
          <img className="img5" src={TicTac1} alt="" />
        </div>
        <div className="text3">
          <h1>Tic-Tac-Toe</h1>
          <p className="description3">
            This is an impressive implementation of Tic Tac Toe, featuring both
            a two-player mode and an option to play against the CPU. The game
            was built using JavaScript for its logic, and HTML and CSS for its
            visually appealing user interface. With its intuitive design and
            gameplay mechanics, players can enjoy hours of entertainment as they
            strive to outwit their opponent or the computer.
          </p>
          <a href="https://tic-tac-toe-nine-self.vercel.app/  ">
            <button className="btn1">VIEW PROJECT</button>
          </a>
        </div>
      </div>
      <div className="proj4">
        <div className="text4">
          <h1>Tip Calculator</h1>
          <p className="description4">
            This is a sophisticated Tip Calculator that takes into account
            multiple factors to accurately calculate the appropriate tip. Users
            can input the amount of their bill, select a percentage for the tip,
            and specify the number of people splitting the bill. The tool was
            developed using the programming languages of JavaScript, HTML, and
            CSS, resulting in a seamless and intuitive user interface.
          </p>
          <a href="https://tip-calculator-zeta-ashy.vercel.app/  ">
            <button className="btn1">VIEW PROJECT</button>
          </a>
        </div>
        <div className="imgs4">
          <img className="calc" src={calculator} alt="" />
        </div>
      </div>

      <div className="proj5">
        <div className="imgs5">
          <img className="img6" src={todo} alt="" />
          <img className="img7" src={todo1} alt="" />
        </div>
        <div className="text5">
          <h1>To-Do App</h1>
          <p className="description5">
            This is a task management application that allows users to
            effortlessly add or remove tasks, as well as mark them as complete
            or incomplete. It also offers filtering options for seamless
            organization of tasks. Additionally, users have the option to switch
            between light and dark themes, providing a personalized user
            experience. This application was developed using React, along with
            HTML and CSS to provide an aesthetically pleasing interface.
          </p>
          <a href="https://to-do-list-blond-gamma.vercel.app/  ">
            <button className="btn1">VIEW PROJECT</button>
          </a>

        </div>
      </div>
      <div className="bottom">
        <img src={logo2} alt="" />

        <div>
          <a href="https://github.com/khantadzeeren">
            <img src={Github1} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/saba-khantadze-710870273/">
            <img className="img1" src={Linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
