import React, { useEffect } from 'react'
import s from '../home/css/index.module.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Profile = () => {
    const data = useSelector(state => state)
    let history = useHistory()
    useEffect(() => {
        if(!data.islogin){
            history.replace('/')
        }
    }, [data])
    return (
        <div className={s.home_page}>
            <div className={s.in}>
                <h1>{data.login}</h1>
            </div>
        </div>
    )
}