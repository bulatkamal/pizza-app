import './Login.css';

function Login() {
  return (
    <div className="Login">
    <form className="login-form">
        <h1>Вход</h1>
        <input type="text" placeholder="E-mail"/>
        <input type="password" placeholder="Пароль"/>
        <label>
            <input type="checkbox"/>
            Я согласен получать обновления на почту
        </label>
        <button>Войти</button>
    </form>
    </div>
  );
}

export default Login;
