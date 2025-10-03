"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Markdown from "react-markdown"
import type React from "react"
import { Building2 } from "lucide-react"

interface Props {
  title: string
  href?: string
  description: string
  dates: string
  client?: string  // Optional client name
  tags: readonly string[]
  image?: string
  links?: readonly {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
}

export function ClientProjectCard({ 
  title, 
  href, 
  description, 
  dates,
  client, 
  tags, 
  image, 
  links, 
  className 
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-gradient-to-br from-background to-muted/20">
      {/* Image Section - Optional */}
      {image && (
        <div className="h-40 w-full overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top"
          />
          {/* Overlay badge for client work */}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-blue-500/90 text-white border-0">
              Client Work
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="px-2 pb-2">
        <div className="space-y-1">
          {/* Client Name - Optional */}
          {client && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <Building2 className="h-3 w-3" />
              <span className="font-medium">{client}</span>
            </div>
          )}
          
          <CardTitle className="text-base leading-tight">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground block">{dates}</time>
          
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert pt-1">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      
      <CardContent className="mt-auto flex flex-col px-2 pb-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge 
                className="px-1.5 py-0 text-[10px] bg-primary/10 text-primary hover:bg-primary/20" 
                variant="secondary" 
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      {/* Links Section - Optional */}
      {links && links.length > 0 && (
        <CardFooter className="px-2 pb-2 pt-0">
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge 
                  key={idx} 
                  className="flex gap-2 px-2 py-1 text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
      
      {/* If no image, show the badge at the top of the card */}
      {!image && (
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-blue-500/90 text-white border-0 text-[10px]">
            Client
          </Badge>
        </div>
      )}
    </Card>
  )
}