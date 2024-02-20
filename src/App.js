import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Yerlin Leal",
      puesto: "Ingeniera de Software",
      foto: "https://media.licdn.com/dms/image/D4E03AQHxnfjXNP9YDg/profile-displayphoto-shrink_800_800/0/1680668227577?e=1714003200&v=beta&t=9uTSlahfbyvS6d0TgenYXOmZwzVFo6igyO_kdtlSAOE",
      equipo: "Front End",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Alejandro Garita",
      puesto: "Ingeniero de Software",
      foto: "https://media.licdn.com/dms/image/C5603AQFzgHR7GSjD9A/profile-displayphoto-shrink_800_800/0/1579105219033?e=1714003200&v=beta&t=LbN70KaKXleldZMhDL_3OJ17pocSrLyC_Ln6T32nlSY",
      equipo: "Programación",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Harland Lohora",
      puesto: "Instructor de Alura Latam",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Front End",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Beatriz Leiva",
      puesto: "Ingeniera QA",
      foto: "https://media.licdn.com/dms/image/D4D03AQG5mlK6qRWLBQ/profile-displayphoto-shrink_800_800/0/1666883706885?e=1714003200&v=beta&t=DQO3ummQfDtj4tQl9z9AFc7ug77aKfSUWjdRegUyYXY",
      equipo: "Programación",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Christian Velasco",
      puesto: "Instructor de Alura Latam",
      foto: "https://github.com/christianpva.png",
      equipo: "Devops",
      fav: false
    }
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      color: "#57C278"
    },
    {
      id: uuid(),
      titulo: "Front End",
      color: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      color: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      color: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      color: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      color: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color: "#FF8A29"
    }
  ])
  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread operator
    actualizarColaboradores([...colaboradores, {...colaborador, id: uuid()}])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.color = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const equipoExiste = (titulo) => {
    return equipos.some((equipo) => equipo.titulo === titulo);
  };
  

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  // Actualizar favorito
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav 
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  // Mensaje de alerta
  const mostrarToast = (mensaje) => {
    toast(mensaje);
};

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      <ToastContainer />
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {mostrarFormulario && <Formulario 
        equipos = {equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        equipoExiste = {equipoExiste}
        cambiarMostrar = {cambiarMostrar}
        mostrarToast = {mostrarToast}
        />
      }

      {
        equipos.map((equipo) => <Equipo
          datos = {equipo}
          key = {equipo.id}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
