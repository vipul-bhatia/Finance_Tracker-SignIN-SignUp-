import styles from './Login.module.css';
import {useState} from 'react'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }
  return (
  <form onSubmit={handleSubmit} className={styles['login-form']}>
    <h2>Login</h2>
    <label>
        <span>Email: </span>
        <input 
        type="email" 
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
         />
    </label>
    <label>
        <span>Password: </span>
        <input
        type="password"
        name="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
    </label>
    <button type="submit" className='btn'>Login</button>
  </form>
  )
}
