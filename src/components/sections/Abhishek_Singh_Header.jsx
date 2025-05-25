import Image from 'next/image';
import Link from 'next/link';

export default function Abhishek_Singh_Header({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title,
    image_url,
    cta_text,
    cta_link,
  } = content;

  // Sort navigation items by position if available
  const navigationItems = items && items.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-background/80 backdrop-blur-sm border-b border-slate-800 dark:border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {image_url && (
              <Link href="/" className="block">
                <Image
                  src={image_url}
                  alt={title || "Your Brand"}
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            )}
            <h1 className="text-xl font-bold tracking-tight text-amber-400 dark:text-primary">
              {title || "Bladesmith Barber College"}
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.cta_link || '#'}
                  className="text-slate-200 hover:text-amber-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  );
} 