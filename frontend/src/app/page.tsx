"use client";
import { useState } from "react";
import { snippets } from "../utils/snippets";
import { Language, DifficultyLevel } from "@/types";

export default function Home() {
  const [language, setLanguage] = useState<Language>("python");
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("beginner");
  const [snippet, setSnippet] = useState<string>(snippets[language][difficulty][0]);


  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setLanguage(newLang);
    setSnippet(snippets[newLang][difficulty][0]);
  }

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDifficulty = e.target.value as DifficultyLevel;
    setDifficulty(newDifficulty);
    setSnippet(snippets[language][newDifficulty][0]);
  }
}