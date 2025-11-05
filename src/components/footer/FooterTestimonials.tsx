const FooterTestimonials = () => {
  const testimonials = [
    {
      text: "These AI tools have transformed how I manage my dispensary. From inventory to marketing, everything's streamlined!",
      author: "Sarah M.",
      role: "Dispensary Owner"
    },
    {
      text: "The business plan generator helped me secure my cultivation license. CCSBA membership pays for itself!",
      author: "Mike T.",
      role: "Cultivator"
    },
    {
      text: "Having all these tools in one place saves me hours every week. The community support is amazing too!",
      author: "Jessica L.",
      role: "Cannabis Entrepreneur"
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-green-300 mb-4 glow-text-effect">
        💬 What Our Members Say
      </h3>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gradient-to-r from-green-500/10 to-lime-500/10 border border-green-500/30 rounded-lg p-4"
          >
            <p className="text-sm text-gray-300 italic mb-2">"{testimonial.text}"</p>
            <div className="text-xs">
              <span className="text-green-400 font-semibold">{testimonial.author}</span>
              <span className="text-gray-500"> - {testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterTestimonials;
