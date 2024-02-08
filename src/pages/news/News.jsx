import Navbar from "../../components/Navbar/Navbar";
import NewItem from "../../components/new/NewItem";

function News() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container  flex grid grid-cols-3 ">
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
