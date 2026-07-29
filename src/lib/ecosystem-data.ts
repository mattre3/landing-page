import type { LucideIcon } from "lucide-react";
import {
  Users,
  Megaphone,
  Phone,
  Mail,
  MessageCircle,
  MessageSquare,
  CalendarCheck,
  Layers,
  Warehouse,
  Calculator,
  CreditCard,
  Wrench,
  Sparkles,
} from "lucide-react";

export type EcosystemModule = {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
};

export const ecosystemModules: EcosystemModule[] = [
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    description: "Handlowiec widzi całą historię klienta i wie, jaki jest kolejny krok.",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    description: "Kampanie i leady trafiają wprost do sprzedaży, bez ręcznego przepisywania.",
  },
  {
    id: "telefonia",
    label: "Telefonia",
    icon: Phone,
    description: "Każde połączenie zapisuje się przy kliencie razem z notatką i nagraniem.",
  },
  {
    id: "email",
    label: "E-mail",
    icon: Mail,
    description: "Cała korespondencja z klientem widoczna w jednym miejscu, bez szukania w skrzynce.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    description: "Wiadomości z komunikatorów trafiają do tej samej historii kontaktu.",
  },
  {
    id: "sms",
    label: "SMS",
    icon: MessageSquare,
    description: "Automatyczne przypomnienia i potwierdzenia wysyłane bez udziału zespołu.",
  },
  {
    id: "rezerwacje",
    label: "Rezerwacje",
    icon: CalendarCheck,
    description: "Klient rezerwuje termin online, a kalendarz zespołu aktualizuje się sam.",
  },
  {
    id: "erp",
    label: "ERP",
    icon: Layers,
    description: "Zamówienia, produkcja i sprzedaż operują na tych samych, spójnych danych.",
  },
  {
    id: "magazyn",
    label: "Magazyn",
    icon: Warehouse,
    description: "Sprzedaż widzi realny stan magazynowy zanim złoży obietnicę klientowi.",
  },
  {
    id: "ksiegowosc",
    label: "Księgowość",
    icon: Calculator,
    description: "Faktury i płatności synchronizują się automatycznie, bez podwójnej pracy.",
  },
  {
    id: "platnosci",
    label: "Płatności",
    icon: CreditCard,
    description: "Status płatności widoczny od razu przy zamówieniu i przy kliencie.",
  },
  {
    id: "serwis",
    label: "Serwis",
    icon: Wrench,
    description: "Zgłoszenia serwisowe połączone z historią zakupów i wcześniejszych napraw.",
  },
  {
    id: "ai",
    label: "AI",
    icon: Sparkles,
    description: "Podsumowania rozmów, priorytetyzacja leadów i odpowiedzi wspierane przez AI.",
  },
];
