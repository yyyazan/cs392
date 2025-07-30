// app/generate/page.tsx
"use client";
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
max-width: 600px;
margin: 0 auto;
padding: 20px;
`;

const LyricBox = styled.div`
padding: 15px;
margin: 10px 0;
min-height: 60px;
background-color: #f0f2d0;

color: grey;
`;

const StyledInput = styled.input`
width: 100%;
padding: 10px;
border: 2px dashed deeppink;
border-radius: 8px;
font-family: "Boldonse", system-ui;

color: grey;    
`;

const SuggestionButton = styled.button`
   background-color: lightcoral;
   color: white;
   border: none;
   border-radius: 8px;
   padding: 10px 15px;
   margin: 5px;
   font-family: "Boldonse", system-ui;
   cursor: pointer;
   
   &:hover { background-color: #e9725c; }
`;

const NextButton = styled.button`
   background-color: lightcoral;
   color: white;
   border: none;
   border-radius: 8px;
   padding: 12px 24px;
   margin: 20px 0;
   font-family: "Boldonse", system-ui;
   cursor: pointer;

    &:hover { background-color: #e9725c; }
`;

const SearchButton = styled.button`
    background-color: deeppink;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin: 10px auto;
    display: block;
    font-family: "Boldonse", system-ui;
    cursor: pointer;

    &:hover {
        background-color: #dc0079;
    }
`;

export default function Generate() {
    const [currentLine, setCurrentLine] = useState(1);
    const [userWord, setUserWord] = useState('');
    const [completedLines, setCompletedLines] = useState(['', '', '', '']);
    const [selectedLine, setSelectedLine] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchSuggestions = async () => {
        if (!userWord.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/songs?word=${userWord}`);
            const data = await response.json();
            setSuggestions(data.suggestions || []);
        } catch (error) {
            console.error('Failed to fetch suggestions');
            setSuggestions([]);
        }
        setLoading(false);
    };

    const handleLineSelect = (line: string) => {
        setSelectedLine(line);
    };

    const handleNext = () => {
        if (selectedLine) {
            const newLines = [...completedLines];
            newLines[currentLine - 1] = selectedLine;
            setCompletedLines(newLines);

            if (currentLine < 4) {
                setCurrentLine(currentLine + 1);
                setUserWord('');
                setSelectedLine('');
                setSuggestions([]);
            }
        }
    };

    return (
        <Container>
            <h2>Line {currentLine} of 4</h2>

            <StyledInput
                placeholder="enter a word ♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫♪♫"
                value={userWord}
                onChange={(e) => setUserWord(e.target.value)}
            />

            <SearchButton onClick={fetchSuggestions} disabled={loading}>
                {loading ? 'Searching...' : 'get titles'}
            </SearchButton>

            {suggestions.length > 0 && (
                <div>
                    <p>Choose a song title:</p>
                    {suggestions.map((suggestion, index) => (
                        <SuggestionButton
                            key={index}
                            onClick={() => handleLineSelect(suggestion)}
                            style={selectedLine === suggestion ? { backgroundColor: '#f0bbbb' } : {}}
                        >
                            {suggestion}
                        </SuggestionButton>
                    ))}
                </div>
            )}

            {selectedLine && (
                <NextButton onClick={handleNext}>
                    {currentLine === 4 ? 'Finish Song' : 'Next Line'}
                </NextButton>
            )}

            <div>
                <h3>Your Song:</h3>
                <LyricBox>{completedLines[0] || ''}</LyricBox>
                <LyricBox>{completedLines[1] || ''}</LyricBox>
                <LyricBox>{completedLines[2] || ''}</LyricBox>
                <LyricBox>{completedLines[3] || ''}</LyricBox>
            </div>
        </Container>
    );
}