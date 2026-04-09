import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const navigate = useNavigate()
    const hasLoggedOut = useRef(false)

    useEffect(() => {
        if (hasLoggedOut.current) {
            return
        }

        hasLoggedOut.current = true

        const logoutUser = async () => {
            const storedToken = localStorage.getItem('token')
            const token = storedToken?.startsWith('"') && storedToken?.endsWith('"')
                ? JSON.parse(storedToken)
                : storedToken

            try {
                if (token) {
                    await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/logout`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                }
            } catch (error) {
                if (error.response?.status !== 401) {
                    console.error('Logout failed:', error)
                }
            } finally {
                localStorage.removeItem('token')
                navigate('/user-login', { replace: true })
            }
        }

        logoutUser()
    }, [navigate])

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout
