import member from "../../assets/images/member.png";
function Member() {
  return (
    <div>
        
      <div className=" flex  justify-center">
        <img src={member} alt=""/>
        <div>
          <h2 className="text-base">نام و نام خانوادگی</h2>
          <p className="text-sm text-gray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Member;
