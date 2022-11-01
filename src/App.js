import "./App.css";
// import { useRef, useEffect } from "react";
import Share from "./share button.png";
import threeDot from "./3 dot.png";
import myPic from "./my-pic.jpeg";
import Body from "./body.js";
import Slack from "./slack.png";
import gitHub from "./Icon.png";
import Footer from "./footer.js";

function App() {
  // const ref = () => useRef(null);
  // useEffect(() => {
  //   const handleClick = (event) => {
  //     console.log("Button Clicked");
  //   };
  //   const element = ref.current;
  //   element.addEventListener("click", handleClick);
  //   return () => {
  //     element.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div className="App mt-8">
      <div className=" hidden md:block absolute right-48 top-6 ">
        <img src={Share} alt="" />
      </div>

      <div className=" block md:hidden absolute right-6 sm:right-16 top-6 ">
        <img src={threeDot} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          id="profile-img"
          src={myPic}
          alt="profile"
          className="w-20 md:w-28 h-auto m-6 rounded-full"
        />
        <h4 className=" text-lg md:text-xl font-bold">YUSUF a ADETUNJI</h4>
      </div>

      <Body />

      <div className="flex m-3 mt-6 justify-center items-center">
        <img src={Slack} alt="Slack logo" className="m-3" />
        <img src={gitHub} alt="github icon" className="m-3" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
