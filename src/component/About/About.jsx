import Header from "../Header";
import Section from "./Section";
import { advisory, research, practitioner} from "./members";

export default function About() {
  const data = [
    { title: "Advisory Board", data: advisory },
    { title: "Research Executives", data: research },
    { title: "practitioner", data: practitioner },
    // { title: "members", data: members },
  ];

  return (
    <div>
      <Header />
      {data.map((item, index) => (
        <Section key={index} data={item} />
      ))}
    </div>
  );
}
