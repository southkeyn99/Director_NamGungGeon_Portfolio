import React, { useState } from 'react';
import { STILLS } from '../constants';
import { X } from 'lucide-react';

const Stills: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cinematic-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tighter">
          ARCHIVE
        </h2>
        
        {/* Masonry-like Layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {STILLS.map((still) => (
            <div 
              key={still.id} 
              className="break-inside-avoid relative group cursor-zoom-in"
              onClick={() => setSelectedImage(still.url)}
            >
              <img 
                src={still.url} 
                alt="Archive Still" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-xs tracking-widest uppercase">{still.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-cinematic-accent transition-colors">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullsize" 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};

export default Stills;