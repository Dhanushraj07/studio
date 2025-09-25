import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

export function HeroSection() {
  const profileImage = placeholderImages.find(p => p.id === 'profile');

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)] dark:bg-grid-zinc-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container relative z-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="group">
                <a href="/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="#contact">
                  Contact Me
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            {profileImage && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                  src={profileImage.imageUrl}
                  alt="Dhanush D"
                  width={350}
                  height={350}
                  className="rounded-full relative border-4 border-card shadow-2xl"
                  priority
                  data-ai-hint={profileImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
