import React, { Component } from 'react'
import css from './AboutSection.module.css'
import Crossword from '../Crossword/Crossword'

export const AboutSection = (props) => {

        return (
            <div className={css.aboutSection}>
                <div className={css.aboutSectionText}>
                    <h1 className={css.aboutTitle}>About me</h1>
                    <p className={css.aboutText}>The perpose of this Virtual Curriculum Vitae is to introduce myself and to demonstrate my develop skills.</p>
                </div>
                <div className={css.crossWord}>
                    <Crossword/>
                </div>
            </div>
        )

}
export default AboutSection
