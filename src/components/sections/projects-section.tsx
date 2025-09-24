import { projectsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A selection of projects I&apos;ve worked on.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="flex-grow">
                <p className="font-semibold mb-2 text-sm">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                {project.link && (
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {/* Add a demo button if link is available */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
