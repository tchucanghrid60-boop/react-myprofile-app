function Projects() {
    const project = {
        title: 'Manage Task App - fullstack web development',
        detail: 'An online calculator developed with React. Try it live below, or open it in a new tab.',
        url: 'https://react-calculate-sau-app-fdba.vercel.app'
    }

    return (
        <section className="page-content">
            <h1>Featured <span>Projects</span></h1>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-detail">{project.detail}</p>

            <div className="browser-frame">
                <div className="browser-bar">
                    <span className="browser-url">{project.url}</span>
                    <a href={project.url} target="_blank" rel="noreferrer">Open ↗</a>
                </div>
                <iframe src={project.url} title={project.title} />
            </div>
        </section>
    )
}

export default Projects