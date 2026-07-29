export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Poznajemy Twoją firmę",
    description:
      "Procesy, sprzedaż, marketing, obsługa klienta, administracja, systemy i problemy — patrzymy na całość, zanim zaproponujemy jedno narzędzie.",
  },
  {
    number: "02",
    title: "Projektujemy architekturę",
    description:
      "Określamy, które procesy powinny zostać uporządkowane, zautomatyzowane i połączone, a które zostają bez zmian.",
  },
  {
    number: "03",
    title: "Dobieramy technologie",
    description:
      "Porównujemy dostępne rozwiązania i wybieramy te, które rzeczywiście pasują do wielkości i specyfiki Twojej firmy.",
  },
  {
    number: "04",
    title: "Pozyskujemy finansowanie",
    description:
      "Sprawdzamy dostępne możliwości finansowania projektu i prowadzimy przedsiębiorcę przez cały proces formalny.",
  },
  {
    number: "05",
    title: "Wdrażamy",
    description:
      "Do projektu dobieramy specjalistów od konkretnych technologii, którzy konfigurują, integrują i szkolą zespół.",
  },
];
