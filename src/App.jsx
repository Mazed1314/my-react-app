import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState([]);
  const [addItem, setAdd] = useState([]);

  // console.log(phone);
  useEffect(() => {
    fetch("phone.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPhone(data);
      });
  }, []);

  const handleAdd = (phone) => {
    setAdd([...addItem, phone]);
  };
  console.log(addItem);

  // console.log("phone");
  return (
    <>
      <div className="">
        <div className="">
          {phone.map((phone) => {
            const { brand, model, color, storage, price, release_date } = phone;
            return (
              <div key={model}>
                <h2>{brand}</h2>
                <p>color: {color}</p>
                <p>model: {model}</p>
                <p>storage: {storage}</p>
                <p>price: {price}</p>
                <p>release date: {release_date}</p>
                <button onClick={() => handleAdd(phone)}>
                  <b> + </b>
                </button>
              </div>
            );
          })}
        </div>
        <div className="">
          {addItem?.map((p) => {
            return (
              <>
                <ul>
                  <li>model: {p.model}</li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
