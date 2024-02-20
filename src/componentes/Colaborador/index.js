import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav} = props.datos
    const { color, eliminarColaborador, like} = props

    // Operador ternario: condicion ? true : false

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: color}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? 
                <AiFillHeart color="red"    onClick={()=>like(id)} /> : 
                <AiOutlineHeart             onClick={()=>like(id)} />}
            
        </div>
    </div>
}

export default Colaborador