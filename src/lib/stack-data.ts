import type { LucideIcon } from "lucide-react";
import {
  Users,
  Megaphone,
  Headset,
  CalendarCheck,
  Phone,
  Mail,
  MessageSquare,
  MessageCircle,
  Layers,
  Warehouse,
  Calculator,
  CreditCard,
  Wrench,
  Workflow,
  Sparkles,
  BarChart3,
  Link2,
} from "lucide-react";

export type StackCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  summary: string;
  capabilities: string[];
};

export const stackCategories: StackCategory[] = [
  {
    id: "crm",
    label: "Sprzedaż i CRM",
    icon: Users,
    summary: "Jedno miejsce, w którym żyje cały proces sprzedaży.",
    capabilities: [
      "Zarządzanie leadami w jednym miejscu",
      "Pipeline sprzedaży z widocznymi etapami",
      "Automatyczne follow-upy do klientów",
      "Zadania i przypomnienia dla handlowców",
      "Pełna historia komunikacji przy kliencie",
      "Raportowanie wyników zespołu",
      "Prognozowanie sprzedaży",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    summary: "Kampanie połączone z realną sprzedażą, nie tylko z kliknięciami.",
    capabilities: [
      "Automatyczne zbieranie leadów z kampanii",
      "Scoring i priorytetyzacja kontaktów",
      "Sekwencje mailowe i lejki sprzedażowe",
      "Segmentacja bazy kontaktów",
      "Raport skuteczności kanałów marketingowych",
      "Spójne dane leadów między marketingiem a sprzedażą",
    ],
  },
  {
    id: "obsluga",
    label: "Obsługa klienta",
    icon: Headset,
    summary: "Jedna skrzynka zamiast pięciu rozproszonych kanałów.",
    capabilities: [
      "Wspólna skrzynka dla wszystkich zgłoszeń",
      "Historia kontaktu widoczna dla każdego pracownika",
      "Automatyczne przypisywanie zgłoszeń",
      "Szablony odpowiedzi i baza wiedzy",
      "Pomiar czasu i jakości obsługi",
    ],
  },
  {
    id: "rezerwacje",
    label: "Rezerwacje",
    icon: CalendarCheck,
    summary: "Klient rezerwuje termin sam, a kalendarz aktualizuje się automatycznie.",
    capabilities: [
      "Samoobsługowa rezerwacja online",
      "Synchronizacja z kalendarzem zespołu",
      "Automatyczne przypomnienia SMS i e-mail",
      "Zarządzanie dostępnością i zasobami",
      "Redukcja liczby nieodwołanych wizyt",
    ],
  },
  {
    id: "telefonia",
    label: "Telefonia",
    icon: Phone,
    summary: "Każda rozmowa zapisana tam, gdzie handlowiec jej szuka.",
    capabilities: [
      "Nagrania i notatki z rozmów przy karcie klienta",
      "Automatyczne wybieranie numeru z CRM",
      "Statystyki rozmów zespołu sprzedaży",
      "Historia kontaktu telefonicznego w jednym miejscu",
    ],
  },
  {
    id: "email",
    label: "E-mail",
    icon: Mail,
    summary: "Korespondencja widoczna dla całego zespołu, nie tylko w jednej skrzynce.",
    capabilities: [
      "Wspólna skrzynka zespołowa",
      "Automatyczne szablony i sekwencje wiadomości",
      "Śledzenie otwarć i odpowiedzi",
      "Pełna historia e-mail przy kliencie",
    ],
  },
  {
    id: "sms",
    label: "SMS",
    icon: MessageSquare,
    summary: "Krótka wiadomość tam, gdzie e-mail nie wystarczy.",
    capabilities: [
      "Automatyczne powiadomienia i przypomnienia",
      "Potwierdzenia zamówień i wizyt",
      "Kampanie SMS do wybranych segmentów klientów",
    ],
  },
  {
    id: "komunikatory",
    label: "WhatsApp i komunikatory",
    icon: MessageCircle,
    summary: "Rozmowa z klientem tam, gdzie faktycznie chce pisać.",
    capabilities: [
      "Wiadomości z komunikatorów w jednej historii kontaktu",
      "Automatyczne odpowiedzi na często zadawane pytania",
      "Powiadomienia transakcyjne przez WhatsApp",
    ],
  },
  {
    id: "erp",
    label: "ERP",
    icon: Layers,
    summary: "Sprzedaż, produkcja i zamówienia na tych samych, spójnych danych.",
    capabilities: [
      "Zarządzanie zamówieniami i produkcją",
      "Spójne dane finansowe i operacyjne",
      "Planowanie zasobów i dostaw",
      "Jedno źródło prawdy dla całej firmy",
    ],
  },
  {
    id: "magazyn",
    label: "Magazyn",
    icon: Warehouse,
    summary: "Sprzedaż wie, co realnie jest na stanie, zanim złoży obietnicę klientowi.",
    capabilities: [
      "Stan magazynowy w czasie rzeczywistym",
      "Automatyczne rezerwacje towaru pod zamówienie",
      "Alerty o niskich stanach",
      "Integracja ze sprzedażą i dostawcami",
    ],
  },
  {
    id: "ksiegowosc",
    label: "Księgowość",
    icon: Calculator,
    summary: "Dokumenty i płatności bez podwójnego wprowadzania danych.",
    capabilities: [
      "Automatyczne wystawianie faktur",
      "Synchronizacja z systemem księgowym",
      "Śledzenie płatności i należności",
      "Raporty finansowe bez ręcznej pracy",
    ],
  },
  {
    id: "platnosci",
    label: "Płatności",
    icon: CreditCard,
    summary: "Status płatności widoczny od razu przy zamówieniu.",
    capabilities: [
      "Płatności online przy zamówieniu lub rezerwacji",
      "Automatyczne uzgadnianie wpłat",
      "Powiadomienia o zaległych płatnościach",
    ],
  },
  {
    id: "serwis",
    label: "Serwis",
    icon: Wrench,
    summary: "Zespół serwisu z pełnym kontekstem już przy pierwszym kontakcie.",
    capabilities: [
      "Zgłoszenia serwisowe połączone z historią zakupów",
      "Harmonogram wizyt i napraw",
      "Śledzenie statusu realizacji zgłoszenia",
      "Baza urządzeń i historii serwisowej klienta",
    ],
  },
  {
    id: "automatyzacje",
    label: "Automatyzacje",
    icon: Workflow,
    summary: "Powtarzalne czynności dzieją się same, w tle.",
    capabilities: [
      "Automatyczne przypisywanie zadań i zgłoszeń",
      "Wyzwalacze między systemami bez udziału zespołu",
      "Przypomnienia i eskalacje bez nadzoru człowieka",
      "Eliminacja ręcznego przepisywania danych",
    ],
  },
  {
    id: "ai",
    label: "AI",
    icon: Sparkles,
    summary: "Wsparcie zespołu w codziennych, powtarzalnych decyzjach.",
    capabilities: [
      "Podsumowania rozmów i korespondencji",
      "Priorytetyzacja najbardziej wartościowych leadów",
      "Wsparcie w odpowiedziach na zapytania klientów",
      "Wykrywanie nietypowych sytuacji w danych",
    ],
  },
  {
    id: "analityka",
    label: "Analityka",
    icon: BarChart3,
    summary: "Widoczność tego, co w firmie faktycznie zarabia.",
    capabilities: [
      "Dashboardy sprzedaży i marketingu w jednym miejscu",
      "Śledzenie skuteczności kanałów i kampanii",
      "Raporty rentowności produktów i usług",
      "Dane na bieżąco, bez ręcznego zestawiania arkuszy",
    ],
  },
  {
    id: "integracje",
    label: "Integracje",
    icon: Link2,
    summary: "Systemy zaczynają wymieniać dane bez udziału zespołu.",
    capabilities: [
      "CRM ↔ ERP",
      "CRM ↔ telefonia",
      "CRM ↔ formularze ze strony",
      "CRM ↔ WhatsApp",
      "CRM ↔ magazyn",
      "CRM ↔ księgowość",
      "CRM ↔ płatności",
      "CRM ↔ system rezerwacji",
    ],
  },
];
