import styles from './NavBar.module.css';

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to="/">My Money</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </nav>
  )
}
