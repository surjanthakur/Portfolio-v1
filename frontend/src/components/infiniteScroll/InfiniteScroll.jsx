import "./infinite.css";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Framer Motion",
  "Bun",
  "MongoDB",
  "PostgreSQL",
  "VectorDB",
  "Python",
  "FastAPI",
  "Docker",
  "RAG",
  "LangGraph",
];

export default function InfiniteScroll() {
  return (
    <section className="infinite-container" aria-label="Tech stack">
      <div className="infinite-track">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="card tech-btn">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
