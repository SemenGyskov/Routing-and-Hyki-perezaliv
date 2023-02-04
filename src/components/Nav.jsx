import React from "react";

export default function Nav(){
    return <nav>
            <Link to="/">Главная</Link>  <Link to="/about">О Нас</Link>  <Link to="/products">Товары</Link> <Link to="/User">Пользователь</Link>   <Link to='/LoginControl'>Вход</Link>
        </nav>;
}