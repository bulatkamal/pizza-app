import './Login.css';
import {
    Link
} from "react-router-dom";

function Login() {
    return (
        <div className="Login" >
            <div className="Login-wrapper" >
                <form className="Login-form" >
                    <h1 className="Login-title" > Вход </h1>
                    <input type="text" placeholder="E-mail" className="Login-field" />
                    <input type="password" placeholder="Пароль" className="Login-field" />
                    <label className="Login-checkbox" >
                        <input type="checkbox" className="Checkbox" />
                        Я согласен получать обновления на почту </label>
                    <div className="Login-action" >
                        <Link to="page2" className="Login-button" > Войти </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;