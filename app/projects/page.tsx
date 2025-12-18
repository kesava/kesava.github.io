import { getAllProjects, getAllCategories } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          Projects
        </h1>
        <p className="font-serif text-xl text-neutral-800 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          A collection of my work in web development, language learning tools, and creative coding.
        </p>
      </header>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold mb-6 text-heading">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="font-serif text-sm text-neutral-600 dark:text-neutral-500"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0"
          >
            {project.category && (
              <div className="mb-3">
                <span className="font-serif text-sm text-accent dark:text-accent font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
            )}

            <h2 className="font-display text-3xl font-bold mb-4 text-heading">
              {project.title}
            </h2>

            <p className="font-serif text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed text-lg">
              {project.longDescription || project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-4 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-heading underline decoration-neutral-400 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-300 transition-colors decoration-2 underline-offset-2"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
