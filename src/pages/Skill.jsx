import PageImage from '../components/PageImage'
import { FaHtml5, FaJs, FaReact, FaGithub, FaFigma } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

function Skill() {
    const skills = [
        { name: 'React', percent: 60, icon: <FaReact /> },
        { name: 'Figma', percent: 85, icon: <FaFigma /> },
        { name: 'HTML/CSS', percent: 80, icon: <FaHtml5 /> },
        { name: 'Next.js', percent: 80, icon: <SiNextdotjs /> },
        { name: 'JavaScript', percent: 60, icon: <FaJs /> },
        { name: 'GitHub', percent: 90, icon: <FaGithub /> }
    ]

    return (
        <section className="page-content">
            <h1>My <span>Skills</span></h1>

            <div className="skill-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <div className="skill-pill">
                            <div className="skill-icon">{skill.icon}</div>
                            <span className="skill-percent">{skill.percent}%</span>
                        </div>

                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill