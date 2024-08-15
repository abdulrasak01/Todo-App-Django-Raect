import React from "react";
import { useRef } from "react";

const EditItem = ({
  items,
  updateData,
  setUpdateData,
  changeTask,
  cancelUpdate,
  updateTask,
  currentDate,
  }) => {
  // const itemss = items.find((item) => item.id === updateItem.id);
  const inputRef = useRef();
  return (
    <div className="relative mt-20">
      
      <div>
      <form className="absolute top-0 right-0 mr-0">
        <div className="flex ">
          <div className="">
            <input
               autoFocus
              ref={inputRef}
              type="text"
              id="updateItem"
              placeholder="Enter task name"
              className="border border-gray-400 rounded-full px-2 py-1"
              value={updateData && updateData.item}
              onChange={(e) => changeTask(e)}
            />
          </div>
          <div>
            <button
              type="submit"
              aria-label="AddItem"
              className="mt-1 mx-2"
              onClick={(e) => updateTask(e)}
            >
              <span className="w-5 h-5 font-bold border rounded-2xl bg-green-500 p-2">
                Update
              </span>
            </button>
            <button
              type="cancel"
              aria-label="AddItem"
              className="mt-1 "
              onClick={(e) => cancelUpdate(e)}
            >
              <span className="w-5 h-5 font-bold border rounded-2xl bg-red-500 p-2">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </form>
      </div>
     
    </div>
  );
};

export default EditItem;
