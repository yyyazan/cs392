import { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { Album } from '../interfaces/Albums';

interface GameProps {
    data: Album[];
}

interface Question {
    answer: Album;
    choices: Album[];
}

export default function Game({ data }: GameProps) {
    const TOTAL_ROUNDS = 5;
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Generate quiz questions: pick an answer and three decoys for each round
    const generateQuestions = (): Question[] => {
        const qs: Question[] = [];
        const pool = [...data];
        for (let i = 0; i < TOTAL_ROUNDS; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            const answer = pool.splice(idx, 1)[0];
            const others = data
                .filter(a => a.id !== answer.id)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            const choices = [answer, ...others].sort(() => Math.random() - 0.5);
            qs.push({ answer, choices });
        }
        return qs;
    };

    // Initialize questions when data loads
    useEffect(() => {
        if (data.length >= 4) setQuestions(generateQuestions());
    }, [data]);

    // Handle a user's guess
    const handleGuess = (album: Album) => {
        if (answered) return;
        setAnswered(true);
        setSelectedId(album.id);
        if (album.id === questions[currentRound].answer.id) setScore(prev => prev + 1);
        setTimeout(() => {
            setCurrentRound(prev => prev + 1);
            setAnswered(false);
            setSelectedId(null);
        }, 1000);
    };

    // Restart the quiz
    const restart = () => {
        setScore(0);
        setCurrentRound(0);
        setAnswered(false);
        setSelectedId(null);
        setQuestions(generateQuestions());
    };

    // Loading state
    if (questions.length === 0) return <div style={{ fontSize: '2vw' }}>Loading...</div>;

    // Quiz finished
    if (currentRound >= TOTAL_ROUNDS) {
        return (
            <GameWrapper>
                <Title>album guessr</Title>
                <EndScreen>
                    <h2>You scored {score} / {TOTAL_ROUNDS}</h2>
                    <button onClick={restart}>Play Again</button>
                </EndScreen>
            </GameWrapper>
        );
    }

    const { answer, choices } = questions[currentRound];

    return (
        <GameWrapper>
            <Title>album guessr</Title>
            <QuestionContainer>
                <AlbumArt
                    src={answer.artworkUrl100.replace('100x100bb', '300x300bb')}
                    revealed={answered}
                    alt={answer.name}
                />
                <Choices>
                    {choices.map(c => (
                        <ChoiceButton
                            key={c.id}
                            onClick={() => handleGuess(c)}
                            disabled={answered}
                            correct={answered && c.id === answer.id}
                            wrong={answered && c.id === selectedId}
                        >
                            {c.name} — <i>{c.artistName}</i>
                        </ChoiceButton>
                    ))}
                </Choices>
                <ScoreDisplay>
                    Round {currentRound + 1} / {TOTAL_ROUNDS} — Score: {score}
                </ScoreDisplay>
            </QuestionContainer>
        </GameWrapper>
    );
}

// Styled components
const GameWrapper = styled.div`
    background-color: #f3e9e5;
    min-height: 100vh;
    padding: 20px;
`;

const Title = styled.h1`
    color: #e67878;
    font-family: 'Boldonse', system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 5vw;
    text-align: center;
    margin: 20px 0;
`;

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AlbumArt = styled.img<{ revealed: boolean }>`
    width: 300px;
    height: 300px;
    object-fit: cover;
    filter: ${({ revealed }) => (revealed ? 'none' : 'blur(8px)')};
    transition: filter 0.4s;
    margin-bottom: 20px;
`;

const Choices = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 15px;
`;

const ChoiceButton = styled.button<{ correct?: boolean; wrong?: boolean }>`
    font-size: 1.5vw;
    padding: 10px 15px;
    border: 2px solid lightcoral;
    border-radius: 8px;
    background-color: ${({ correct, wrong }) =>
            correct ? 'lightgreen' : wrong ? 'lightcoral' : 'white'};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    min-width: 20%;
    &:disabled {
        opacity: 0.6;
    }
`;

const ScoreDisplay = styled.div`
    font-family: 'Boldonse', system-ui;
    color: #444;
    font-weight: 400;
    font-size: 2vw;
    margin-top: 10px;
`;

const EndScreen = styled.div`
    text-align: center;
    margin-top: 40px;
    > h2 {
        font-family: 'Boldonse', system-ui;
        color: #444;
        font-weight: 400;
        font-size: 3vw;
        margin-bottom: 20px;
    }
    > button {
        font-size: 1.5vw;
        padding: 10px 20px;
        border: 2px solid lightcoral;
        border-radius: 8px;
        background-color: white;
        cursor: pointer;
    }
`;
