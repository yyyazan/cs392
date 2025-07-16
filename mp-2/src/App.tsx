import styled from "styled-components";
import { useEffect, useState } from "react";
import Game from "./components/Game.tsx";
import {UseAlbums, type Entry } from "./components/UseAlbums";   // ← capitalized

const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #f3e9e5;
`;

export default function App() {
    const [entries, setEntries] = useState<Entry[] | null>(null);
    const [error, setError]     = useState<string | null>(null);

    // fetching
    useEffect(() => {
        async function fetchFeed() {
            try {
                const res  = await fetch(
                    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
                );
                const json = await res.json();
                setEntries(json.feed.entry as Entry[]);
            } catch (err) {
                setError("Could not load albums");
                console.error(err);
            }
        }
        fetchFeed();
    }, []);

    // mapping
    const albums = UseAlbums(entries);

    if (error)          return <Page>{error}</Page>;
    if (!entries)       return <Page>Loading…</Page>;
    if (albums.length < 4) return <Page>No albums returned</Page>;

    return (
        <Page>
            <Game data={albums} />
        </Page>
    );
}