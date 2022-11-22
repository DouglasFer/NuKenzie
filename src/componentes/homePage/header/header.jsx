import "./header.css";
import Logo from "../../../images/Nu Kenzie.png";
const HeaderPage = ({ setStart }) => {
  return (
    <div className="header_container">
      <img src={Logo} alt="" />
      <button onClick={() => setStart(false)}>Sair</button>
    </div>
  );
};
export default HeaderPage;
