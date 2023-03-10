import styles from './SignUp.module.css';
import {useState} from 'react'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
    }
  return (
  <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Sign Up</h2>
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
    <label>
        <span>Display Name: </span>
        <input
        type="text"
        name="displayName"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        />
    </label>
    <button type="submit" className='btn'>Sign Up</button>
  </form>
  )
}
