import axios from "axios";
import React, { useState } from "react";

function AddImages() {
  const [imageUrl, setImageUrl] = useState("");
  const [context, setContext] = useState("");

  const addHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://bushehrbasketball.pythonanywhere.com/basketball/images/", {
        
        context: context
      })
      .then((res) => console.log(res));
  };

  return (
    <form
      onSubmit={addHandler}
      className="border rounded-lg p-5 bg-gray-800 text-gray-50"
    >
      <h3 className="text-2xl">اضافه کردن عکس</h3>
      <div className="flex flex-col my-4">
        <label>عکس</label>
        <input
          type="text"
          placeholder="آدرس اینترنتی عکس"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="p-2 mt-1 rounded-lg text-gray-800 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label>متن</label>
        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          cols="30"
          rows="10"
          className="p-2 mt-1 rounded-lg text-gray-800 outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gray-50 text-gray-800 text-lg p-2 mt-5 w-40 rounded-lg"
      >
        افزودن
      </button>
    </form>
  );
}

export default AddImages;
