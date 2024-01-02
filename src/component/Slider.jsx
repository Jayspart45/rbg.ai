/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
export default function Slider({ data }) {
  return data ? (
    <div className="bg-gray-800   h-64 md:h-[40vh] 2xl:h-[50vh]  text-md   text-center font-Poppins text-zinc-100">
      <Carousel color="primary">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center space-y-5 flex-col items-center"
          >
            <p className="max-sm:text-sm text-zinc-300">
              Venue{" "}
              <span className="font-semibold text-zinc-100">{item.venue}</span>
            </p>
            <p className="max-sm:text-sm text-zinc-300">
              Date{" "}
              <span className="font-semibold text-zinc-100">{item.Date}</span>
            </p>
            <img src={item.img} alt="" className="w-1/3 md:w-1/3" />

            <Link to={item.link}>
              <span className=" max-md:text-sm text-blue-100  bg-blue-600 px-4 py-2 rounded shadow">
                Know More
              </span>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  ) : (
    <></>
  );
}
