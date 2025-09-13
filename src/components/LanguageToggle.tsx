import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'compact' | 'minimal';
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '', 
  showLabel = true,
  variant = 'default'
}) => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇦🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
              language === lang.code
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title={lang.name}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as Language)}
          className="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <button
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        onClick={() => {
          const dropdown = document.getElementById('language-dropdown');
          if (dropdown) {
            dropdown.classList.toggle('hidden');
          }
        }}
      >
        <Globe className="w-4 h-4" />
        {showLabel && (
          <span className="hidden sm:inline">
            {currentLanguage?.flag} {currentLanguage?.name}
          </span>
        )}
        <ChevronDown className="w-4 h-4" />
      </button>

      <div
        id="language-dropdown"
        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden group-hover:block hover:block"
        onMouseLeave={() => {
          const dropdown = document.getElementById('language-dropdown');
          if (dropdown) {
            dropdown.classList.add('hidden');
          }
        }}
      >
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
                const dropdown = document.getElementById('language-dropdown');
                if (dropdown) {
                  dropdown.classList.add('hidden');
                }
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center space-x-3 ${
                language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;