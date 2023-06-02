import { useState } from "react";
import { Parent } from "./components/Parent";
import { Child } from "./components/Child";
import Title from "./components/Title";
function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Parent>
      <Child/>
      <Title></Title>
    </Parent>
  );
}

export default App;
