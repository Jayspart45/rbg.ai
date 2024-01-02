import Slider from "../Slider";
import img1 from "../../assests/Programs/llm.svg";
import img2 from "../../assests/Programs/medicalAi.svg";
import img3 from "../../assests/Programs/essentialAi.svg";
const data = [
  {
    venue: "Amrita Campus, Coimbatore",
    Date: "20 & 21, April 2022",
    img: img1,
    link: "/llm",
  },

  {
    venue: "Amrita Campus, Coimbatore",
    Date: "20 & 21, April 2022",
    img: img2,
    link: "",
  },
  {
    venue: "Amrita Campus, Coimbatore",
    Date: "20 & 21, April 2022",
    img: img3,
    link: "",
  },
];

export default function Workshop() {
  return (
    <div className="w-full ">
      <Slider data={data} />
    </div>
  );
}
