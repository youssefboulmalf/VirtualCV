import css from './TopBar.module.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Scroll, { Link } from 'react-scroll'


const TopBar = (props) => {


    return (
        <div className={css.topBar}>
            <nav className={css.navButtons}>
                <Link
                    className={css.navButton}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}>Projects</Link>
                <Link
                    className={css.navButton}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}>About</Link>
                <Link
                    className={css.navButton}
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}>skills</Link>
            </nav>
            <div className={css.socialButtons}>
                <a className={css.socialButton} href='https://github.com/youssefboulmalf'><BsGithub /></a>
                <a className={css.socialButton} href='https://www.linkedin.com/in/youssef-boulmalf-42372b193/'><BsLinkedin /></a>
                <a className={css.socialButton} href='https://www.instagram.com/youssefboulmalf/'><BsInstagram /></a>
            </div>
        </div>
    )
}
export default TopBar
