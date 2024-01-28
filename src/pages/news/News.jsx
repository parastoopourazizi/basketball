import Navbar from "../../components/Navbar/Navbar";
import NewItem from "../../components/new/NewItem";


function News() {
  return (
    <div>
      <div className=" flex mb-4">
      <Navbar />
      <NewItem/>
      <NewItem/>
      <NewItem/>
      <NewItem/>

      </div>
      
      
    </div>
  );
}

export default News;
