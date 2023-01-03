
import ScrollToTop from 'react-scroll-to-top'
import styles from '../../styles/components/Layout/Layout.module.css'
import { Footer } from './Footer'
import { NavBar } from './Navbar/NavBar'

export default function Layout({ children }) {
    return (
      <section className={styles.layout}>
        <ScrollToTop smooth 
        className={styles.buttontop}
      />
       
   

        <div className={styles.container_navbar}>
          <NavBar />
        </div>
        <div className={styles.container_main}>
          <main>{children}</main>      
            </div> 
        <div className={styles.container_footer}>
          <Footer />
        </div>
      </section>
    )
  }