import React from 'react'
import css from './SkillsSection.module.css'

const SkillsSection = (props) => {

    return (
        <div className={css.skillsSection}>
            <div className={css.skillsTitleText}>
                <p>Skills</p>
            </div>
            <div className={css.skills}>
             {props.children.map(child =>
             <div key={child.skillName} className={css.skill}>
                 {child}
             </div>
        )}
        </div>
        </div>
    )
}
export default SkillsSection