"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Machine Learning Engineer Associate',
    authority: 'Amazon Web Services',
    logo: '/logos/aws.png',
    credential: 'https://www.credly.com/users/akshith-sai-kondamadugu/badges',
    description: [
      'Expertise in building, training, and deploying ML models on AWS',
      'Proficiency in SageMaker, MLOps, and data engineering'
    ]
  },
  {
    name: 'AWS Certified AI Practitioner',
    authority: 'Amazon Web Services',
    logo: '/logos/aws.png',
    credential: 'https://www.credly.com/users/akshith-sai-kondamadugu/badges',
    description: [
      'Foundational knowledge of AI/ML concepts and AWS AI services',
      'Understanding of generative AI and responsible AI practices'
    ]
  },
  {
    name: 'Data Science and Machine Learning',
    authority: 'HarvardX - edX',
    logo: 'https://www.edx.org/images/logos/edx-logo-elm.svg',
    description: [
      'Comprehensive training in statistical modeling and data analysis',
      'Hands-on experience with R and Python for data science'
    ]
  },
  {
    name: 'Multi AI Agent Systems with CrewAI',
    authority: 'DeepLearning.AI',
    logo: '/logos/deeplearning.png',
    description: [
      'Designing and orchestrating multi-agent AI workflows',
      'Implementing autonomous agents for complex task automation'
    ]
  }
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across AI, machine learning, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {cert.credential ? (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg block"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors">
                      <img
                        src={cert.logo}
                        alt={cert.authority}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-primary text-lg">${cert.authority.substring(0, 3).toUpperCase()}</span>`;
                        }}
                      />
                    </div>
                    <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {cert.authority}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {cert.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </a>
              ) : (
                <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors">
                      <img
                        src={cert.logo}
                        alt={cert.authority}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-primary text-lg">${cert.authority.substring(0, 3).toUpperCase()}</span>`;
                        }}
                      />
                    </div>
                    <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {cert.authority}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {cert.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};