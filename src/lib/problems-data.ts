export type ProblemItem = {
  id: string;
  problem: string;
  solution: string;
};

export const problems: ProblemItem[] = [
  {
    id: "excel",
    problem: "Handlowcy pracują w Excelu",
    solution:
      "Każdy lead i klient trafia do jednego systemu sprzedaży. Handlowiec widzi historię kontaktu, zadania i etap procesu bez przeklikiwania się przez pliki.",
  },
  {
    id: "leady",
    problem: "Marketing nie wie, które leady kończą się sprzedażą",
    solution:
      "Ścieżka leada jest widoczna od kliknięcia w reklamę aż po podpisaną umowę, więc marketing wie, które działania faktycznie przynoszą klientów.",
  },
  {
    id: "telefony",
    problem: "Telefony nie zapisują się w CRM",
    solution:
      "Połączenia, nagrania i notatki zapisują się automatycznie przy karcie klienta, bez ręcznego uzupełniania po rozmowie.",
  },
  {
    id: "kanaly",
    problem: "Zapytania wpadają z pięciu różnych kanałów",
    solution:
      "Formularz, e-mail, telefon, WhatsApp i czat trafiają do jednej skrzynki zadań, więc żadne zapytanie nie ginie.",
  },
  {
    id: "magazyn",
    problem: "Magazyn nie komunikuje się ze sprzedażą",
    solution:
      "Handlowiec widzi realny stan magazynowy w czasie rzeczywistym i nie składa klientowi obietnic bez pokrycia w towarze.",
  },
  {
    id: "serwis",
    problem: "Serwis działa w osobnym systemie",
    solution:
      "Zgłoszenia serwisowe są połączone z historią zakupów klienta, więc zespół serwisu ma pełny kontekst już przy pierwszym kontakcie.",
  },
  {
    id: "dane",
    problem: "Dane są przepisywane ręcznie",
    solution:
      "Systemy wymieniają dane między sobą automatycznie — raz wprowadzona informacja jest dostępna wszędzie tam, gdzie jest potrzebna.",
  },
  {
    id: "rentownosc",
    problem: "Nie wiadomo, które działania faktycznie zarabiają",
    solution:
      "Spójne dane sprzedażowe i marketingowe w jednym miejscu pozwalają zobaczyć, które kanały i działania realnie generują przychód.",
  },
];
