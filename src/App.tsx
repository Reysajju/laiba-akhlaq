import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, BookOpen, GraduationCap, Mail, MapPin, Phone, Award, Languages, Heart } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-48 w-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=400&fit=crop')`,
            backgroundColor: 'rgba(10, 102, 194, 0.8)',
            backgroundBlend: 'overlay'
          }}
        />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative -mt-16 bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative -mt-24 md:-mt-32">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  src="https://images.unsplash.com/photo-1542380841-5eef57349ca1?w=400&h=400&fit=crop"
                  alt="Laiba Akhlaq"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              
              <div className="flex-1">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h1 className="text-3xl font-bold mb-1">Laiba Akhlaq</h1>
                  <p className="text-xl text-gray-600 mb-2">Quality Control | Teacher</p>
                  <p className="text-gray-600 mb-4">Chemistry Graduate specializing in Laboratory Research & Chemical Analysis</p>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap gap-4 text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:laibaakhlaq638@gmail.com" className="hover:text-blue-600">laibaakhlaq638@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <a href="tel:03092797580" className="hover:text-blue-600">03092797580</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 space-y-8">
        <AnimatedSection>
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Beaker className="w-6 h-6 text-blue-600" />
              Skills & Strengths
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Problem Solving', 'Team Work', 'Teaching', 'Quality Control Testing', 'HPLC', 'VNMR', 'HNMR', 'Quality Assurance', 'MS Office', 'Quality Audit'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg">Lab Chemist</h3>
                <p className="text-gray-600">Liquat National Hospital - Karachi, Pakistan</p>
                <p className="text-gray-500">May 2024 - Oct 2024</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Teacher</h3>
                <p className="text-gray-600">Taqwa Model School (Defence Campus) - Karachi, Pakistan</p>
                <p className="text-gray-500">Sep 2023 - Oct 2024</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg">BS Chemistry</h3>
                <p className="text-gray-600">FUUAST - Karachi</p>
                <p className="text-gray-500">Graduated 2022 | GPA: 3.2</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg">Intermediate (Science)</h3>
                <p className="text-gray-600">Govt. Degree College Green Belt - Karachi</p>
                <p className="text-gray-500">2018 | Score: 76%</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Matriculation (Science)</h3>
                <p className="text-gray-600">Hira Public Secondary School - Karachi</p>
                <p className="text-gray-500">2016 | Score: 84%</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Certifications
              </h2>
              <div>
                <h3 className="font-bold">Internship Certificate</h3>
                <p className="text-gray-600">ICCBS- Karachi University | 2021</p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Languages className="w-6 h-6 text-blue-600" />
                Languages
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Urdu</p>
                  <p className="text-gray-600">Native</p>
                </div>
                <div>
                  <p className="font-bold">English</p>
                  <p className="text-gray-600">Medium</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-blue-600" />
                Hobbies
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cooking</li>
                <li>Book Reading</li>
              </ul>
            </section>
          </AnimatedSection>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Laiba Akhlaq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;