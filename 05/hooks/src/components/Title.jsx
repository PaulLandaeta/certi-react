import { useEffect, useState } from "react";

const Title = ({ motherLastName, verifyLoaded }) => {
  const [name, setName] = useState("Paul");
  const [lastName, setLastName] = useState("Landaeta");
  const changeName = () => {
    setLastName("Wilker");
    verifyLoaded(true);
  };
  useEffect(() => {
    console.log(name);
  }, [name]);
  useEffect(()=>{
    
  }, []);
  return (
    <div>
      {" "}
      <h1>
        {" "}
        Hola estoy agripado :') {name} {motherLastName}
      </h1>
      <button onClick={changeName}>Cambiar Estado</button>
    </div>
  );
};
export default Title;
