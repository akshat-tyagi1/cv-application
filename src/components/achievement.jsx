function Achievements({ achievements }) {
    return (
        <section className="resume-section">
            <h2>ACHIEVEMENTS</h2>

            <ul className="entry-points">
                {achievements.map(({id, text}) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </section>
    )
}

export default Achievements;