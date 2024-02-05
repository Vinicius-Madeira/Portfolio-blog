// Used for displaying the banner of the game and the link to it in the steam store
export const baseMediaURL = "https://cdn.cloudflare.steamstatic.com/steam/apps";
export const baseStoreURL = "https://store.steampowered.com/app";

// Steam API returns the playtime in minutes.
// This function formats the playtime to hours.
export function formatPlaytime(time: number): number {
  return time / 60;
}

// This interface structs how the response from the API is returned
export interface ResponseData {
  response: {
    total_count: number;
    games: GameProps[];
  };
}

export interface GameProps {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
}
