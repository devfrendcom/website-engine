import { Scissors, Calendar, Code, Search, Share } from "lucide-react";

export default function Abhishek_Singh_Services({ content, items }) {
  // Icon mapping object
  const iconMap = {
    scissors: Scissors,
    code: Code,
    search: Search,
    share: Share,
    calendar: Calendar,
    // Add more icons as needed
  };

  // Function to get the icon component
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName.toLowerCase()] || Scissors; // Default to Scissors if icon not found
    return <IconComponent className="w-12 h-10 text-amber-400 dark:text-primary group-hover:scale-110 transition-transform" />;
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-background/95 dark:to-background/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 dark:from-primary dark:to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-slate-200 dark:text-muted-foreground max-w-2xl mx-auto">
            {content.description || "Experience professional grooming services at student prices. All services are performed by advanced students under the supervision of our expert instructors." }
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 dark:bg-gradient-to-br dark:from-background/50 dark:to-background border border-slate-700 dark:border-border/50 hover:border-amber-500 dark:hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg group">
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400 dark:text-primary">{service.title}</h3>
              <p className="text-slate-200 dark:text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-400 dark:text-primary">{service.price}</span>
                <span className="text-sm text-slate-400 dark:text-muted-foreground">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-200 dark:text-muted-foreground mb-6">
            All prices include student services. For instructor services, please contact us for pricing.
          </p>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
} 