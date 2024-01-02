import Card from "./Card";

/* eslint-disable react/prop-types */
export default function Section({ item }) {
  return item ? (
    <div className="lg:min-h-[80vh] space-y-10 flex justify-center flex-col items-center md:px-20 text-zinc-700 w-full font-Poppins text-center p-10">
      <h1 className="text-4xl font-semibold ">
        {item && item.title ? item.title : ""}
      </h1>
      <h2 className="font-medium text-2xl text-zinc-600">{item.heading}</h2>
      {item.content.map((item, index) => (
        <p className=" text-zinc-500" key={index}>
          {item}
        </p>
      ))}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10  justify-center items-center">
        {item.subcontent.map((content, index) => (
          <Card key={index} content={content} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
