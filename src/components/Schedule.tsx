import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp, Trophy, Award, Target } from 'lucide-react';

const Schedule: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const practices = [
    {
      day: 'Thursday',
      time: '7:00 PM - 9:00 PM',
  location: 'Taj Renee Aquatic Center', // Will be rendered as a link below
      group: 'Skill Practice'
    },
    {
      day: 'Sunday',
      time: '11:00 AM - 1:00 PM',
      location: 'Taj Renee Aquatic Center',
      group: 'Game Day'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Atlanta Cup Dynamo',
      date: 'Septempber 20 - 21',
      link: '9:https://www.dynamowaterpolo.com/atlantacup',
      location: 'State Aquatic Center',
      address: '1234 Olympic Drive, State City, ST 12345',
      type: 'Competition',
      description: 'Join us for the biggest water polo tournament of the season! Compete against top teams from across the region in this exciting championship event.',
      registrationDeadline: 'December 10, 2024',
      entryFee: '$25 per player',
      ageGroups: ['U14', 'U16', 'U18', 'Open'],
      maxTeams: 24,
      currentTeams: 18,
      highlights: ['Championship trophies', 'All-Star selections', 'College scouts present', 'Professional photography'],
      contact: 'tournament@panhandlepirates.com'
    },
    {
      id: 2,
      title: 'Huntsville Saturday Scrimmage',
      date: 'November 8, 2025',
      location: 'Community Aquatic Center',
      address: '567 Pool Street, City, ST 12345',
      type: 'Friendly',
      description: 'Our team has been invited to participate in a scrimmage with teams from alabama, tennessee and georgia.',
      entryFee: 'Free for members, $10 for guests',
      ageGroups: ['All ages welcome'],
      maxTeams: 'Unlimited',
      currentTeams: 'Open registration',
      highlights: ['Holiday decorations', 'Family activities', 'Skill competitions', 'Holiday treats'],
      contact: 'events@panhandlepirates.com'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Competition':
  return <Trophy className="w-5 h-5 text-emerald-600" />;
      case 'Training':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'Friendly':
        return <Award className="w-5 h-5 text-green-600" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-600" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Competition':
  return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Training':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Friendly':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };



  return (
  <section id="schedule" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Practice Schedule
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for regular practices and special events. All skill levels welcome!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Practice Schedule */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Weekly Practice Schedule</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {practices.map((practice, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                                     <div className="flex items-center justify-between mb-4">
                     <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{practice.day}</h4>
                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                       practice.group === 'Skill Practice' 
                         ? 'bg-blue-100 text-blue-800' 
                         : 'bg-green-100 text-green-800'
                     }`}>
                       {practice.group}
                     </span>
                   </div>
                                     <div className="space-y-3 text-gray-600 dark:text-gray-300">
                     <div className="flex items-center">
                       <Clock className="w-5 h-5 mr-3 text-emerald-600" />
                       <span className="font-medium">{practice.time}</span>
                     </div>
                     <div className="flex items-center">
                       <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                       {practice.location === 'Taj Renee Aquatic Center' ? (
                         <a
                           href="https://www.google.com/maps/search/?api=1&query=4345+Commons+Dr+W,+Destin,+FL+32541"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-emerald-600 hover:underline"
                         >
                           {practice.location}
                         </a>
                       ) : (
                         <span>{practice.location}</span>
                       )}
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Event Header */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                        {getEventIcon(event.type)}
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{event.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-300 mt-1">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {event.location === 'Taj Renee Aquatic Center' || event.location === 'Taj Renee Community Aquatic Center' ? (
                                <a
                                  href="https://www.google.com/maps/search/?api=1&query=4345+Commons+Dr+W,+Destin,+FL+32541"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-600 hover:underline"
                                >
                                  {event.location}
                                </a>
                              ) : (
                                <span>{event.location}</span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end space-x-3 mt-2 sm:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                        {expandedEvent === event.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Event Details */}
                  {expandedEvent === event.id && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="pt-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Left Column */}
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Registration Details</h5>
                              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <div>Deadline: {event.registrationDeadline}</div>
                                <div>Entry Fee: {event.entryFee}</div>
                                <div>Age Groups: {Array.isArray(event.ageGroups) ? event.ageGroups.join(', ') : event.ageGroups}</div>
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Team Capacity</h5>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {typeof event.maxTeams === 'number' 
                                  ? `${event.currentTeams}/${event.maxTeams} teams registered`
                                  : event.currentTeams
                                }
                              </div>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Event Highlights</h5>
                            <div className="flex flex-wrap gap-2">
                              {event.highlights.map((highlight, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                          <button className="btn-primary flex-1">
                            Register Now
                          </button>
                          <button className="btn-secondary flex-1">
                            Learn More
                          </button>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Questions? Contact us at{' '}
                            <a href={`mailto:${event.contact}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                              {event.contact}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="mt-12 text-center">
            <div className="bg-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-lg mb-6">Start your water polo journey with the Panhandle Pirates!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Contact Us
                </a>
                <a href="#news" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200">
                  Latest News
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
