'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { src: "/14.png?height=400&width=800", alt: "Product 1" },
    { src: "/15.png?height=400&width=800", alt: "Product 2" },
    { src: "/16.png?height=400&width=800", alt: "Product 3" },
    { src: "/air_13.png?height=400&width=800", alt: "Product 4" },
    { src: "/headphone.png?height=400&width=800", alt: "Product 5" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Categories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Our Store
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Discover our latest products and best deals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-8 relative">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-200 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      alt={slide.alt}
                      className="aspect-[2/1] object-contain w-full"
                      height="400"
                      src={slide.src}
                      width="800"
                    />
                  ))}
                </div>
              </div>
              <Button
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={prevSlide}
                size="icon"
                variant="outline"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={nextSlide}
                size="icon"
                variant="outline"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Product Categories</h2>
            <div className="flex justify-center items-center  gap-6">
              <Card className="bg-gray-900 text-gray-100">
                <CardHeader>
                  <CardTitle>Smart Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Smart Phone"
                    className="aspect-square object-cover rounded-lg"
                    height="200"
                    src="/16.png?height=200&width=200"
                    width="200"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Shop Now</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 text-gray-100">
                <CardHeader>
                  <CardTitle>Laptop</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Clothing"
                    className="aspect-square object-cover rounded-lg"
                    height="200"
                    src="/air_13.png?height=200&width=200"
                    width="200"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Shop Now</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 text-gray-100">
                <CardHeader>
                  <CardTitle>HeadPhones</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Home & Garden"
                    className="aspect-square object-cover rounded-lg"
                    height="200"
                    src="/headphone.png?height=200&width=200"
                    width="200"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Shop Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}