"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Globe, Layers, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal, RevealGroup, revealItem } from "@/components/reveal"

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Langages & Développement",
      skills: ["Java", "PHP", "JavaScript", "C", "Flutter", "Python"],
    },
    {
      icon: Globe,
      title: "Web & Frameworks",
      skills: ["HTML", "CSS", "React JS", "Next.js", "WordPress", "Node.js"],
    },
    {
      icon: Database,
      title: "Bases de données",
      skills: ["SQL", "PostgreSQL", "Supabase", "MySQL", "Conception relationnelle", "Intégration backend"],
    },
    {
      icon: Server,
      title: "Systèmes & Réseaux",
      skills: ["Linux", "Windows Server", "TCP/IP", "DHCP", "DNS", "Docker", "Virtualisation"],
    },
    {
      icon: Layers,
      title: "Méthodologies",
      skills: ["UML", "Algorithmique", "Structures de données", "Gestion de projet", "Design Patterns"],
    },
    {
      icon: Smartphone,
      title: "Data & IA",
      skills: ["Big Data", "Machine Learning", "YOLOv8", "Computer Vision", "TensorFlow"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Compétences techniques</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 bg-primary/10 rounded-lg"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-sm text-muted-foreground">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
