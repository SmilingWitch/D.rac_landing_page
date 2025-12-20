// src/data/events.ts
export type SearchItem = {
  id: number;
  title: string;
  description?: string;
  category: string;
  tags?: string[];
};

export const SEARCH_DATA: SearchItem[] = [
  {
    id: 1,
    title: "Miami Music Festival",
    description: "Electronic music event with international DJs",
    category: "Events",
    tags: ["music", "festival", "miami"],
  },
  {
    id: 2,
    title: "VIP Ticket – Drake Concert",
    description: "Front row access and exclusive benefits",
    category: "Tickets",
    tags: ["concert", "vip", "drake"],
  },
  {
    id: 3,
    title: "DJ Luna Fan Club",
    description: "Exclusive content and private events",
    category: "Creators",
    tags: ["dj", "community"],
  },
  {
    id: 4,
    title: "Tech Conference NYC",
    description: "Technology, startups and networking",
    category: "Events",
    tags: ["tech", "conference", "nyc"],
  },
];

export const CATEGORIES = [
  ...new Set(SEARCH_DATA.map((item) => item.category)),
];
