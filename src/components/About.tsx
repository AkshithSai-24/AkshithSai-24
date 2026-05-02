"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Zap, Cloud, Database, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Generative AI',
    description: 'Expertise in LLMs, RAG, and Agentic AI systems using LangChain and LangGraph.',
  },
  {
    icon: Zap,
    title: 'Machine Learning',
    description: 'Building and deploying predictive models on AWS SageMaker and Google Cloud Vertex AI.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Hands-on experience with AWS and GCP for scalable model deployment and MLOps.',
  },
  {
    icon: ShieldCheck,
    title: 'Blockchain',
    description: 'Developing decentralized applications and smart contracts using Solidity and Ethereum.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing ingestion pipelines and semantic layers using FAISS and vector databases.',
  },
  {
    icon: Code2,
    title: 'Full Stack Dev',
    description: 'Building responsive frontends with React and robust backends with FastAPI and Flask.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering the future of autonomous intelligence through Generative AI and scalable cloud architectures
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Professional Summary</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Computer Science Engineering graduate (B.E., 2026)</span> with a deep passion for artificial intelligence and its practical applications. My journey has been defined by hands-on experience in <span className="text-primary font-medium">Machine Learning, Deep Learning, and Generative AI</span>.
              </p>
              <p>
                I specialize in building <span className="text-primary font-medium">Agentic AI systems</span> and Retrieval-Augmented Generation (RAG) pipelines that turn static data into interactive intelligence. With internships at both <span className="text-foreground font-medium">Google Cloud and AWS</span>, I have developed a strong foundation in cloud-based model deployment, MLOps, and scalable architecture.
              </p>
              <p>
                Beyond AI, I explore the intersection of <span className="text-primary font-medium">Blockchain and Web3</span>, building decentralized applications that ensure security and transparency. I am driven by the challenge of architecting end-to-end solutions that are not only innovative but also robust and production-ready.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};