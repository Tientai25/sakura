import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
            <span className="text-gray-600 font-semibold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 