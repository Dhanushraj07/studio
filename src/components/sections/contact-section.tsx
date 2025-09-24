import { siteConfig } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 sm:py-24">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-6 sm:grid-cols-1">
          <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
            <Mail className="h-6 w-6 text-primary" />
            <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground hover:underline">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
            <Phone className="h-6 w-6 text-primary" />
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-foreground hover:underline">
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
            <MapPin className="h-6 w-6 text-primary" />
            <p className="text-foreground">{siteConfig.contact.location}</p>
          </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="outline" size="icon">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
      </div>
    </section>
  );
}
