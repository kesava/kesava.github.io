import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl border-t border-neutral-200 dark:border-neutral-800">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold mb-4 text-heading">Selected Projects</h2>
        <p className="font-serif text-lg text-neutral-700 dark:text-neutral-400">Recent work in software engineering and language learning.</p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-b border-neutral-200 dark:border-neutral-800 pb-16 last:border-b-0"
          >
            <h3 className="font-display text-2xl font-bold mb-3 text-heading">{project.title}</h3>
            <p className="font-serif text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed text-lg">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="font-serif text-sm text-neutral-600 dark:text-neutral-500"
                >
                  {tech}
                </span>
              ))}
            </div>

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
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="font-serif text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
