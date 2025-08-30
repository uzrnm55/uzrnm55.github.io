import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200">
      <div className="container-max py-12 px-8 flex justify-center items-center">
        <span className="text-2xl font-bold mr-6">Panhandle</span>
        <img 
          src="centeredLogo.jpg" 
          alt="Panhandle Pirates Logo" 
          className="w-16 h-16 rounded-full object-cover mx-2"
        />
        <span className="text-2xl font-bold ml-6">Pirates</span>
      </div>
    </footer>
  );
};

export default Footer;
