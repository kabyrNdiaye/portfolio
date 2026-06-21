import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border">
      <Reveal className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ingénieure en Génie Logiciel et Systèmes d'Information — ESP Dakar.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Compétences
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Expérience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projets
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Réseaux sociaux</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. Tous droits réservés.</p>
        </div>
      </Reveal>
    </footer>
  )
}
