import { Phone, Mail, MapPin, Star, Calendar, Users, MessageCircle, CheckCircle } from 'lucide-react';

interface Consultant {
  id: number;
  name: string;
  location: string;
  experience: string;
  matches: string;
  rating: number;
  reviewCount: number;
  specialization: string[];
  image: string;
}

const ConsultantCard = ({ consultant }: { consultant: Consultant }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 group">
    <div className="relative">
      <img 
        src={consultant.image} 
        alt={consultant.name} 
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center gap-2">
          {Array(5).fill(0).map((_, index) => (
            <Star 
              key={index} 
              className={`w-4 h-4 ${index < consultant.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
            />
          ))}
          <span className="text-white text-sm">({consultant.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
    
    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">{consultant.name}</h3>
        <p className="text-gray-500 flex items-center gap-1.5">
          <MapPin className="w-4 h-4" /> {consultant.location}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4 text-pink-500" />
          <span className="text-sm">{consultant.experience} Experience</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4 text-pink-500" />
          <span className="text-sm">{consultant.matches}+ Matches</span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-900">Specialization</h4>
        <div className="flex flex-wrap gap-2">
          {consultant.specialization.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm flex items-center gap-1"
            >
              <CheckCircle className="w-3 h-3" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Schedule Consultation
        </button>
        <button className="w-full py-3 px-4 bg-white text-pink-600 rounded-xl font-medium border-2 border-pink-100 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Send Message
        </button>
      </div>
    </div>
  </div>
);

function RishtaConsultants() {
  const consultants = [
    {
      id: 1,
      name: "Mrs. Fatima Rizvi",
      location: "Islamabad, Pakistan",
      experience: "15 Years",
      matches: "500",
      rating: 5,
      reviewCount: 128,
      specialization: ["Elite Families", "Professionals", "Overseas"],
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Mrs. Amina Ahmad",
      location: "Lahore, Pakistan",
      experience: "12 Years",
      matches: "350",
      rating: 4,
      reviewCount: 96,
      specialization: ["Business Families", "Doctors", "Engineers"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Mrs. Zainab Khan",
      location: "Karachi, Pakistan",
      experience: "10 Years",
      matches: "280",
      rating: 5,
      reviewCount: 87,
      specialization: ["Local Matches", "Quick Results", "Young Professionals"],
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 inline-block text-transparent bg-clip-text mb-4">
            Our Expert Rishta Consultants
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with our experienced matchmakers who understand your preferences and help you find the perfect life partner
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "1,000+", label: "Successful Matches" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 inline-block text-transparent bg-clip-text mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Consultants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map(consultant => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need More Information?
          </h2>
          <div className="flex justify-center gap-4">
            <a href="tel:+923001234567" className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700">
              <Phone className="w-4 h-4 text-pink-500" />
              <span>Call Us</span>
            </a>
            <a href="mailto:contact@example.com" className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700">
              <Mail className="w-4 h-4 text-pink-500" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RishtaConsultants;