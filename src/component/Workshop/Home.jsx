import { useEffect } from "react";
import Content from "./Content";
import Course from "./Course";
import Expertise from "./Expertise";
import Hero from "./Hero";
import Registration from "./Registration";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Course />
      <Content />
      <Expertise />
      <Registration />
    </div>
  );
}
