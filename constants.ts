import { Film, StillImage } from './types';

export const DIRECTOR_INFO = {
  name: "NAMGUNG GEON",
  koreanName: "남궁 건",
  title: "Film Director & Cinematographer",
  tagline: "Stories with Strong Visual Identity",
  email: "southkeyn99@naver.com",
  phone: "010-8284-6424",
  instagram: "@namgunggeon_dir",
  vimeo: "vimeo.com/namgunggeon",
  // Note: To use your specific photo, save it as 'profile.jpg' in the public folder and change this back to "/profile.jpg"
  profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
  bio: `시각적 스타일과 감정의 흐름을 중시하는 감독이자 촬영감독.
  영화적 미장센을 통해 이야기의 본질을 탐구합니다.
  
  Visual storyteller focused on emotional flow and strong aesthetics.
  Creating immersive cinematic experiences as a Director and D.O.P.`,
  awards: [
    "2024 11th Mokpo National Route 1 Independent Film Festival - Best Picture (도애의 시간)",
    "2025 3rd Jukseo AI Film Festival - Participation Prize (마지막 명령)",
    "2023 Volli Contest - Special Award (학의로에서 안녕)"
  ]
};

export const FILMS: Film[] = [
  // Directing Works
  {
    id: 'f2025_1',
    title: "Last Command (마지막 명령)",
    year: "2025",
    role: "Director / Writer",
    runtime: "Short",
    genre: "AI Short Film",
    synopsis: "An AI-generated narrative exploring the final commands in a digital age.",
    posterUrl: "https://picsum.photos/400/600?random=101",
    stillUrls: ["https://picsum.photos/800/450?random=201"],
    awards: [
      "5th Geumcheon Fashion Film Festival - Competition",
      "3rd Jukseo AI Film Festival - Participation Prize"
    ]
  },
  {
    id: 'f2025_2',
    title: "Panic Disorder (아부지)",
    year: "2025",
    role: "Director / Writer",
    runtime: "27min 20sec",
    genre: "Drama, Thriller",
    synopsis: `어릴적 아버지의 폭력으로 집을 나온 이후, 공황장애를 얻게 된 현수.
    20년만에 누나의 부탁으로 치매에 걸린 아버지를 돌보게 된다.

    Hyun-su developed panic disorder after leaving home due to his father's violence. 
    He returns to care for his father with dementia at his sister's request for the first time in 20 years.

    Aspect Ratio: 1.85:1`,
    posterUrl: "https://picsum.photos/400/600?random=102",
    stillUrls: ["https://picsum.photos/800/450?random=202"],
    awards: ["3rd UFO Film Festival - Invited"]
  },
  {
    id: 'f2024_1',
    title: "Time of Doae (도애의 시간)",
    year: "2024",
    role: "Director / Writer",
    runtime: "Short",
    genre: "Short Film",
    synopsis: "Supported by Gyeonggi Gap Year Program. A story about time and memory.",
    posterUrl: "https://picsum.photos/400/600?random=103",
    stillUrls: ["https://picsum.photos/800/450?random=203"],
    awards: [
      "11th Mokpo National Route 1 Independent Film Festival - Best Picture (Run-up)",
      "1st Slow Independent Film Festival - Winner",
      "2024 Gimhae Citizen Film Festival - Invited"
    ]
  },
  {
    id: 'f2024_2',
    title: "Kind Baba Yaga (친절한 바바야가)",
    year: "2024",
    role: "Director / Writer",
    runtime: "Short",
    genre: "AI Short Film",
    synopsis: "A reinterpretation of the Baba Yaga folklore through the lens of AI.",
    posterUrl: "https://picsum.photos/400/600?random=104",
    stillUrls: ["https://picsum.photos/800/450?random=204"]
  },
  {
    id: 'f2023_1',
    title: "Green Beach (그린비치)",
    year: "2023",
    role: "Director / Writer",
    runtime: "Feature",
    genre: "Feature Film",
    synopsis: "Project 100-100-100. Screened at the Korean Film Archive.",
    posterUrl: "https://picsum.photos/400/600?random=105",
    stillUrls: ["https://picsum.photos/800/450?random=205"]
  },
  {
    id: 'f2023_2',
    title: "Winter Wind (겨울바람)",
    year: "2023",
    role: "Director / Writer",
    runtime: "Short",
    genre: "Short Film",
    synopsis: "A story carried by the cold winds of winter.",
    posterUrl: "https://picsum.photos/400/600?random=106",
    stillUrls: ["https://picsum.photos/800/450?random=206"]
  },
  {
    id: 'f2022_1',
    title: "Goodbye at Hakui-ro (학의로에서 안녕)",
    year: "2022",
    role: "Director / Writer",
    runtime: "Short",
    genre: "AI Short Film",
    synopsis: "A farewell taking place in a digital landscape.",
    posterUrl: "https://picsum.photos/400/600?random=107",
    stillUrls: ["https://picsum.photos/800/450?random=207"],
    awards: ["2023 Volli Contest - Special Award"]
  },
  {
    id: 'f2022_2',
    title: "Contract of Leading Actor (주연배우계약서)",
    year: "2022",
    role: "Director",
    runtime: "Short",
    genre: "Short Film",
    synopsis: "The tension behind the scenes of a casting contract.",
    posterUrl: "https://picsum.photos/400/600?random=108",
    stillUrls: ["https://picsum.photos/800/450?random=208"]
  },
  {
    id: 'f2022_3',
    title: "EAST",
    year: "2022",
    role: "Director / Writer",
    runtime: "Short",
    genre: "Short Film",
    synopsis: "A story pointing towards the East.",
    posterUrl: "https://picsum.photos/400/600?random=109",
    stillUrls: ["https://picsum.photos/800/450?random=209"]
  },
  {
    id: 'f2019',
    title: "I'm Going to France (나는 프랑스로 갈 거야)",
    year: "2019",
    role: "Director / Writer",
    runtime: "Short",
    genre: "Short Film",
    synopsis: "A character's determination to leave for France.",
    posterUrl: "https://picsum.photos/400/600?random=110",
    stillUrls: ["https://picsum.photos/800/450?random=210"]
  },

  // Cinematography Works
  {
    id: 'cin_2024_1',
    title: "Shadows of Neon (네온의 그림자)",
    year: "2024",
    role: "Cinematographer",
    runtime: "Music Video",
    genre: "MV",
    synopsis: "Visualizing the dark energy of the city night.",
    posterUrl: "https://picsum.photos/400/600?random=301",
    stillUrls: ["https://picsum.photos/800/450?random=401"]
  },
  {
    id: 'cin_2023_1',
    title: "Whisper (속삭임)",
    year: "2023",
    role: "Cinematographer",
    runtime: "Short",
    genre: "Drama",
    synopsis: "Capturing intimacy through close-ups and natural light.",
    posterUrl: "https://picsum.photos/400/600?random=302",
    stillUrls: ["https://picsum.photos/800/450?random=402"]
  },
  {
    id: 'cin_2023_2',
    title: "Summer Days (여름날)",
    year: "2023",
    role: "Cinematographer",
    runtime: "Commercial",
    genre: "Fashion",
    synopsis: "Bright and airy cinematography for a summer collection.",
    posterUrl: "https://picsum.photos/400/600?random=303",
    stillUrls: ["https://picsum.photos/800/450?random=403"]
  },

  // Staff Works
  {
    id: 'st_2022_1',
    title: "The Long Road (긴 길)",
    year: "2022",
    role: "Gaffer",
    runtime: "Feature",
    genre: "Drama",
    synopsis: "Lighting direction for the indie feature film.",
    posterUrl: "https://picsum.photos/400/600?random=501",
    stillUrls: ["https://picsum.photos/800/450?random=601"]
  },
  {
    id: 'st_2021_1',
    title: "Night Out",
    year: "2021",
    role: "Assistant Director",
    runtime: "Short",
    genre: "Comedy",
    synopsis: "Assisting production flow and schedule management.",
    posterUrl: "https://picsum.photos/400/600?random=502",
    stillUrls: ["https://picsum.photos/800/450?random=602"]
  }
];

export const STILLS: StillImage[] = [
  { id: 's1', url: "https://picsum.photos/800/1000?random=20", type: 'film' },
  { id: 's3', url: "https://picsum.photos/800/800?random=22", type: 'art' },
  { id: 's4', url: "https://picsum.photos/800/500?random=23", type: 'film' },
  { id: 's6', url: "https://picsum.photos/800/600?random=25", type: 'art' },
  { id: 's7', url: "https://picsum.photos/800/1000?random=26", type: 'film' },
];