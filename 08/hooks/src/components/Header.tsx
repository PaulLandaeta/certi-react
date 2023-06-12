import { memo } from "react";
// stateLess porque no tiene estados
const Header = ({ text }) => {
  console.log("Estoy Renderizando el header");
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};
export default memo(Header);
