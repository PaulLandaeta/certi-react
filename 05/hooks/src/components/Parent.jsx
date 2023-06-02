export const Parent = (props) => {
  console.log(props);
  const { children } = props;
  return (
    <div style={{ width: "300px", height: "200px", backgroundColor: "blue", color: "white"}}>
      {children}
    </div>
  );
};
