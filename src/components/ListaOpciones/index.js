import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    const equipos = ["Programación", "Frontend", "DataScience", "DevOps", "Ux y Diseño", "Móvil", "Innovación y Gestión"];

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;