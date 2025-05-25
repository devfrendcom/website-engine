"use client";


export default function Abhishek_Singh_Testimonials({ content, items }) {
  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 dark:from-primary dark:to-secondary bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-slate-200 dark:text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((review, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500 transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">
                    {review.title.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">{review.title}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300">{review.description}</p>
              <p className="text-sm text-slate-400 mt-4">{review.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
