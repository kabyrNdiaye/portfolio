"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">À propos</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" delay={0.1} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Future ingénieure en Génie Logiciel et Systèmes d'Information, actuellement en Master 2 à l'École
              Supérieure Polytechnique de Dakar. Mon parcours m'a permis de maîtriser le développement
              full-stack, les bases de données, les systèmes réseaux et les bases du Machine Learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionnée par l'innovation technologique, je cherche à apporter une contribution concrète
              à des projets ambitieux, avec rigueur et engagement. Ouverte aux opportunités en développement
              logiciel et en ingénierie informatique.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Analyse & Conception", "Travail d'équipe", "Résolution de problèmes"].map((badge) => (
                <motion.span
                  key={badge}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square flex items-center justify-center"
            >
              <img
                src="/a.jpg"
                alt="Photo professionnelle"
                className="rounded-2xl w-full h-full object-cover"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
