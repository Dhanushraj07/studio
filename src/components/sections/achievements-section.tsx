import { achievementsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function AchievementsSection() {
  return (
    <section id="achievements" className="container py-16 sm:py-24 bg-accent dark:bg-card rounded-lg">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Key highlights and accomplishments throughout my career.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Star className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{achievement.title}</h3>
              <p className="text-muted-foreground mt-1">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
