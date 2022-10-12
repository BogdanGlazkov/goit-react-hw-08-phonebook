import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { loginThunk } from "redux/auth/operations";
import s from './LoginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const initialValue = {
        email: '',
        password: '',
    };

    const [user, setUser] = useState(initialValue);
    const onChangeUser = e => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = async e => {
        e.preventDefault();

        try {
            await dispatch(loginThunk(user)).unwrap();
            setUser(initialValue);
        } catch (error) {
            toast.error('Please try again');
        }
    };

    return (
        <main className={s.wrapper}>
            <form className={s.form} onSubmit={onSubmit}>
                <label>
                    <span className={s.label}>Email</span>
                    <input className={s.input} type="email" name="email" value={user.email} required placeholder="my@mail.com" onChange={onChangeUser} />
                </label>
                <label>
                    <span className={s.label}>Password</span>
                    <input className={s.input} type="password" name="password" value={user.password} required placeholder="********" onChange={onChangeUser} />
                </label>
                <Link className={s.link} to="/registration">Don't have account?</Link>
                <button className={s.btn} disabled={!user.email || !user.password} type="submit">
                    <span>Log In</span>
                </button>
            </form>
        </main>
    );
};

export default LoginPage;
