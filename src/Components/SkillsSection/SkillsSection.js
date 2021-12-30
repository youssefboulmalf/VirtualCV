import React from 'react';
import css from './SkillsSection.module.css';
import { skills } from '../../SkillsData/SkillsData';
import Skill from '../Skill/Skill';

const SkillsSection = (props) => {

    return (
        <div className={css.skillsSection}>
            <div className={css.skillsTitleText}>
                <p>Skills</p>
            </div>
            <div className={css.skills}>
                    <div className={css.skillsTitle}><p>language</p></div>
                <div className={css.skillsContainer}>
                    {skills.filter(f => f.skillType == "language").map(child =>
                        <div key={child.skillName} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
                    <div className={css.skillsTitle}><p>Library's</p></div>
                <div className={css.skillsContainer}>
                    {skills.filter(f => f.skillType == "library").map(child =>
                        <div key={child.skillName} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
                    <div className={css.skillsTitle}><p>Other</p></div>
                <div className={css.skillsContainer}>
                    {skills.filter(f => f.skillType == "other").map(child =>
                        <div key={child.skillName} className={css.skill}>
                            <Skill
                                skillName={child.skillName}
                                skillLevel={child.skillLevel}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SkillsSection