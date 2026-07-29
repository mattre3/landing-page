export type QuizOption = {
  label: string;
  areas?: string[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "size",
    question: "Ile osób pracuje w firmie?",
    options: [
      { label: "1–5" },
      { label: "6–10" },
      { label: "11–50" },
      { label: "51–250" },
      { label: "250+" },
    ],
  },
  {
    id: "bottleneck",
    question: "Co obecnie najbardziej blokuje rozwój?",
    options: [
      { label: "Sprzedaż", areas: ["Uporządkowanie procesu sprzedaży i pipeline'u"] },
      { label: "Marketing", areas: ["Połączenie marketingu ze sprzedażą"] },
      { label: "Obsługa klienta", areas: ["Konsolidacja kanałów obsługi klienta"] },
      { label: "Administracja", areas: ["Automatyzacja pracy administracyjnej"] },
      { label: "Serwis", areas: ["Integracja serwisu z historią klienta"] },
      { label: "Brak integracji między systemami", areas: ["Integracja systemów i przepływu danych"] },
    ],
  },
  {
    id: "systems",
    question: "Z jakich systemów korzystacie?",
    options: [
      { label: "CRM" },
      { label: "ERP" },
      { label: "Excel" },
      { label: "System księgowy" },
      { label: "System rezerwacji" },
      { label: "Nie wiem / wiele różnych systemów", areas: ["Integracja systemów i przepływu danych"] },
    ],
  },
  {
    id: "goal",
    question: "Co chcesz osiągnąć?",
    options: [
      { label: "Więcej klientów", areas: ["Marketing i generowanie leadów"] },
      { label: "Lepsza organizacja sprzedaży", areas: ["CRM i pipeline sprzedaży"] },
      { label: "Automatyzacja pracy", areas: ["Automatyzacje procesów"] },
      { label: "Połączenie systemów", areas: ["Integracje między systemami"] },
      { label: "Lepsza obsługa klienta", areas: ["Obsługa klienta w jednym miejscu"] },
      { label: "Redukcja kosztów", areas: ["Automatyzacja i redukcja pracy ręcznej"] },
    ],
  },
];
