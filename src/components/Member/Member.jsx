import member from "../../assets/images/member.png";
function Member(props) {
  return (
    <div>
        
      <div className=" flex  justify-center  py-8">
        <img src={props.image} alt=""/>
        <div>
          <h2 className="text-base"> {props.full_name}  </h2>
          <p className="text-sm text-gray-500">
            {props.context}
          </p>
          <div>{props.created_at}</div>
          <div>{props.updated_at}</div>
        </div>
      </div>
    </div>
  );
}

export default Member;
