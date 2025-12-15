import React, { useState, useMemo } from 'react';
import { FILMS } from '../constants';
import { Film } from '../types';
import { X, Calendar, Clock, Award } from 'lucide-react';

interface FilmographyProps {
  title?: string;
  category: 'directing' | 'cinematography' | 'staff';
}

const Filmography: React.FC<FilmographyProps> = ({ title, category }) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const filteredFilms = useMemo(() => {
    return FILMS.filter(film => {
      const role = film.role.toLowerCase();
      if (category === 'directing') {
        return role.includes('director') && !role.includes('assistant') && !role.includes('lighting');
      } else if (category === 'cinematography') {
        return role.includes('cinematographer') || role.includes('d.o.p');
      } else if (category === 'staff') {
        return !role.includes('director') && !role.includes('cinematographer') || role.includes('assistant') || role.includes('gaffer');
      }
      return true;
    });
  }, [category]);

  const displayTitle = title || (category === 'directing' ? 'FILMOGRAPHY' : category.toUpperCase());

  return (
    <div className="min-h-screen bg-cinematic-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 tracking-tighter text-center uppercase">
          {displayTitle}
        </h2>

        {filteredFilms.length === 0 ? (
          <div className="text-center text-neutral-500 py-20">
            <p className="text-xl font-light">No works found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-16">
            {filteredFilms.map((film, index) => (
              <div 
                key={film.id} 
                className={`flex flex-col md:flex-row gap-8 md:gap-12 group cursor-pointer ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                onClick={() => setSelectedFilm(film)}
              >
                {/* Poster/Image */}
                <div className="w-full md:w-5/12 lg:w-4/12 relative overflow-hidden">
                  <div className="aspect-[2/3] w-full overflow-hidden bg-neutral-900">
                    <img 
                      src={film.posterUrl} 
                      alt={film.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 text-sm tracking-widest uppercase">View Details</span>
                  </div>
                </div>

                {/* Info */}
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center items-start">
                  <div className="text-cinematic-accent text-sm font-bold tracking-widest mb-2">{film.year}</div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight group-hover:text-neutral-300 transition-colors">
                    {film.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-neutral-500 text-sm tracking-wide mb-6">
                    <span className="flex items-center gap-1"><Clock size={14} /> {film.runtime}</span>
                    <span className="border-l border-neutral-700 pl-4 text-cinematic-accent">{film.role}</span>
                    <span className="border-l border-neutral-700 pl-4">{film.genre}</span>
                  </div>
                  <p className="text-neutral-400 font-light leading-relaxed max-w-xl line-clamp-3">
                    {film.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl bg-cinematic-dark border border-neutral-800 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedFilm(null); }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white z-10 p-2"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 aspect-[2/3] md:aspect-auto">
                    <img src={selectedFilm.posterUrl} className="w-full h-full object-cover" alt={selectedFilm.title}/>
                </div>
                <div className="w-full md:w-2/3 p-8 md:p-12">
                    <h3 className="text-4xl font-serif text-white mb-2">{selectedFilm.title}</h3>
                    <p className="text-cinematic-accent mb-6 text-sm tracking-widest uppercase">{selectedFilm.genre} | {selectedFilm.runtime} | {selectedFilm.year}</p>
                    
                    <div className="space-y-6 text-neutral-300 font-light">
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">Synopsis</h4>
                            <p className="leading-relaxed opacity-80">{selectedFilm.synopsis}</p>
                        </div>
                        
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">Role</h4>
                            <p className="leading-relaxed opacity-80">{selectedFilm.role}</p>
                        </div>

                        {selectedFilm.awards && selectedFilm.awards.length > 0 && (
                            <div>
                                <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider flex items-center gap-2">
                                    <Award size={16} /> Awards & Festivals
                                </h4>
                                <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                                    {selectedFilm.awards.map((award, i) => (
                                        <li key={i}>{award}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {selectedFilm.stillUrls.map((url, i) => (
                                <img key={i} src={url} alt="Still" className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filmography;