import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import axios from "axios";
import EditItem from "./EditItem";
// JSON.parse(localStorage.getItem("TodoList"))
function App() {
  let [items, setItems] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/todos/");
      setItems(response.data);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.header);
      } else {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addItem = async (item) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/todos/", {
        item: item,
        checked: false,
      });
      setItems(response.data);
      fetchItems();
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.header);
      } else {
        console.log(err.message);
      }
    }
  };

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/detail/${id}`);
      const deleteList = items.filter((item) => item.id !== id);
      setItems(deleteList);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = async (id) => {
    const item = items.find((items) => items.id === id);
    const editItem = {
      item: item.item,
      checked: !item.checked,
    };
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/detail/${id}`,
        editItem
      );

      setItems(
        items.map((item) => (item.id === id ? { ...response.data } : item))
      );
    } catch (err) {
      console.log(`err${err.message}`);
    }
  };

  items = search
    ? items.filter((item) =>
        item.item.toLowerCase().includes(search.toLowerCase())
      )
    : items;

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/detail/${updateData.id}`,
        updateData
      );

      setItems(
        items.map((item) =>
          item.id === updateData.id ? { ...response.data } : item
        )
      );
    } catch (err) {
      console.log(`err${err.message}`);
    }
    setUpdateData("");
  };

  const cancelUpdate = (e) => {
    e.preventDefault();
    setUpdateData("");
  };

  const changeTask = (e) => {
    e.preventDefault();
    let newEntry = {
      id: updateData.id,
      item: e.target.value,
      checked: updateData.checked,
    };
    setUpdateData(newEntry);
  };


  return (
    <div className="flex flex-col justify-between">
      <Header search={search} setSearch={setSearch} />
      <AddItem
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
        newItem={newItem}
        currentDate={currentDate}
      />
        <EditItem
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
          updateTask={updateTask}
          newItem={newItem}
          items={items}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      <Content
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        setUpdateData={setUpdateData}
        updateData={updateData}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
