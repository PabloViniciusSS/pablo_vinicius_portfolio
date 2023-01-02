import styles from '../../../styles/components/Layout/Navbar.module.css'
import { NavLinks } from './NavLinks'

export const Navigation = () => {


  return (
    <nav className={styles.navigation}>
      <NavLinks />
      </nav>
  )
}
