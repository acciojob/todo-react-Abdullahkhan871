import React, { useState } from "react";

const Todo = () => {
  const [val, setVal] = useState("");
  const [inpVlv, setInpVlv] = useState([]);

  const handle = (id) => {
    setInpVlv(inpVlv.filter((item) => item.id !== id));
    {
        
    }
  };    

  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
          if (val != "" && val != " ") {
            setInpVlv([...inpVlv, { id: Date.now(), text: val }]);
          } else {
            alert("Please Fill the input");
          }
          setVal("");
        }}
      >
        <input
          value={val}
          type="text"
          onChange={(eve) => setVal(eve.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <ul>
        {inpVlv.map((item) => (
          <li>
            <span>{item.text}</span>
            <button onClick={() => handle(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
