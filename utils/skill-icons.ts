import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiFigma,
  SiPython,
  SiPandas,
  SiSelenium,
  SiPostgresql,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    // Automation
    case "python":
      return SiPython;
    case "pandas":
      return SiPandas;
    case "openpyxl":
      return SiPython;
    case "selenium":
      return SiSelenium;
    case "beautifulsoup":
      return SiPython;
    case "web scraping":
      return SiPython;
    case "task automation":
      return SiPython;

    // Frontend
    case "react":
      return SiReact;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "javascript":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;

    // Backend & Databases
    case "mysql":
      return SiMysql;
    case "postgresql":
      return SiPostgresql;
    // Tools
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;

    default:
      return SiFreelancer;
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    // Automation
    case "python":
      return "#ef4444";
    case "pandas":
      return "#dc2626";
    case "openpyxl":
      return "#b91c1c";
    case "selenium":
      return "#991b1b";
    case "beautifulsoup":
      return "#ef4444";
    case "web scraping":
      return "#dc2626";
    case "task automation":
      return "#b91c1c";

    // Frontend
    case "react":
      return "#dc2626";
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff";
    case "tailwind":
      return "#991b1b";
    case "javascript":
      return "#ef4444";
    case "typescript":
      return "#dc2626";
    case "html":
      return "#b91c1c";
    case "css":
      return "#991b1b";

    // Backend & Databases
    case "node js":
    case "nodejs":
      return "#b91c1c";
    case "prisma":
      return "#ef4444";
    case "mongodb":
      return "#7f1d1d";
    case "mysql":
      return "#991b1b";
    case "postgresql":
      return "#dc2626";
    case "firebase":
      return "#ef4444";

    // Tools
    case "git":
      return "#dc2626";
    case "figma":
      return "#b91c1c";

    default:
      return "#ef4444";
  }
};
