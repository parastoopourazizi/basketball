import React from 'react'

function EditImages() {
  return (
    <form className="border rounded-lg p-5 bg-gray-800 text-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">تغییر دادن عکس</h3>
        <div>
          <label>آیدی عکس</label>
          <input
            type="text"
            placeholder="id"
            className="py-1 px-2 outline-none rounded-lg mr-1 text-gray-800"
          />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <label>عکس</label>
        <input
          type="text"
          placeholder="آدرس اینترنتی عکس"
          className="p-2 mt-1 rounded-lg text-gray-800 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label>متن</label>
        <textarea
          cols="30"
          rows="10"
          className="p-2 mt-1 rounded-lg text-gray-800 outline-none"
        ></textarea>
      </div>
      <button className="bg-gray-50 text-gray-800 text-lg p-2 mt-5 w-40 rounded-lg">
        ایجاد تغییرات
      </button>
    </form>
  )
}

export default EditImages