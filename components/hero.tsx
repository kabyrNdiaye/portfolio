"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
            >
              Sokhna Maimounatou Kabyr Ndiaye
              <br />
              <span className="text-primary">Ingénieure Logiciel</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Actuellement en Master 2 en Génie Informatique à l'École Supérieure Polytechnique (ESP).
              Spécialisée en développement logiciel et systèmes d'information, avec une solide maîtrise
              de la programmation et des technologies modernes.
            </motion.p>
          </div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="group">
              <a href="#projects">
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
