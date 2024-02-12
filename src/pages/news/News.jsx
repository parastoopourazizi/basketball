import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewItem from "../../components/new/NewItem";
import axios from "axios";

function News() {
  useEffect(() =>{
    axios

  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="container grid grid-cols-3 ">
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
        </div>
        <button>بیشتر</button>
      </div>
    </div>
  );
}

export default News;
