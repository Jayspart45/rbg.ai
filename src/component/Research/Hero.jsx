import { Link } from "react-router-dom";
import { FaLinode } from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import { FaLanguage } from "react-icons/fa";
export default function Hero() {
  const data = [
    {
      title: "Floor-Plan-Detection",
      content: "floor plan object detection with super resolution",
      link: "",
      node: (
        <FaLinode
          style={{ fontSize: "10rem", margin: "auto", color: "#444" }}
        />
      ),
    },
    {
      title: "MFR",
      content: "Zero-shot Machine Feature Retrieval",
      link: "",
      node: (
        <ImCogs style={{ fontSize: "10rem", margin: "auto", color: "#444" }} />
      ),
    },
    {
      title: "CoRePooL",
      content: "Corpus for resource poor language",
      link: "",
      node: (
        <FaLanguage
          style={{ fontSize: "10rem", margin: "auto", color: "#444" }}
        />
      ),
    },
  ];

  return (
    <div className="py-10 text-center">
      <div className="font-Poppins space-y-5 md:space-y-10">
        <h1 className="text-xl md:text-5xl font-bold text-zinc-700">
          Research Contributions
        </h1>
        <h2 className="text-md md:text-2xl text-zinc-600">
          Structuring the Unstructured
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-20  gap-5">
          {data.map((item, index) => (
            <li
              className=" rounded shadow md:shadow-lg flex flex-col  p-5 md:p-10"
              key={index}
            >
              {item.node}
              <h1 className="md:text-2xl font-semibold">{item.title}</h1>
              <div className="p-5 flex-1 font-Poppins">{item.content}</div>
              <Link to={item.link}>
                <span className="text-blue-100 bg-blue-600 px-4 py-2 rounded shadow">
                  Know More
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
