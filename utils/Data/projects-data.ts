export const projectsData = [
  {
    id: 1,
    name: "Administrative Payroll Automator",
    description:
      "A high-impact Python automation suite designed for Corposalud Aragua to streamline the consolidation of administrative payroll records. The system processes complex TXT and PDF data, performs automated calculations, and generates consolidated Excel reports. It eliminates hours of manual data entry, ensuring 100% accuracy in financial records and significantly reducing operational overhead.",
    tools: [
      "Python",
      "Pandas",
      "Openpyxl",
      "Regular Expressions (Re)",
      "OS Module",
    ],
    role: "Lead Automation Engineer",
    code: "https://github.com/watchtheblind/CORPOSALUD-TXT",
    demo: "",
    date: "2024-02-15",
    images: ["/projects/automation.jpg"], // Actualiza con tus capturas
    videos: [""],
    highlights: [
      "Transformed a 4-hour manual reporting process into a 10-second automated execution.",
      "Implemented advanced Regex patterns to parse and validate inconsistent legacy text formats.",
      "Automated the generation of 'Consolidado de Puntos de Cuenta' with dynamic Excel formatting.",
    ],
    challenges: [
      "Handling high-variance formatting in legacy administrative files.",
      "Ensuring strict data integrity for sensitive financial payroll information.",
    ],
  },
  {
    id: 2,
    name: "Digital Food Stamp (Cesta Ticket) Processor",
    description:
      "A specialized automation tool for processing and auditing food stamp benefits. This system automates the verification of employee records against benefit tables, flagging inconsistencies and generating ready-to-print reports. It was built to handle thousands of records for public sector administration.",
    tools: ["Python", "Excel Automation", "Data Cleaning", "Pandas"],
    role: "Automation Developer",
    code: "https://github.com/watchtheblind/CORPOSALUD-CESTA-TICKET",
    demo: "",
    date: "2024-01-10",
    images: ["/projects/automation.jpg"],
    videos: [""],
    highlights: [
      "Optimized mass data cross-referencing between multiple institutional databases.",
      "Reduced human error in benefit allocation by implementing automated validation rules.",
    ],
    challenges: [
      "Managing large-scale datasets while maintaining system performance.",
    ],
  },
  {
    id: 3,
    name: "Smart Email Automation System",
    description:
      "A robust Python-based communication engine designed to automate professional email workflows. It handles dynamic template rendering, attachment management, and bulk delivery with personalized data injection. Perfect for institutional announcements and automated reporting cycles.",
    tools: ["Python", "SMTP Lib", "Email MIME", "Environment Variables"],
    role: "Backend & Automation Developer",
    code: "https://github.com/watchtheblind/EMAIL-AUTOMATION-SYSTEM",
    demo: "",
    date: "2023-11-20",
    images: ["/projects/js-automation.jpg"],
    videos: [""],
    highlights: [
      "Built a secure SMTP integration for high-deliverability automated mailing.",
      "Implemented dynamic HTML template injection for personalized communication at scale.",
    ],
    challenges: [
      "Securing sensitive credentials using encrypted environment variables.",
      "Handling asynchronous delivery to prevent server timeouts.",
    ],
  },
  {
    id: 4,
    name: "HealthCare Appointment Management",
    description:
      "A full-stack medical system focused on optimizing patient-doctor interactions. It includes a structured relational database for patient history, automated scheduling logic, and an intuitive interface for healthcare providers to manage workflows without administrative friction.",
    tools: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Relational Databases"],
    role: "Full-stack Developer",
    code: "https://github.com/watchtheblind/SISTEMA-CITAS-MEDICAS",
    demo: "",
    date: "2023-08-05",
    images: ["/projects/phpjs-automation.jpg"],
    videos: [""],
    highlights: [
      "Designed a normalized SQL database schema to handle complex medical record relations.",
      "Built a responsive interface for real-time appointment tracking and management.",
    ],
    challenges: [
      "Implementing secure data handling for sensitive patient information.",
    ],
  },
];
