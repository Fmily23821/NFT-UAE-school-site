import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Trophy, 
  Users, 
  GraduationCap, 
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Lock,
  Award
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden h-[86.66vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background.jpg')`
          }}
        ></div>
        
        <div className="relative container-custom section-padding h-[100%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-responsive-3xl font-bold mb-6 leading-tight">
                {t('hero.subtitle')}
              </h1>
              <p className="text-xl mb-8 text-primary-100 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center">
                  <Globe className="mr-2" size={20} />
                  {t('hero.watchDemo')}
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
                  alt="UAE students in modern classroom with tablets"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">UAE Digital Learning Environment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">
                Why UAE Schools Choose EduVault Passport?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionizing UAE education with cutting-edge blockchain technology and secure digital credentials
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <Shield className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Certificates</h3>
                <p className="text-gray-600">
                  Blockchain-verified certificates that cannot be forged or tampered with.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors">
                  <Zap className="text-secondary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Verification</h3>
                <p className="text-gray-600">
                  Verify any certificate or achievement in seconds with QR codes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                  <Trophy className="text-accent-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">NFT Badges</h3>
                <p className="text-gray-600">
                  Gamified achievement system with collectible NFT badges.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Lock className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">IPFS Storage</h3>
                <p className="text-gray-600">
                  Decentralized storage for multimedia content and documents.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">
                How EduVault Passport Works for UAE Schools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, secure, and efficient process for managing digital credentials in UAE educational institutions
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Issue Certificate",
                description: "UAE teachers create and issue digital certificates to students",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                step: "02", 
                title: "Store on Blockchain",
                description: "Certificates are securely stored on the blockchain network",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                step: "03",
                title: "Share Securely", 
                description: "UAE students can share credentials with time-limited links",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              },
              {
                step: "04",
                title: "Verify Instantly",
                description: "UAE universities and employers verify credentials instantly",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">
                Built for UAE Education Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored experiences for UAE students, teachers, and school administrators
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="UAE students working together in classroom"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Students</h3>
                <p className="text-gray-600 mb-4">
                  Build your lifelong digital portfolio with achievements, certificates, and memories.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Digital portfolio management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Achievement tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Secure credential sharing
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="UAE teacher in modern classroom"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Teachers</h3>
                <p className="text-gray-600 mb-4">
                  Issue certificates, track student progress, and manage achievements efficiently.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Certificate issuance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Progress tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Student management
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="UAE school administration building"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                      <Building2 className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Administrators</h3>
                <p className="text-gray-600 mb-4">
                  Manage school data, oversee operations, and ensure compliance with regulations.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    School management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Analytics & reporting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Compliance monitoring
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold mb-4">
                Trusted by UAE Schools Nationwide
              </h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Join the growing community of UAE educational institutions using EduVault Passport
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students", icon: Users },
              { number: "500+", label: "Schools", icon: Building2 },
              { number: "99.9%", label: "Uptime", icon: Zap },
              { number: "50,000+", label: "Certificates", icon: Award }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">
                What UAE Schools Are Saying
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real feedback from UAE educational institutions using EduVault Passport
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "EduVault Passport has completely transformed how we manage student credentials at our Dubai school. The blockchain security gives us peace of mind and parents trust our system completely.",
                author: "Dr. Sarah Al-Mansouri",
                role: "Principal, Dubai International School",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                quote: "The instant verification feature has streamlined our admissions process. UAE universities can verify our students' credentials in seconds, making the application process much smoother.",
                author: "Ahmed Hassan Al-Rashid",
                role: "Academic Director, Abu Dhabi International School",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                quote: "Our UAE students love the gamified badge system. It has increased engagement and motivation significantly, and they're proud to showcase their achievements.",
                author: "Fatima Al-Zahra Al-Maktoum",
                role: "Technology Coordinator, Sharjah American School",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">
                Lifelong Digital Records from School to Graduation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From FS1 to Grade 13 and beyond - preserve every achievement, certificate, and memory in your secure digital portfolio
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete Academic Journey</h3>
                    <p className="text-gray-600">
                      Track every milestone from early years through graduation with blockchain-verified records that last a lifetime.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-secondary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Graduation Certificates</h3>
                    <p className="text-gray-600">
                      Secure graduation diplomas and certificates that universities and employers can verify instantly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Achievement Portfolio</h3>
                    <p className="text-gray-600">
                      Preserve all achievements, extracurricular activities, and special moments in your permanent digital vault.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/graduation.jpg"
                  alt="UAE school graduation ceremony with students throwing caps in celebration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">UAE School Graduation Ceremony</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-responsive-2xl font-bold mb-4">
              Ready to Transform Your UAE School?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
              Join hundreds of UAE schools already using EduVault Passport to secure their students' futures with blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center">
                <Globe className="mr-2" size={20} />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;