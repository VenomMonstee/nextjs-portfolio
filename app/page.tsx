'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, ChevronDown, Code, Globe, Server } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BackgroundVideo from '@/components/ui/BackgroundVideo'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 text-gray-800 dark:text-gray-200">
      <BackgroundVideo />
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease:"easeInOut" }}
          >
            Vedant
          </motion.h1>
          <motion.ul 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease:"easeInOut" }}
          >
            <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
          </motion.ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg mt-8 backdrop-blur-sm">
        <motion.section 
          id="about" 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease:"easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease:"easeInOut" }}
          >
            <Image
              src="/deadpool.jpg?height=200&width=200&text=V"
              alt="Vedant"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease:"easeInOut" }}
          >
            Hi I&apos; m Vedant
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease:"easeInOut" }}
          >
            Im Just Fan of Anime Deadpool and Anime.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <a href="https://github.com/VenomMonstee" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button></a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="https://www.linkedin.com/in/vedant-gadge/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button></a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <a href="/Vedant-Gadge_7620608664.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><FileText className="mr-2 h-4 w-4" /> Resume</Button></a>
            </motion.div>
          </motion.div>
          <motion.a 
            href="#skills" 
            className="mt-12 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease:"easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </motion.a>
        </motion.section>

        <motion.section 
          id="skills" 
          className="mb-16"
          ref={skillsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease:"easeInOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="initial"
            animate={skillsInView ? "animate" : "initial"}
          >
            {[
              { name: 'Frontend Development', icon: <Code className="h-6 w-6 mb-2" /> },
              { name: 'Backend Development', icon: <Server className="h-6 w-6 mb-2" /> },
              { name: 'Responsive Design', icon: <Globe className="h-6 w-6 mb-2" /> },
              { name: 'React & Next.js', icon: <Code className="h-6 w-6 mb-2" /> },
              { name: 'Node.js', icon: <Server className="h-6 w-6 mb-2" /> },
              { name: 'TypeScript', icon: <Code className="h-6 w-6 mb-2" /> },
              { name: 'RESTful APIs', icon: <Globe className="h-6 w-6 mb-2" /> },
              { name: 'Database Design', icon: <Server className="h-6 w-6 mb-2" /> }
            ].map((skill) => (
              <motion.div key={skill.name} variants={fadeInUp}>
                <Card className="bg-white/90 dark:bg-gray-800/90">
                  <CardContent className="flex flex-col items-center justify-center h-32 text-center">
                    {skill.icon}
                    <span className="text-lg font-semibold">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="mb-16"
          ref={projectsRef}
          initial={{ opacity: 0, y: 60 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease:"easeInOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={stagger}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
          >
            {[
              { name: 'AnimeInfoDB', description: 'AnimeInfoDB is my project that fetches and displays detailed anime information using the Jikan API.' },
              { name: 'Weather-Website', description: 'Developed a real-time weather dashboard using React and OpenWeather API to display accurate and dynamic weather updates.' },
            ].map((project, index) => (
              <motion.div key={project.name} variants={fadeInUp}>
                <Card className="bg-white/90 dark:bg-gray-800/90">
                  <CardContent className="p-6">
                    <Image
                      src={`/${project.name === 'AnimeInfoDB' ? 'anime' : 'weather'}.jpg?height=200&width=400&text=Project+${index + 1}`}
                      alt={project.name}
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex space-x-4">
                      <a href={project.name === 'AnimeInfoDB' ? "https://anime-db-delta.vercel.app/" : "https://github.com/VenomMonstee/Weather-Website-"} target="_blank">
                        <Button variant="outline" size="sm">View Project</Button>
                      </a>
                      <a href={project.name === 'AnimeInfoDB' ? "https://github.com/VenomMonstee/anime-db" : "https://github.com/VenomMonstee/Weather-Website-"} target="_blank">
                        <Button variant="outline" size="sm">GitHub</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <Card className="bg-white/90 dark:bg-gray-800/90">
            <CardContent className="p-6">
              <p className="text-center mb-4">Interested in collaborating or have a project in mind? Let &apos; s connect!</p>
              <motion.div 
                className="flex justify-center space-x-4"
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <a href="mailto:vedantgadge10@gmail.com">
                  <Button><Mail className="mr-2 h-4 w-4" /> Email Me</Button></a>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <a href="https://www.linkedin.com/in/vedant-gadge/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button></a>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-purple-200 dark:bg-purple-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Vedant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

