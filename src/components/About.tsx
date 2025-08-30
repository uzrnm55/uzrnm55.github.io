import React, { useState } from 'react';
import { Users, Target, Heart, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: 'Expert Coaching',
      description: 'Experienced coaches with professional backgrounds in competitive water polo.'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Comprehensive training programs for all skill levels, from beginners to advanced players.'
    },
    {
      icon: Heart,
      title: 'Team Spirit',
      description: 'Building strong friendships and teamwork through the sport of water polo.'
    }
  ];

  const galleryPhotos = [
    {
      id: 1,
      src: 'WaterPolo.jpg',
      alt: 'Team celebration after winning championship',
      title: 'Championship Victory',
      category: 'Competitions',
      date: 'December 2024'
    },
    {
      id: 2,
      src: 'letsPlay.jpg',
      alt: 'Players during practice session',
      title: 'Skill Practice Session',
      category: 'Practice',
      date: 'November 2024'
    },
    {
      id: 3,
      src: 'la28.jpg',
      alt: 'Team group photo',
      title: 'Team Photo',
      category: 'Team',
      date: 'October 2024'
    },
    {
      id: 4,
      src: 'taj.jpg',
      alt: 'Tournament action shot',
      title: 'Tournament Action',
      category: 'Competitions',
      date: 'September 2024'
    },
    {
      id: 5,
      src: 'centeredLogo.jpg',
      alt: 'Coaching session',
      title: 'Coaching Session',
      category: 'Practice',
      date: 'August 2024'
    },
    {
      id: 6,
      src: 'centeredLogo.jpg',
      alt: 'Team building event',
      title: 'Team Building',
      category: 'Events',
      date: 'July 2024'
    }
  ];



  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryPhotos.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryPhotos.length - 1 : selectedImage - 1);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Our Club
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
At the beginning of 2024, we formed the first ever water polo club in the Florida Panhandle.  We have been practicing and playing informally since Sept 2021 at the Taj Renee Community Aquatic Center in Destin, Florida.
We welcome men and women, experienced players and novices, in-shape and out-of-shape athletes, and anyone who can swim and enjoys a fun workout in a beautiful location.  Our group consists of players aged 16 to 58, some with high school and college club experience, and a few Eastern European national team alumni.  We can teach you how to play, and help you sharpen your skills.
We play on Sundays from 11am to 1pm throughout the winter.  Come and join us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We are working to establish the sport of Water Polo in Northwest Florida for adults and youth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We practice and play informally the Taj Renee Community Aquatic Center in beautiful Destin, Florida. 
              Join us on Sundays from 11am to 1pm.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">30+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Members</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">15</div>
                <div className="text-gray-600 dark:text-gray-300">Championships</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">4</div>
                <div className="text-gray-600 dark:text-gray-300">Years Strong</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Photo Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {galleryPhotos.slice(0, 4).map((photo, index) => (
                <div 
                  key={photo.id} 
                  className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs font-medium">{photo.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>



        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full p-4">
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button 
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <img 
                src={galleryPhotos[selectedImage].src} 
                alt={galleryPhotos[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">{galleryPhotos[selectedImage].title}</h3>
                <p className="text-sm opacity-90">{galleryPhotos[selectedImage].category} • {galleryPhotos[selectedImage].date}</p>
              </div>

              {/* Download Button */}
              <button 
                onClick={() => window.open(galleryPhotos[selectedImage].src, '_blank')}
                className="absolute top-4 left-4 text-white hover:text-gray-300 z-10"
              >
                <Download size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
