import React, { useState } from "react";
import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import Form from "./Componant/Form/Form";
import List from "./Componant/List/List";
import InputField from "./Componant/Input/Input";
const App = () => {
  const [modal, setModal] = useState(0);
  const [getList, setList] = useState([]);
  const onAddHandler = () => {
    setModal(modal + 1);
    setList([...getList]);
    console.log(getList);
  };

  const onChange = () => {};

  return (
    <div>
      <Header />
      <Home />
      <Form onAddHandler={onAddHandler} modal={modal} onChange={onChange} />
      <List list={getList} />
      {/* <InputField /> */}
    </div>
  );
};

export default App;
