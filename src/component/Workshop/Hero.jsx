export default function Hero() {
    return (
      <div className="font-Inter flex-col w-full max-w-full flex items-center  mb-5">
        <div className="p-10 w-full rounded text-center">
          <h1 className=" font-bold text-5xl my-10 text-zinc-700">
            LLM Unleashed: Igniting Careers, Transforming Business
          </h1>
          <p className="text-xl font-medium px-5 font-Poppins text-zinc-700">
            Unlocking the Potential of OpenAI, Embracing Open Source LLMs,
            Mastering Prompt Engineering, Crafting your own LLM & Building
            Intelligent Applications
          </p>
        </div>
  
        <span className="font-Poppins font-bold text-3xl text-zinc-700  my-10">
          Dates & Venue
        </span>
        <p className="text-md flex flex-col mb-5 text-center font-medium text-zinc-500">
          <span>January 08 - 12, 2024</span>
          <span>SREC SPARK Incubation Foundation,</span>
          <span>Sri Ramakrishna Engineering College Campus,</span>
          <span>Vattamalaipalayam,Coimbatore, Tamil Nadu. </span>
        </p>
      </div>
    );
  }
  