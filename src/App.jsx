import { useState } from "react";
import "./App.css";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>⬇😎Clique aqui para uma surpresinha!! 😎⬇</h1>
      <button onClick={() => (show === false ? setShow(true) : setShow(false))}>
        <img
          width="100px"
          height="100px"
          src="https://naoinviabilize.com.br/wp-content/uploads/2022/07/Logo_Nova_Temp_Picole-1024x1024.jpeg"
          alt=""
        />
      </button>
      {show && (
        <span>
          <p>HAVE FUN!</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mBYoM9Tgxp4?start=64"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </span>
      )}
    </div>
  );
}

export default App;
