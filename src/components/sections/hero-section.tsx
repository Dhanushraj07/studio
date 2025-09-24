import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

export function HeroSection() {
  const profileImage = placeholderImages.find(p => p.id === 'profile');

  return (
    <section id="home" className="container py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {profileImage && (
             <Image
                src={profileImage.imageUrl}
                alt="Dhanush D"
                width={120}
                height={120}
                className="rounded-full mb-6 border-4 border-primary/20 shadow-lg md:hidden"
                data-ai-hint={profileImage.imageHint}
              />
          )}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-semibold">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          {profileImage && (
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50"></div>
              <Image
                src={profileImage.imageUrl}
                alt="Dhanush D"
                width={300}
                height={300}
                className="rounded-full relative border-4 border-background shadow-2xl"
                priority
                data-ai-hint={profileImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
