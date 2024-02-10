import Navbar from "../components/Navbar/Navbar";

function Members() {
  return (
    <div>
      <Navbar />
      <h2 className="text-center font-bold text-2xl">بسکتبال بوشهر</h2>
      <div className="container mx-auto">
        <div className="flex grid-cols-2 justify-center">
        <div className="shrink w-64 h-14 ">
            اعضای کمیته
        </div>
        <div className="flex-none w-14 h-14">hi</div>

        </div>
        
      </div>
    </div>
  );
}

export default Members;
