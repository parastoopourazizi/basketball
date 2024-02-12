import axios from "axios";
import React, { useState } from "react";

function DeleteImages() {

  const [id , setId] = useState('')

  const deleteHandler = (e) => {
    e.preventDefault()
    axios.delete(`https://bushehrbasketball.pythonanywhere.com/basketball/images/${id}/`)
    .then(res => console.log(res))
  }

  return (
    <form onSubmit={deleteHandler} className="flex items-center justify-between bg-gray-800 p-5 mx-5 rounded-lg text-gray-50">
      <h3 className="text-2xl text-red-500">حذف کردن عکس</h3>
      <div>
        <label>آیدی عکس</label>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="py-1 px-2 outline-none rounded-lg mr-1 text-gray-800"
        />
      </div>
      <button type="submit" className="bg-gray-50 text-red-500 text-lg p-2 w-40 rounded-lg">
        حذف عکس
      </button>
    </form>
  );
}

export default DeleteImages;
