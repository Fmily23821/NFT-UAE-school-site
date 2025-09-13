import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">{t('hero.title')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('navigation.home')}
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('features.title')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('common.aboutUs')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              {t('common.contactUs')}
            </Link>
            
            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Globe size={20} />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {t('navigation.login')}
              </Link>
              <Link
                to="/register"
                className="btn-primary"
              >
                {t('common.getStarted')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link
                to="/features"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('features.title')}
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.aboutUs')}
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.contactUs')}
              </Link>
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2">
                <Globe size={20} />
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded ${language === 'en' ? 'bg-primary-100 text-primary-600' : 'text-gray-700'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className={`px-3 py-1 rounded ${language === 'ar' ? 'bg-primary-100 text-primary-600' : 'text-gray-700'}`}
                >
                  ع
                </button>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('common.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;