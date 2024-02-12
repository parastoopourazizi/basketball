import React from 'react'
import { Link } from "react-router-dom";
import DeleteImages from './DeleteImages';
import EditImages from './EditImages';
import AddImages from './AddImages';


function ImagesPanel() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/4 p-5 bg-gray-800 text-gray-50">
        <Link to={"/admin/news"}>
          <button className="w-full p-3 border-b-2 text-right">News</button>
        </Link>
        <Link to={"/admin/images"}>
          <button className="w-full p-3 border-b-2 text-right">Images</button>
        </Link>
      </div>
      <div className="w-3/4 p-5 bg-gray-50 text-gray-800 ">
        <div className="flex">
          <div className="w-1/2 p-5">
            <AddImages />
          </div>
          <div className="w-1/2 p-5">
            <EditImages />
          </div>
        </div>
        <div>
          <DeleteImages />
        </div>
      </div>
    </div>
  )
}

export default ImagesPanel