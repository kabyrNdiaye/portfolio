"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const infoCards = [
    {
      icon: Mail,
      title: "Email",
      content: "smknd2002@gmail.com",
      href: "mailto:smknd2002@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+221 77 496 49 32",
      href: "tel:+221774964932",
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "Guédiawaye, Dakar — Sénégal",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter. Je serais ravie d'échanger avec vous.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal direction="right" className="space-y-6">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="space-y-6">
            {infoCards.map((info, index) => {
              const Icon = info.icon
              const body = (
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 bg-primary/10 rounded-lg"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </Card>
              )
              return (
                <motion.div key={index} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  {body}
                </motion.div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
