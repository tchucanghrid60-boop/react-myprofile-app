import PageImage from '../components/PageImage'
function Home() {
    return (
        <section className="page-content home-page">
            <p className="subtitle">
                Let's Work <span>Together !</span>
            </p>

            <h1>
                Hi From <span>Pichet</span>,
                <br />
                Interactive Designer & Fullstack
                Web Developer
                <br />
                Student
            </h1>

            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem .
            </p>

            <div className="stats">
                <div>
                    <strong>3+</strong>
                    <p>Years of Experience</p>
                </div>

                <div>
                    <strong>10+</strong>
                    <p>Projects Completed</p>
                </div>
            </div>
        </section>
    )
}

export default Home
