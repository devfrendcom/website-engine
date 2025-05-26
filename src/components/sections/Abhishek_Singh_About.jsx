import { Scissors, Users, Award } from "lucide-react";

export default function Abhishek_Singh_About({ content, items }) {
  // Icon mapping object
  const iconMap = {
    scissors: Scissors,
    users: Users,
    award: Award,
    // Add more icons as needed
  };

  // Function to get the icon component
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName.toLowerCase()] || Scissors; // Default to Scissors if icon not found
    return <IconComponent className="w-12 h-10 text-amber-400 dark:text-primary mb-4 animate-pulse" />;
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-background/95 dark:to-background/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 dark:from-primary dark:to-secondary bg-clip-text text-transparent">
            {content.title || "About Bladesmith Barber College"}
          </h2>
          <p className="text-slate-200 dark:text-muted-foreground max-w-2xl mx-auto">
            {content.description || "Welcome to Bladesmith Barber College, where tradition meets innovation in the art of barbering. Our mission is to cultivate the next generation of skilled barbers through comprehensive education and hands-on experience."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 dark:bg-gradient-to-br dark:from-background/50 dark:to-background border border-slate-700 dark:border-border/50 hover:border-amber-500 dark:hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
              {getIcon(item.icon)}
              <h3 className="text-xl font-semibold mb-2 text-amber-400 dark:text-primary">{item.title}</h3>
              <span className="inline-block px-3 py-1 text-sm bg-amber-500/10 text-amber-400 dark:text-primary rounded-full mb-3">
                {item.serviceType}
              </span>
              <p className="text-slate-200 dark:text-muted-foreground mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700 dark:border-border/50">
                <span className="text-2xl font-bold text-amber-400 dark:text-primary">{item.price}</span>
                <span className="text-sm text-slate-400 dark:text-muted-foreground">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 