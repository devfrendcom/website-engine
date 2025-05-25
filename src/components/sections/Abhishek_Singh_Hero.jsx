import Image from 'next/image';
import { Phone, Calendar } from "lucide-react";

export default function Abhishek_Singh_Hero({ content }) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.background_url || "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920"}
          alt="Barber shop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/50 dark:from-background/70 dark:via-background/60 dark:to-background/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-8 animate-fade-in max-w-2xl">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 dark:from-primary dark:via-primary/80 dark:to-secondary bg-clip-text text-transparent animate-gradient">
                Welcome to {content.title}
              </span>
            </h2>
            <p className="text-xl font-medium tracking-wide text-slate-200 dark:text-muted-foreground border-l-4 border-amber-400 dark:border-primary pl-4 py-2">
              {content.subtitle}
            </p>
            <p className="text-md leading-relaxed text-slate-300 dark:text-muted-foreground/80 max-w-xl italic font-light tracking-wide">
              {content.description || "Experience the perfect blend of traditional barbering techniques and modern styling. Our expert barbers are dedicated to providing you with exceptional service and a memorable grooming experience."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`${content.cta_link}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-all hover:scale-105 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-all hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              {content.cta_text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 