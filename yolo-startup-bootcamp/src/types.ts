export interface BuilderApplication {
  name: string;
  twitter: string;
  role: "Hustler" | "Hacker" | "Designer" | "Meme_Lord";
  idea: string;
  fearRating: number;
}

export interface RoastResponse {
  success: boolean;
  roast: string;
  isDemo?: boolean;
}
