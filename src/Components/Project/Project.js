import css from './Projects.module.css'

const Project = (props) => {
    const { projectImage, projectDiscription, projectLink } = props;
    const link = projectLink ? projectLink : null;
    const image = projectImage ? projectImage : null
    const discription = projectDiscription? projectDiscription : "No description avalible"

    return (
        <div className={css.project}>
            <div className={css.projectImage}>
                <a href={link}>
                    <img src={image}></img>
                </a>
            </div>
            <div className={css.projectDiscription}>
                <p>{discription}</p>
            </div>
        </div>
    )
}
export default Project
