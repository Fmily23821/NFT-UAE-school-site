import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Import translation files
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

// Define language types
export type Language = 'en' | 'ar';

// Define translation structure
export type Translations = typeof enTranslations;

// Create context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation files mapping
const translations: Record<Language, Translations> = {
  en: enTranslations,
  ar: arTranslations,
};

// Hook to get nested object value by key path
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : '';
  }, obj) || path; // Return the key if translation not found
};

// Language Context Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get initial language from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('eduvault-language') as Language;
    return savedLanguage || 'en';
  });

  // Set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('eduvault-language', lang);
    
    // Update document direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update body class for RTL styling
    document.body.className = document.body.className.replace(/rtl|ltr/g, '');
    document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
  };

  // Translation function
  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    return translation;
  };

  // Check if current language is RTL
  const isRTL = language === 'ar';

  // Initialize language settings on mount
  useEffect(() => {
    setLanguage(language);
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Higher-order component for easy language switching
export const withLanguage = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const { language, setLanguage, t, isRTL } = useLanguage();
    return (
      <Component
        {...props}
        language={language}
        setLanguage={setLanguage}
        t={t}
        isRTL={isRTL}
      />
    );
  };
};

export default LanguageContext;