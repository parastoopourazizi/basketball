import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewItem from "../../components/new/NewItem";
import axios from "axios";

function News() {
  const [article , setArticle] = useState({
    id : "",
    image : "",
    context : "",
    created_at : "",
    updated_at : "",
  });

  useEffect(() =>{
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
            <NewItem {...article}/>
          ))}
        </div>
        <button>بیشتر</button>
      </div>
    </div>
  );
}

export default News;
