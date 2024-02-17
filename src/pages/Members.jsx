import Navbar from "../components/Navbar/Navbar";
import Member from "../components/Member/Member";

function Members() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-5xl font-bold">بسکتبال بوشهر</h2>
      <h1 className="text-3xl">اعضای کمیته</h1>
      <div className=" grid grid-cols-10 gap-4 mx-auto max-w-[1280px] sm:230px">
        <div className="col-span-8  ">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
         
        </div>

        <div className="col-span-2 text-3xl ">لینک ها</div>
      </div>
      <div className="text-center">
      <button className="  border-2 border-inherit rounded-3xl py-1 px-12">بیشتر</button>

      </div>
      
      
    </div>
  );
}

export default Members;
