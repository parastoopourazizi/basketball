import Navbar from "../components/Navbar/Navbar";
import Member from "../components/Member/Member";

function Members() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center font-bold text-2xl">بسکتبال بوشهر</h2>
      <div className=" grid grid-cols-10 gap-4 mx-auto max-w-[1280px]   ">
        <div className="col-span-8  "> 
        <Member/>
        </div>
        <div className="col-span-2 ">hi</div>
      </div>
    </div>
  );
}

export default Members;
