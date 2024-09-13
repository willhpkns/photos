'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, User, Mail, Image } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function MoodyMasonryGallery() {
  const [images, setImages] = useState([
    { src: "https://picsum.photos/300/300", width: 300, height: 300 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/450", width: 300, height: 450 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/320", width: 300, height: 320 },
    { src: "https://picsum.photos/300/360", width: 300, height: 360 },
    { src: "https://picsum.photos/300/410", width: 300, height: 410 },
    { src: "https://picsum.photos/300/330", width: 300, height: 330 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/370", width: 300, height: 370 },
    { src: "https://picsum.photos/300/340", width: 300, height: 340 },
    { src: "https://picsum.photos/300/390", width: 300, height: 390 },
    { src: "https://picsum.photos/300/430", width: 300, height: 430 },
    { src: "https://picsum.photos/300/310", width: 300, height: 310 },
    { src: "https://picsum.photos/300/440", width: 300, height: 440 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/300", width: 300, height: 300 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/450", width: 300, height: 450 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/320", width: 300, height: 320 },
    { src: "https://picsum.photos/300/360", width: 300, height: 360 },
    { src: "https://picsum.photos/300/410", width: 300, height: 410 },
    { src: "https://picsum.photos/300/330", width: 300, height: 330 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/370", width: 300, height: 370 },
    { src: "https://picsum.photos/300/340", width: 300, height: 340 },
    { src: "https://picsum.photos/300/390", width: 300, height: 390 },
    { src: "https://picsum.photos/300/430", width: 300, height: 430 },
    { src: "https://picsum.photos/300/310", width: 300, height: 310 },
    { src: "https://picsum.photos/300/440", width: 300, height: 440 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/300", width: 300, height: 300 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/450", width: 300, height: 450 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/320", width: 300, height: 320 },
    { src: "https://picsum.photos/300/360", width: 300, height: 360 },
    { src: "https://picsum.photos/300/410", width: 300, height: 410 },
    { src: "https://picsum.photos/300/330", width: 300, height: 330 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/370", width: 300, height: 370 },
    { src: "https://picsum.photos/300/340", width: 300, height: 340 },
    { src: "https://picsum.photos/300/390", width: 300, height: 390 },
    { src: "https://picsum.photos/300/430", width: 300, height: 430 },
    { src: "https://picsum.photos/300/310", width: 300, height: 310 },
    { src: "https://picsum.photos/300/440", width: 300, height: 440 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/300", width: 300, height: 300 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/450", width: 300, height: 450 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/320", width: 300, height: 320 },
    { src: "https://picsum.photos/300/360", width: 300, height: 360 },
    { src: "https://picsum.photos/300/410", width: 300, height: 410 },
    { src: "https://picsum.photos/300/330", width: 300, height: 330 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
    { src: "https://picsum.photos/300/370", width: 300, height: 370 },
    { src: "https://picsum.photos/300/340", width: 300, height: 340 },
    { src: "https://picsum.photos/300/390", width: 300, height: 390 },
    { src: "https://picsum.photos/300/430", width: 300, height: 430 },
    { src: "https://picsum.photos/300/310", width: 300, height: 310 },
    { src: "https://picsum.photos/300/440", width: 300, height: 440 },
    { src: "https://picsum.photos/300/350", width: 300, height: 350 },
    { src: "https://picsum.photos/300/400", width: 300, height: 400 },
    { src: "https://picsum.photos/300/380", width: 300, height: 380 },
    { src: "https://picsum.photos/300/420", width: 300, height: 420 },
  ])
  const [activeSection, setActiveSection] = useState('portfolio')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1}
    )

    const images = document.querySelectorAll('.image-container')
    images.forEach((img) => observer.observe(img))

    return () => observer.disconnect()
  }, [activeSection])

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-4 max-w-md mx-auto">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage src="https://picsum.photos/128/128" alt="Profile" />
              <AvatarFallback>WG</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-center">Will Hopkins</h2>
            <p className="text-muted-foreground text-center">
              I like big butts and I cannot lie.
            </p>
          </div>
        )
      case 'contact':
        return (
          <div className="space-y-4 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p>Email: williamraymondhopkins@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Instagram: @willhpkns</p>
          </div>
        )
      default:
        return (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
            {images.map((img, index) => (
              <div key={index} className="break-inside-avoid image-container opacity-0 transition-opacity duration-1000">
                <img
                  src={img.src}
                  alt={`Gallery image ${index + 1}`}
                  width={img.width}
                  height={img.height}
                  className="w-full rounded-sm shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <header className="fixed top-0 right-0 p-4 z-50">
        <h1 className="text-2xl font-bold">Will's Gallery</h1>
      </header>

      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed top-4 left-4 z-50 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[250px] sm:w-[300px] bg-zinc-800 border-zinc-700"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-4">
            <SheetClose asChild>
              <Button 
                variant="ghost" 
                className="text-lg text-zinc-100 hover:text-zinc-300 hover:bg-zinc-700 w-full justify-start"
                onClick={() => setActiveSection('portfolio')}
              >
                <Image className="mr-2 h-5 w-5" />
                Portfolio
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button 
                variant="ghost" 
                className="text-lg text-zinc-100 hover:text-zinc-300 hover:bg-zinc-700 w-full justify-start"
                onClick={() => setActiveSection('about')}
              >
                <User className="mr-2 h-5 w-5" />
                About
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button 
                variant="ghost" 
                className="text-lg text-zinc-100 hover:text-zinc-300 hover:bg-zinc-700 w-full justify-start"
                onClick={() => setActiveSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>

      <main className="container mx-auto px-4 py-16">
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="pr-4">
            {renderContent()}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </main>

      <style jsx global>{`
        .fade-in {
          opacity: 1 !important;
        }
        
        .ScrollAreaViewport {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .ScrollAreaViewport::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .ScrollAreaViewport {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  )
}