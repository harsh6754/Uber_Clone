import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
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
                    await axios.get(`${import.meta.env.VITE_BASE_URL}/api/captains/logout`, {
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
                navigate('/captain-login', { replace: true })
            }
        }

        logoutUser()
    }, [navigate])

  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout
