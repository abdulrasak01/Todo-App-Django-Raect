import React from "react";
import { useRef } from "react";

const AddItem = ({
  newItem,
  setNewItem,
  handleSubmit,
  currentDate,
}) => {
  const inputRef = useRef();
  return (
    <div className="w-full mx-auto mt-20 absolute flex justify-between">
      <div className="mt-5 left-0">
        <span className="ml-10 p-4 font-bold text-gray-black bg-red-500 rounded-2xl ">
        Date: {currentDate}
        </span>
      </div>
      <div className="flex flex-wrap mt-5">
        <div>
          <form class="mr-10" onSubmit={handleSubmit}>
            <div class="flex items-center border-b border-blue-500 py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                autoFocus
                ref={inputRef}
                type="text"
                id="AddItem"
                placeholder="Add Your Tasks"
                aria-label="Add Your Tasks"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button
                class="flex-shrink-0 bg-blue-700 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                onClick={() => inputRef.current.focus()}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
