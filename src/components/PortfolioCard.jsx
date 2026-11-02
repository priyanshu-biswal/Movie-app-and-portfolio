import React, { useState } from 'react';
import profilePhoto from '../public/img124.png';

const SkillBadge = ({ name, category }) => {
  const isTech = category === 'tech';
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold text-white ${isTech ? 'bg-blue-600' : 'bg-emerald-600'}`}>
      {name}
    </span>
  );
};

export const PortfolioCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);

  const skillsData = [
    { id: 1, name: "React", category: "tech" },
    { id: 2, name: "Tailwind CSS", category: "tech" },
    { id: 3, name: "JavaScript", category: "tech" },
    { id: 4, name: "UI/UX Design", category: "design" },
  ];

  return (
    <div className={`w-full max-w-sm rounded-2xl p-6 shadow-xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-end">
        <button
          type="button"
          aria-pressed={isDarkMode}
          onClick={() => setIsDarkMode((previousMode) => !previousMode)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}`}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>

      <div className="flex flex-col items-center my-4">
        <img
          src={profilePhoto}
          alt="Priyanshu Biswal"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mb-2"
        />
      </div>

      <h2 className="text-xl font-bold text-center">Priyanshu Biswal</h2>
      <p className={`mb-3 text-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Frontend Developer
      </p>
      <p className="text-sm text-center leading-relaxed mb-4">
        Passionate about crafting dynamic, accessible, and clean user interfaces using React & Tailwind.
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {skillsData.map((skill) => (
          <SkillBadge key={skill.id} name={skill.name} category={skill.category} />
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          aria-label={`Like Priyanshu Biswal, ${likes} likes`}
          onClick={() => setLikes((l) => l + 1)}
          className="flex-1 rounded-lg bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Like ({likes})
        </button>
        <button
          type="button"
          onClick={() => setHasGreeted(true)}
          className="flex-1 rounded-lg bg-gray-600 py-2 font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
        >
          Say hello
        </button>
      </div>
      {hasGreeted && (
        <p className="mt-3 text-center text-sm" role="status">
          Greetings from Priyanshu!
        </p>
      )}
    </div>
  );
};