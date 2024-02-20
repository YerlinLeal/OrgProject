import Colaborador from '../Colaborador'
import './Equipo.css'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    // Destructuracion
    const { color, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    
    const obj = { backgroundColor: hexToRgba(color, 0.6) }
    const estiloTitulo = { borderColor: color }

    return <>
        { 
            colaboradores.length > 0  &&
            <section className="equipo" style={obj}>
                {/* Color */}
                <input className="input-color" type='color' value={ color }
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />

                {/* Título del equipo */}
                <h3 style={estiloTitulo}>{titulo}</h3>

                {/* Colaboradores */}
                <div className="colaboradores">
                    {
                        colaboradores.map ( (colaborador, index) => 
                            <Colaborador 
                                datos = {colaborador} 
                                key = {index} 
                                color = {color}
                                eliminarColaborador = {eliminarColaborador}
                                like = {like}
                            /> 
                        )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo