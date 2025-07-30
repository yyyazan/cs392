// app/api/songs/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const word = searchParams.get('word');

    if (!word) {
        return NextResponse.json({ error: 'Word required' }, { status: 400 });
    }

    try {
        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${word}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=4`
        );
        const data = await response.json();

        const suggestions = data.results?.trackmatches?.track?.map((track: any) =>
            track.name
        ) || [];

        return NextResponse.json({ suggestions });
    } catch (error) {
        return NextResponse.json({ error: 'API failed' }, { status: 500 });
    }
}