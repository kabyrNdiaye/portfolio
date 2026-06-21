"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal, RevealGroup, revealItem } from "@/components/reveal"

export function Projects() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [yoloLoaded, setYoloLoaded] = useState(false)

  const featured = {
    title: "DioDio Glow Skin",
    description:
      "Plateforme e-commerce complète pour DioDio Glow Skin, une marque sénégalaise de cosmétiques naturels et bio. L'application offre une expérience d'achat fluide avec catalogue produits, système de panier, authentification sécurisée, gestion des commandes en temps réel et tableau de bord administrateur. Les données sont stockées et synchronisées via Supabase (PostgreSQL), garantissant performance et scalabilité.",
    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/kabyrNdiaye",
    demo: "https://www.canva.com/design/DAHLVQgHphQ/watch",
  }

  const videoUrl = "https://www.canva.com/design/DAHLVQgHphQ/watch"

  const projects = [
    {
      title: "Bionaproducts",
      description:
        "Plateforme e-commerce pour une marque sénégalaise de produits cosmétiques bio et naturels. Design épuré mettant en avant les bienfaits de la nature et l'excellence des rituels de soin.",
      image: "/biona_products.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: videoUrl,
    },
    {
      title: "Beauty Family Hair",
      description:
        "Application web complète pour la gestion des étudiants, cours et notes. Interface intuitive avec tableau de bord analytique.",
      image: "/university-management-system-dashboard.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Express"],
      demo: videoUrl,
    },


  ]

  const bionaProject = {
    title: "Biona",
    description:
      "Site vitrine pour Biona, une marque sénégalaise de cosmétiques naturels. Présente les produits de la gamme avec leurs bienfaits, met en valeur l'identité de la marque et guide les visiteurs vers les points de vente. Conçu avec une esthétique sobre et élégante qui reflète les valeurs naturelles et authentiques de la marque.",
    tags: ["HTML", "CSS", "Site vitrine", "Responsive Design"],
    video: "/biona.mp4",
    demo: "/biona.mp4",
  }

  const byfaarmProject = {
    title: "Byfaarm",
    description:
      "Site vitrine pour Byfaarm, une entreprise sénégalaise active dans la production agricole, l'élevage et la transformation de produits locaux. Le site valorise les activités de l'entreprise, présente ses filières (cultures, élevage, transformation agroalimentaire) et met en avant son engagement pour une agriculture moderne, durable et rentable au Sénégal.",
    tags: ["HTML", "CSS", "Agriculture", "Site vitrine", "Responsive Design"],
    video: "/byfaarm.mp4",
    demo: "/byfaarm.mp4",
  }

  const baseBrainProject = {
    title: "Base Brain",
    description:
      "Plateforme intelligente de correction automatique d'exercices en bases de données, propulsée par l'IA. Les enseignants déposent leurs sujets (texte ou PDF), les étudiants soumettent leurs réponses par Drag & Drop, et le moteur d'IA corrige automatiquement, attribue une note objective et génère un feedback détaillé pour chaque étudiant.",
    tags: ["React", "MySQL", "Intelligence Artificielle", "PDF"],
    video: "/base-brain.mp4",
    demo: "/base-brain.mp4",
  }

  const soinsProject = {
    title: "Espace Beauté & Soins",
    description:
      "Application web dédiée aux professionnels de l'esthétique. Permet aux clients de consulter la grille tarifaire des soins et de réserver leurs séances en ligne. Interface élégante, simple d'utilisation, pensée pour valoriser les services d'une esthéticienne.",
    tags: ["HTML", "CSS", "Réservation en ligne", "Tarifs"],
    video: "/video-soins.mp4",
    demo: "/video-soins.mp4",
  }

  const yoloProject = {
    title: "YOLO PPE Detector",
    description:
      "Modèle de détection d'équipements de protection individuelle (EPI) entraîné avec YOLOv8. Détecte en temps réel casques, gilets, gants et autres équipements de sécurité sur des images ou flux vidéo. Déployé sur Hugging Face Spaces, il suffit d'uploader une image pour obtenir les détections instantanément.",
    tags: ["Python", "YOLOv8", "Computer Vision", "Hugging Face", "Deep Learning"],
    demo: "https://huggingface.co/spaces/Kabyr/yolo-ppe-detector",
    embed: "https://kabyr-yolo-ppe-detector.hf.space",
  }

  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Une sélection de mes réalisations professionnelles démontrant mes compétences techniques et ma capacité
            à mener des projets de bout en bout.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 gap-6" stagger={0.08}>
          {/* Carte DioDio Glow Skin */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground text-sm text-center">Chargement...</p>
                  </div>
                )}
                <iframe
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.canva.com/design/DAHLVQgHphQ/watch?embed"
                  allow="fullscreen"
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                  title="DioDio Glow Skin - Présentation"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{featured.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{featured.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={featured.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carte Byfaarm */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={byfaarmProject.video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{byfaarmProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{byfaarmProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {byfaarmProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={byfaarmProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carte Base Brain */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={baseBrainProject.video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{baseBrainProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{baseBrainProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {baseBrainProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={baseBrainProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carte Biona */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={bionaProject.video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{bionaProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{bionaProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {bionaProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={bionaProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carte Espace Beauté & Soins */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={soinsProject.video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{soinsProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{soinsProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {soinsProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={soinsProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Carte YOLO PPE Detector */}
          <motion.div variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
              <div className="relative h-48 bg-muted overflow-hidden">
                {!yoloLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground text-sm text-center">Chargement du modèle...</p>
                  </div>
                )}
                <iframe
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                  src={yoloProject.embed}
                  allow="fullscreen"
                  allowFullScreen
                  onLoad={() => setYoloLoaded(true)}
                  title="YOLO PPE Detector - Hugging Face Space"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{yoloProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{yoloProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {yoloProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={yoloProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Tester le modèle
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {projects.map((project, index) => (
            <motion.div key={index} variants={revealItem} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
