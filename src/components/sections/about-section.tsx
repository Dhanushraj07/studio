import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutData } from '@/lib/data';
import { GraduationCap, Briefcase } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="container py-16 sm:py-24">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {aboutData.summary}
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-headline">Education</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="font-headline">Internship</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aboutData.internship.map((intern, index) => (
              <div key={index}>
                <h3 className="font-semibold">{intern.role}</h3>
                <p className="text-muted-foreground">{intern.company}</p>
                <p className="text-sm text-muted-foreground">{intern.period}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
