import css from './TopBar.module.css'
import {BsGithub, BsLinkedin, BsInstagram } from  'react-icons/bs'

const TopBar = () => {

    return (
        <div className={css.topBar}>
            <div className={css.navButtons}>
                <button className={css.navButton}>Projects</button>
                <button className={css.navButton}>Skills</button>
                <button className={css.navButton}>About</button>
            </div>
            <div className={css.socialButtons}>
            <button className={css.socialButton}><BsGithub/></button>
            <button className={css.socialButton}><BsLinkedin/></button>
            <button className={css.socialButton}><BsInstagram/></button>
            </div>
        </div>
    )
}
export default TopBar
