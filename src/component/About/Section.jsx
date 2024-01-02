/* eslint-disable react/prop-types */
export default function Section({ data }) {
  return data ? (
    <>
      <h1 className="text-center font-Poppins capitalize font-bold text-zinc-700 text-2xl md:text-4xl my-10">
        {data.title}
      </h1>
      <div className="max-w-9xl mx-auto grid-cols-1 md:grid-cols-3 grid my-10 gap-10">
        {data.data.map((item, index) => (
          <div key={index} className=" font-Poppins flex flex-col text-center">
            <img
              src={item.img}
              className="object-cover flex-1 rounded-full w-[8rem] h-[8rem] mx-auto"
              alt=""
            />
            <h1 className="text-md md:text-xl font-semibold">{item.name}</h1>
            <p className="text-sm md:text-lg">{item.role}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <></>
  );
}
