import { useState, useMemo, memo} from "react";
import { getCharacter } from "../../../../07/souvenir-store/src/services/charactersService";
// StateFul 
const Card = ({ image, description, setCounter }) => {
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState(1);
  const increment = () => {
    console.log("Estoy Incrementando");
    setCounter(counter + 1);
  };
  const responseMemoized = useMemo(() => {
    console.log("Get Character");
    const response = getCharacter();
    return response
  }, [id]);
  console.log('Se renderizo la Card');
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-description">
        <p>{description}</p>
      </div>
      <button onClick={increment}> Incrementar </button>
      <button
        onClick={() => {
          setId(counter);
        }}
      >
        {" "}
        Modificar Id{" "}
      </button>
    </div>
  );
};

export default memo(Card);
