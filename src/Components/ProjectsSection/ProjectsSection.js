import css from './ProjectsSection.module.css'

const ProjectSection = (props) => {
    return (
        <div className={css.projectSection}>
            <div className={css.projectTitleText}>
                <p>Projects</p>
            </div>
            <div className={css.projects}>
             {props.children.map(child =>
             <div className={css.project}>
                 {child}
             </div>
        )}
        </div>
        </div>
    )
}
export default ProjectSection
