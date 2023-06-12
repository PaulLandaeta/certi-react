const Card = ({ image, description, setCounter }) => {
    console.log(description);
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-description">
        <p>{description}</p>
      </div>
      <button onClick={setCounter}> Incrementar </button>
    </div>
  );
};

export default Card;
