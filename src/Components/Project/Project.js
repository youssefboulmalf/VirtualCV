import css from './Projects.module.css'

const breaklineDescription= (description)=> {
    const newDescription = description.split('\n').map(str => <p>{str}</p>);
    return newDescription;
  }

const Project = (props) => {
    const { projectImage, projectDescription, projectLink, projectName, projectLanguages } = props;
    const link = projectLink ? projectLink : null;
    const name = projectName ? projectName.toUpperCase() : null
    const languages = projectLanguages ? projectLanguages : null
    const description = projectDescription ? breaklineDescription(projectDescription) : "No description avalible"
    const image = projectImage ? require(`../../img/${projectImage}`).default.src : null;

    function breaklineDescription(description) {
        const newText = description.split('\n').map((str,index) => <p key={index}>{str}</p>);
        return newText;
      }



    return (
        <div className={css.project}>
            <a href={link} className={css.link}>
                <div className={css.projectImage}>
                    <img src={image} width={345} height={344}></img>
                </div>
                <div className={css.projectDescription}>
                    <div className={css.projectTitle}>
                        <p>{name}</p>
                    </div>
                    <div className={css.description}>
                        {description}
                    </div>
                    <div className={css.languages}>
                        {languages.map((language, index) =>
                            <div key={`${language}`+`${index}`} className={css.language}>
                                {language}
                            </div>
                        )}
                    </div>
                </div>
            </a>
        </div >
    )
}
export default Project