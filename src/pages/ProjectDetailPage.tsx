import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from "@/data/projects";

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug) || projects[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  return (
    <div className="bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <button 
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-subtle hover:text-accent transition-colors"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </button>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted mb-6">
                {project.subtitle}
              </p>
              
              <p className="text-base md:text-lg text-subtle mb-8 max-w-lg">
                {project.description}
              </p>
              
              {project.href && (
                <a 
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium text-accent hover:text-ink transition-colors"
                >
                  Visit Project ↗
                </a>
              )}
            </div>
            
            <div className="lg:w-1/2">
              {project.image ? (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-full bg-gradient-to-br from-surface/50 to-surface/70 rounded-2xl" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading 
            eyebrow="01 — OVERVIEW"
            heading="Overview"
            variant="small"
          />
          
          {project.overview && (
            <div className="mt-10 md:mt-12 max-w-3xl">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {project.overview}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading 
            eyebrow="02 — THE PROBLEM"
            heading="The Problem"
            variant="small"
          />
          
          {project.problem && (
            <div className="mt-10 md:mt-12 max-w-3xl">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {project.problem}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading 
            eyebrow="03 — THE SOLUTION"
            heading="The Solution"
            variant="small"
          />
          
          {project.solution && (
            <div className="mt-10 md:mt-12 max-w-3xl">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {project.solution}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading 
            eyebrow="04 — KEY FEATURES"
            heading="Key Features"
            variant="small"
          />
          
          {project.features && project.features.length > 0 && (
            <ul className="mt-10 md:mt-12 max-w-3xl space-y-4 md:space-y-5">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-base md:text-lg text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* How It Was Built Section */}
      <section className="py-16 md:py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading 
            eyebrow="05 — HOW IT WAS BUILT"
            heading="How It Was Built"
            variant="small"
          />
          
          {project.techBreakdown && (
            <div className="mt-10 md:mt-12 max-w-3xl space-y-8">
              {project.techBreakdown.frontend && project.techBreakdown.frontend.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-subtle mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.techBreakdown.frontend.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded border border-line text-sm text-muted">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.techBreakdown.backend && project.techBreakdown.backend.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-subtle mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.techBreakdown.backend.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded border border-line text-sm text-muted">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {project.techBreakdown.database && project.techBreakdown.database.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-subtle mb-4">Database</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.techBreakdown.database.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded border border-line text-sm text-muted">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Privacy Policy Section */}
      {project.privacyPolicy && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading 
              eyebrow="PRIVACY POLICY"
              heading="Privacy Policy"
              variant="small"
            />
            <div className="mt-10 md:mt-12 max-w-3xl text-muted leading-relaxed">
              {project.privacyPolicy.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h2 key={i} className="text-xl md:text-2xl font-bold text-ink mt-8 mb-4">{line.replace('# ', '')}</h2>;
                if (line.startsWith('## ')) return <h3 key={i} className="text-lg md:text-xl font-semibold text-ink mt-6 mb-3">{line.replace('## ', '')}</h3>;
                if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-1 text-sm md:text-base">{line.replace('- ', '')}</li>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-2 text-sm md:text-base">{line}</p>;
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">More Projects</h3>
          <p className="text-base md:text-lg text-muted mb-8 max-w-xl mx-auto">
            See other work from the studio.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg border border-line text-base md:text-lg font-medium text-ink hover:bg-surface/50 transition-colors"
          >
            View All Projects
          </button>
        </div>
      </section>
    </div>
  );
};