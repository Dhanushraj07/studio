import { experienceData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-16 sm:py-24 bg-accent dark:bg-card rounded-lg">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          My professional journey and key contributions.
        </p>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-start relative">
              <div className={cn('flex justify-center md:hidden mb-4', index % 2 === 0 ? 'md:col-start-2' : '')}>
                <div className="bg-primary h-4 w-4 rounded-full border-4 border-accent dark:border-card box-content"></div>
              </div>

              {/* Job Card */}
              <div className={cn('md:text-right', index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2')}>
                 <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline">{job.role}</CardTitle>
                    <CardDescription>
                      {job.company} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
                      {job.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary border-4 border-accent dark:border-card hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
