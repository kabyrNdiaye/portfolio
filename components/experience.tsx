"use client"

import { Card } from "@/components/ui/card"
import { Calendar, GraduationCap, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal, RevealGroup, revealItem } from "@/components/reveal"

export function Experience() {
  const experiences = [
    {
      title: "Stagiaire en alternance",
      company: "Itea Expert Africa",
      location: "Sénégal",
      period: "Septembre 2025 - Juin 2026",
      bullets: [
        "Conception et développement du site web de l'école ITEA School sous WordPress",
        "Développement d'une application mobile et web avec Flutter pour ARS (FRANCE)",
      ],
      tags: ["WordPress", "Flutter", "Développement Web", "Développement Mobile"],
    },
    {
      title: "Stagiaire Développeuse React",
      company: "Africa Link Technologie",
      location: "Sénégal",
      period: "Mai 2023 - Juin 2023",
      bullets: [
        "Développement de l'application de gestion des dossiers médicaux avec React",
        "Conception des interfaces utilisateur",
        "Participation à la planification du projet",
      ],
      tags: ["React", "UI/UX", "Gestion de projet"],
    },
  ]

  const education = [
    {
      degree: "Master 2 en Génie Logiciel et Systèmes d'Information",
      school: "École Supérieure Polytechnique (ESP)",
      period: "2025 - 2026",
    },
    {
      degree: "Master 1 en Génie Logiciel et Systèmes d'Information",
      school: "École Supérieure Polytechnique (ESP)",
      period: "2024 - 2025",
    },
    {
      degree: "Licence en Génie Logiciel et Systèmes d'Information",
      school: "École Supérieure Polytechnique (ESP)",
      period: "2021 - 2023",
    },
    {
      degree: "Baccalauréat",
      school: "Lycée Seydina Limamoulaye",
      period: "2020 - 2021",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Expériences professionnelles */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Expérience professionnelle</h2>
        </Reveal>
        <RevealGroup className="space-y-6 mb-16" stagger={0.1}>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={revealItem} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-muted-foreground leading-relaxed">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>

        {/* Formation */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Formation</h2>
        </Reveal>
        <RevealGroup className="space-y-4" stagger={0.08}>
          {education.map((edu, index) => (
            <motion.div key={index} variants={revealItem} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="p-2 bg-primary/10 rounded-lg mt-1"
                    >
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground ml-12 md:ml-0">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
