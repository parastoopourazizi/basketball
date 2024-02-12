import React from "react";

function DeleteNews() {
  return (
    <form className="flex items-center justify-between bg-gray-800 p-5 mx-5 rounded-lg text-gray-50">
      <h3 className="text-2xl text-red-500">حذف کردن خبر</h3>
      <div>
        <label>آیدی خبر</label>
        <input
          type="text"
          placeholder="id"
          className="py-1 px-2 outline-none rounded-lg mr-1 text-gray-800"
        />
      </div>
      <button className="bg-gray-50 text-red-500 text-lg p-2 w-40 rounded-lg">
        حذف خبر
      </button>
    </form>
  );
}

export default DeleteNews;
