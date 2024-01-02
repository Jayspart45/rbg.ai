import {
  BDO,
  mangalam,
  ministry,
  technomile,
  tera,
  amrita,
  aws,
  nvidia,
  cdii,
  spark,

  //   MicrosoftForStartups,
} from "../../assests/partners/index";
export default function Clients() {
  return (
    <div className="px-10 py-5">
      <h1 className="text-center font-semibold mb-5 font-Poppins text-3xl text-zinc-700">
        Clients
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 space-y-4 md:space-x-0 items-center justify-items-center">
        <img src={BDO} className="w-32" alt="" />
        <img src={mangalam} className="w-32" alt="" />
        <img src={ministry} className="w-32" alt="" />
        <img src={tera} className="w-32" alt="" />
        <img src={technomile} className="w-32" alt="" />
      </div>
      <h1 className="text-center font-semibold my-5  font-Poppins text-3xl text-zinc-700">
        Accelerators
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center">
        <img src={amrita} className="w-32" alt="" />
        <img src={aws} className="w-32" alt="" />
        <img src={nvidia} className="w-32" alt="" />
        <img src={cdii} className="w-32" alt="" />
        <img src={spark} className="w-32" alt="" />
      </div>
    </div>
  );
}
