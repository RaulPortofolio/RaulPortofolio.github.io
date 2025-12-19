import React from 'react';

export default function RobloxPortfolio() {
  const projects = [
    {
      title: 'Adventure Obby',
      description: 'A challenging obstacle course game with unique mechanics and custom animations.',
      youtubeId: 'dQw4w9WgXcQ',
      role: 'Scripter'
    },
    {
      title: 'Roleplay Simulator',
      description: 'Open-world roleplay experience with custom jobs, housing system, and economy.',
      youtubeId: 'dQw4w9WgXcQ',
      role: 'Lead Scripter'
    },
    {
      title: 'Tower Defense',
      description: 'Strategic tower defense game with multiple maps and upgrade systems.',
      youtubeId: 'dQw4w9WgXcQ',
      role: 'Gameplay Scripter'
    },
    {
      title: 'Combat Arena',
      description: 'Fast-paced PvP combat game with custom weapons and abilities.',
      youtubeId: 'dQw4w9WgXcQ',
      role: 'Combat Scripter'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6" style={{ fontFamily: 'monospace' }}>
      
      {/* Header */}
      <header className="border-4 border-black p-8 mb-8 max-w-6xl mx-auto" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)' }}>
        <h1 className="text-5xl font-bold mb-2">ROBLOX SCRIPTER</h1>
        <p className="text-xl text-gray-700">3 years of scripting experience</p>
      </header>

      {/* Projects */}
      <div className="max-w-6xl mx-auto space-y-8 mb-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border-4 border-black bg-white overflow-hidden"
            style={{ 
              marginLeft: index % 2 === 0 ? '0' : '40px',
              marginRight: index % 2 === 0 ? '40px' : '0'
            }}
          >
            {/* Video */}
            <div className="border-b-4 border-black aspect-video w-full bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="inline-block border-4 border-black px-3 py-1 text-sm font-bold whitespace-nowrap ml-4 transition-transform cursor-pointer" style={{ background: 'linear-gradient(135deg, #fde047 0%, #fcd34d 100%)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  {project.role}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto border-4 border-black p-8 mb-8" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
        <h3 className="text-2xl font-bold mb-6">SKILLS</h3>
        <div className="flex flex-wrap gap-3">
          {['Lua Scripting', 'Game Mechanics', 'DataStores', 'Remote Events', 'Module Scripts', 'Combat Systems', 'Inventory Systems', 'Server-Client Communication'].map((skill, index) => (
            <span 
              key={index}
              className="border-4 border-black bg-gray-100 px-4 py-2 text-sm font-bold cursor-pointer"
              style={{ display: 'inline-block', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-6xl mx-auto border-4 border-black bg-white p-8">
        <h3 className="text-2xl font-bold mb-4">CONTACT</h3>
        <p className="text-gray-700 mb-3">Interested in working together?</p>
        <div 
          className="border-4 border-black px-5 py-3 text-lg font-bold cursor-pointer"
          style={{ display: 'inline-block', transition: 'transform 0.2s', background: 'linear-gradient(135deg, #fde047 0%, #fcd34d 100%)' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Discord: raulmobile123
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t-4 border-black">
      </footer>

    </div>
  );
}