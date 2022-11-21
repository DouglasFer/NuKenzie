import "./index.css";
import ImgIndex from "../../images/imgIndex.png";
export function ScreenIndex({ setStart }) {
  return (
    <div className="full">
      <div className="container_index">
        <div className="aside_text">
          <p>
            <b>Nu</b> Kenzie
          </p>
          <h2>Centralize o controle das suas finanças</h2>
          <h5>de forma rápida e segura</h5>
          <button onClick={() => setStart(true)}>Iniciar</button>
        </div>
        <div>
          <img src={ImgIndex} alt="" width="530px" />
        </div>
      </div>
    </div>
  );
}
