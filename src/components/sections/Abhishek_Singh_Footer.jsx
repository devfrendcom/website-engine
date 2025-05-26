import { Phone, MapPin, Calendar, Instagram, Facebook } from "lucide-react";

export default function Abhishek_Singh_Footer({ content }) {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-card/50 border-t border-slate-800 dark:border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400 dark:text-primary">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-slate-200 dark:text-muted-foreground">
                <Phone className="w-4 h-4 text-amber-400 dark:text-primary" />
                <a href={`tel:${content.phone}`} className="hover:text-amber-400 transition-colors">
                  {content.phone || "123-456-7890"}
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-200 dark:text-muted-foreground">
                <MapPin className="w-4 h-4 text-amber-400 dark:text-primary" />
                <a 
                  href={content.directionsUrl }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  {content.address || "123 Main St, Denton, TX 76201"}
                </a>
              </p>
              <p className="text-slate-300 text-sm">
                Located in the heart of Denton, easily accessible from major highways and public transportation.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400 dark:text-primary">Hours</h3>
            <div className="space-y-2">
              <p className="text-slate-200 dark:text-muted-foreground">
                <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
              </p>
              <p className="text-slate-200 dark:text-muted-foreground">
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
              </p>
              <p className="text-slate-200 dark:text-muted-foreground">
                <span className="font-medium">Sunday:</span> Closed
              </p>
              <p className="text-slate-300 text-sm mt-4">
                Walk-ins welcome, but appointments are recommended for guaranteed service.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400 dark:text-primary">Follow Us</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-amber-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-slate-200 hover:text-amber-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <p className="text-slate-300 text-sm">
                Follow us on social media for special offers, student work showcases, and barbering tips.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400 dark:text-primary">Book Now</h3>
            <div className="space-y-4">
              <a
                href="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 dark:bg-primary/90 dark:text-primary-foreground rounded-lg hover:bg-amber-400 dark:hover:bg-primary transition-all hover:scale-105 hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </a>
              <p className="text-slate-300 text-sm">
                Schedule your appointment online for a convenient and quick booking experience.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden border border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.1234567890123!2d-97.12345678901234!3d33.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA3JzI0LjQiTiA5N8KwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px]"
          ></iframe>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 dark:border-border/50 text-center text-slate-400 dark:text-muted-foreground">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
          <p className="text-sm">
            Professional barbering education and services in Denton, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
} 