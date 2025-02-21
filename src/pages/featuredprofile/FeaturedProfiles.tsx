import { useState } from 'react';
import { Heart, MapPin, GraduationCap, Briefcase, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  age: string;
  height: string;
  location: string;
  education: string;
  profession: string;
  maritalStatus: string;
  image: string;
}

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
    <div className="relative">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-full h-72 object-cover"
      />
      <div className="absolute top-4 right-4">
        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-pink-50 transition-colors group">
          <Heart className="w-5 h-5 text-pink-500 group-hover:fill-pink-500" />
        </button>
      </div>
    </div>
    
    <div className="p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
        <p className="text-gray-500 flex items-center gap-1.5">
          <MapPin className="w-4 h-4" /> {profile.location}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
          {profile.age} years
        </span>
        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
          {profile.height}
        </span>
        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
          {profile.maritalStatus}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <GraduationCap className="w-4 h-4" />
          <span className="text-sm">{profile.education}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm">{profile.profession}</span>
        </div>
      </div>

      <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl">
        View Full Profile
      </button>
    </div>
  </div>
);

const FeaturedProfiles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 9;

  const profiles = [
    {
      id: 1,
      name: "Sarah Ahmed",
      age: "26",
      height: "5'6\"",
      location: "Islamabad, Pakistan",
      education: "Masters in Computer Science",
      profession: "Software Engineer",
      maritalStatus: "Never Married",
      image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Amina Khan",
      age: "24",
      height: "5'4\"",
      location: "Lahore, Pakistan",
      education: "MBBS",
      profession: "Doctor",
      maritalStatus: "Never Married",
      image: "https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Fatima Malik",
      age: "27",
      height: "5'5\"",
      location: "Karachi, Pakistan",
      education: "MBA",
      profession: "Business Analyst",
      maritalStatus: "Never Married",
      image: "https://images.unsplash.com/photo-1621184455876-983d8436c8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    // Add more profiles to test pagination
    {
      id: 4,
      name: "Zara Hassan",
      age: "25",
      height: "5'7\"",
      location: "Faisalabad, Pakistan",
      education: "BBA",
      profession: "Marketing Manager",
      maritalStatus: "Never Married",
      image: "https://images.unsplash.com/photo-1621012430273-a8ff0134c58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      name: "Mehreen Syed",
      age: "28",
      height: "5'5\"",
      location: "Rawalpindi, Pakistan",
      education: "Masters in Psychology",
      profession: "Clinical Psychologist",
      maritalStatus: "Never Married",
      image: "https://images.unsplash.com/photo-1621012430381-4e95d521f243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    // Add more profiles here...
  ];

  const totalPages = Math.ceil(profiles.length / profilesPerPage);
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 inline-block text-transparent bg-clip-text mb-4">
            Featured Profiles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover your perfect match among our carefully curated selection of profiles
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <select className="px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 outline-none">
              <option>Age: All</option>
              <option>20-25</option>
              <option>26-30</option>
              <option>31-35</option>
            </select>
            <select className="px-4 py-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 outline-none">
              <option>Location: All</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Karachi</option>
            </select>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg transition-all ${
                  currentPage === page
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-pink-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProfiles;