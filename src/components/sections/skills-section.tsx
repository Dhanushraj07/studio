import { skillsData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          My toolbox for building modern web applications.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Code className="h-5 w-5 text-primary"/>
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" className="text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
