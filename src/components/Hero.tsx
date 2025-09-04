import React from 'react';
import { ArrowRight} from 'lucide-react';

const Hero: React.FC = () => {
  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="absolute inset-0 bg-black/10"></div>
  <div className="container-max relative z-10 text-center px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <img 
              src="centeredLogo.jpg" 
              alt="Panhandle Pirates Logo" 
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Panhandle Pirates
            <span className="block text-emerald-600">Water Polo Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the premier water polo club in the Panhandle region. Develop your skills, 
            build teamwork, and compete at the highest level.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
             <a href="#schedule" className="btn-primary flex items-center justify-center space-x-2">
               <span>See Schedule</span>
               <ArrowRight size={20} />
             </a>
             <a href="https://www.facebook.com/profile.php?id=61555120244899#" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center space-x-2">
               <span>Follow Us</span>
               <ArrowRight size={20} />
             </a>
           </div>
        </div>
      </div>
      
      {/* Decorative elements */}
  {/* Water polo ball SVGs */}
    </section>
  );
};

export default Hero;
