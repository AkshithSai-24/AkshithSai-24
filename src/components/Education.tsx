"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'Maturi Venkata Subba Rao Engineering College',
    location: 'Hyderabad, Telangana, India',
    period: '2022 - 2026',
    logo: 'MVSR',
    description: 'Specializing in IoT, Cyber Security & Blockchain. Focused on building a strong foundation in computer science fundamentals and emerging technologies.',
    learnings: [
      'IoT, Cyber Security & Blockchain specialization',
      'Advanced algorithms and data structures',
      'Machine Learning and Deep Learning fundamentals',
      'Cloud computing and distributed systems'
    ]
  },
  {
    degree: 'Secondary & Higher Secondary Education',
    institution: 'St. Francis De Sales High School',
    location: 'Hyderabad, Telangana, India',
    period: '2010 - 2020',
    logo: 'SFS',
    description: 'Completed secondary education with a comprehensive curriculum focusing on Mathematics, Science, and Social Studies. Built a strong academic foundation through rigorous coursework and active participation in school-level competitions and seminars.',
    learnings: [
      'Strong foundation in Mathematics and Science',
      'Active participation in Science Fairs and Seminars',
      'Leadership roles in school student council',
      'Consistent academic excellence'
    ]
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and specialized technical training
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card/70 rounded-2xl shadow-lg hover:shadow-xl border border-border px-6 py-8 flex flex-col backdrop-blur-[2px] transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.25)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-display font-bold text-xl gradient-text">{edu.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-left group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap size={18} /> <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <MapPin size={14} className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-normal text-balance">
                  {edu.description}
                </p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm font-semibold text-foreground mb-1">Key Focus Areas:</p>
                  <ul className="space-y-2 mb-2">
                    {edu.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};