import Section from "./Section";
import Slider from "./Slider";
import data from "./Json/data";
import Clients from "./Clients";
import Header from "../Header";
export default function Home() {
  return (
    <>
      <Header />

      <Slider />
      {data.map((item, index) => (
        <Section item={item} key={index} index={index} />
      ))}
      <Clients />
    </>
  );
}
