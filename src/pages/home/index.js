import React from 'react'
import s from './css/index.module.scss';
import { Icon56ShieldKeyholeOutline } from '@vkontakte/icons';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Home = () => {
    const data = useSelector(state => state)
    let history = useHistory();
    const dispatch = useDispatch()
    const submit_form = (e) => {
        e.preventDefault()
    }

    return (
        <div className={s.home_page}>
            <div className={s.in}>
                <Icon56ShieldKeyholeOutline width={100} height={100} fill='rgb(42 129 169)' />
                <span className={s.login_text}>Войти</span>
                <hr />
                <form onSubmit={(e) => submit_form(e) & console.log(data)}>
                    <label className={s.block_input}>
                        Логин:
                        <input name='form-login' value={data.login} placeholder='MySuperLogin' onChange={(e) => {
                            dispatch({
                                type: 'INSERT_LOGIN', 
                                payload: {
                                    login: e.currentTarget.value
                                }
                            })

                        }}></input>
                    </label>
                    <label className={s.block_input}>
                        Пароль:
                        <input name='form-password' value={data.password} type='password' placeholder='*********' onChange={(e) => {
                            dispatch({
                                type: 'INSERT_PASSWORD', 
                                payload: {
                                    password: e.currentTarget.value
                                }
                            })
                        }}></input>
                    </label>
                    <input type='submit' value={`Войти`} disabled={!data.islogin} onClick={() => history.push('/profile')} />
                </form>
            </div>
        </div>
    )
}