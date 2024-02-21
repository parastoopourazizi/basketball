import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewItem from "../../components/new/NewItem";
import axios from "axios";

function News() {
  const [article, setArticle] = useState([]);
 

  useEffect(() => {
    axios
      .get("https://bushehrbasketball.pythonanywhere.com/basketball/news/")
      .then((response) => setArticle(response.data));
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="container  flex grid grid-cols-3 ">
          {article.map((article) => (
            <NewItem {...article} />
          ))}

         
        </div>
        <div className="text-center  py-10" >
        <button className=" border-2 border-inherit rounded-3xl py-1 px-12">بیشتر</button>

        </div>
        
      </div>
    </div>
  );
}

export default News;
