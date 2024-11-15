import "./App.css";
import male from "./gender01_male.png";
import female from "./gender02_female.png";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div>土屋家のベビーちゃん</div>
        <div>
          {!isChecked && <img src={male} width={200} height={200} />}
          <img src={female} width={200} height={200} />
        </div>
        <div className="which">
          {!isChecked ? <div>どっちだい？</div> : <div>女の子</div>}
        </div>
        <div
          className="check"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          {!isChecked ? <div>確認してみる</div> : <div>もどる</div>}
        </div>
      </header>
    </div>
  );
}

export default App;
