
import '../stylesheets/logo.css'


const logo = () => {
    return (
    <div className='logo-imagen'>
        <img
            src={require('../imagenes/logo.png')}
            className='logo-codecamp'
            alt='logo de freecodecamp' />
       </div>
    )
};

export default logo;