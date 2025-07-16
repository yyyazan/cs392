// src/hooks/UseAlbums.ts
import { useMemo } from "react";
import type { Album } from "../interfaces/Albums";

export interface Entry {
    id: { attributes: { "im:id": string }; label: string };
    "im:name": { label: string };
    "im:image": { label: string }[];
    "im:artist": { label: string };
}

/** Pure mapper: Entry[] → Album[]  (no fetching) */
export function UseAlbums(entries: Entry[] | null): Album[] {
    return useMemo(() => {
        if (!entries) return [];
        return entries.map((e): Album => ({
            id: e.id.attributes["im:id"],
            name: e["im:name"].label,
            artistName: e["im:artist"].label,
            artworkUrl100: e["im:image"]
                .slice(-1)[0]
                .label.replace(/600x600bb/, "300x300bb"),
            url: e.id.label,
        }));
    }, [entries]);
}