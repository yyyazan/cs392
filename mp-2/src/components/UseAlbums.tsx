import { useState, useEffect } from 'react';
import { Album } from '../interfaces/Albums';

/**
 * Custom hook: fetches top 100 albums via iTunes RSS feed
 * Returns an array of Album objects once loaded.
 */
export function UseAlbums(): Album[] {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const res = await fetch(
                    'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
                );
                const json = (await res.json()) as {
                    feed: {
                        entry: Array<{
                            id: { attributes: { 'im:id': string }; label: string };
                            'im:name': { label: string };
                            'im:image': { label: string }[];
                            'im:artist': { label: string };
                        }>;
                    };
                };
                const data: Album[] = json.feed.entry.map((e) => ({
                    id: e.id.attributes['im:id'],
                    name: e['im:name'].label,
                    artistName: e['im:artist'].label,
                    artworkUrl100: e['im:image']
                        .slice(-1)[0]
                        .label.replace(/600x600bb/, '300x300bb'),
                    url: e.id.label,
                }));
                setAlbums(data);
            } catch (error) {
                console.error('Failed to fetch albums:', error);
            }
        }

        fetchAlbums();
    }, []);

    return albums;
}