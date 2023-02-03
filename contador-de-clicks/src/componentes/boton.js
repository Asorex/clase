import '../Stylesheets/Boton.css'


function Boton ({ text, esBotonDeClick, manejarClick }) {
    return (
        <button className ={ esBotonDeClick ? "boton-clic" : "boton-reiniciar" }
        onClick = { manejarClick }>
            {text}
        </button>
    );
}

export default Boton;