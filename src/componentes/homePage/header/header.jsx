import "./header.css"
const HeaderPage = ({setStart}) => {
    return (
        <div className="header_container">
            <h2><b>Nu</b> Kenzie</h2>
            <button onClick={() => setStart(false)}>Sair</button>
        </div>
    )
}
export default HeaderPage