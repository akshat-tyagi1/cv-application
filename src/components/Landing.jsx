function Landing({ onStart }) {
  return (
    <main className="landing">
      <section className="hero">
        <span className="eyebrow">Resume Builder</span>
        <h1>Build Your Resume</h1>
        <p>Create a professional resume quickly and easily.</p>
        <button type="button" onClick={onStart}>
          Create Resume
        </button>
      </section>
    </main>
  );
}

export default Landing;
