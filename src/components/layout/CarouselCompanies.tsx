"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Company {
  id: string;
  name: string;
  logo: string;
}

interface CarouselCompaniesProps {
  companies: Company[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function CarouselCompanies({
  companies,
  autoPlay = true,
  autoPlayInterval = 4000
}: CarouselCompaniesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsividad - cuántas empresas mostrar a la vez
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Móvil: 1 empresa
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 empresas
      } else {
        setItemsPerView(3); // Desktop: 3 empresas
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = companies.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, companies.length, itemsPerView]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = companies.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = companies.length - itemsPerView;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <TooltipProvider>
      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main carousel container */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8">
          <div className="h-[200px] flex items-center justify-center">
            <div className="w-full overflow-hidden">
              <div
                className="flex m-12 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                }}
              >
                {companies.map((company) => (
                  <div
                    key={company.id}
                    className="flex-shrink-0 flex items-center justify-center px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="group cursor-pointer p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full max-w-[250px] h-[140px] flex items-center justify-center border border-gray-100 hover:border-emerald-200 mx-auto">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={180}
                            height={100}
                            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 filter brightness-75 group-hover:brightness-100"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-gray-900 text-white border-0">
                        <p className="font-semibold text-sm">{company.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Empresa anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Empresa siguiente"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: companies.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? 'bg-emerald-600 w-8 h-3'
                : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
              aria-label={`Ir a posición ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4 overflow-hidden">
          <div
            className="bg-emerald-600 h-1 rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentIndex + 1) / (companies.length - itemsPerView + 1)) * 100}%`
            }}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
