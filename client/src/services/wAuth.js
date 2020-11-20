import React, { useEffect, useState } from 'react'
import api from './api'
import { login, logout, getToken } from './auth'
import { Route, Redirect } from 'react-router-dom'

export default function WAuth({ component:Component, ...rest }){
    const[ redirect, setRedirect ] = useState(false)
    const [ loading, setLoading ] = useState(true)


    useEffect(()=>{
        async function verify(){
            var res = await api.get('/gettoken',{params:{token:getToken()}})
        }
        verify()
    })
}