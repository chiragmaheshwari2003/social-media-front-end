import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div className='register'>
        <div className="card">
          <div className="left">
            <h1>Lama Social.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illo aliquam voluptatibus blanditiis reprehenderit est qui maxime, 
              vel aspernatur sunt quasi enim! Id facere doloremque, 
              sint excepturi cumque molestias! Voluptates, repudiandae.
            </p>
            <span>Already Have an account?</span>
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form >
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="Name" />
              <button>Register</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Register