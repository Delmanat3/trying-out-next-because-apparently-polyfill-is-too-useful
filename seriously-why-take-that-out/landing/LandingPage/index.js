import styles from '../../styles/glitch.module.css'
import LandingNav from "../LandNav";

export const Glitch=()=>{

    return(
        <div 
        className={styles.boxer}
        >
            <LandingNav/>
        <div className={styles.glitchContainer}>
        <div className={styles.glitch} data-text="Cosmos Currency"></div>
        <div className={styles.glow}></div>
        <p className={styles.subtitle}>blessed</p>
        </div>
        <div className={styles.scanlines}></div>
        </div>
    )
}