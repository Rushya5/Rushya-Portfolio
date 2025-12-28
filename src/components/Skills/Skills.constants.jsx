import reactIcon from "../../assets/images/skills/react.png";
import htmlIcon from "../../assets/images/skills/html.png";
import cssIcon from "../../assets/images/skills/css.png";
import jsIcon from "../../assets/images/skills/js.png";
import sqlIcon from "../../assets/images/skills/db.png";

import psIcon from "../../assets/images/skills/ps.png";
import figmaIcon from "../../assets/images/skills/figma.png";

export const skillCat = {
  web: {
    categoryName: "Full Stack Development",
    percentage: 45,
    skillList: [
      { name: "HTML", xp: "3+ YRS", icon: htmlIcon },
      { name: "CSS", xp: "3+ YRS", icon: cssIcon },
      { name: "JavaScript", xp: "3+ YRS", icon: jsIcon },
      { name: "React.js", xp: "2+ YRS", icon: reactIcon },
      { name: "Node.js", xp: "2+ YRS", icon: jsIcon },
      { name: "Express.js", xp: "2+ YRS", icon: jsIcon },
      { name: "REST API", xp: "2+ YRS", icon: jsIcon },
      { name: "MongoDB", xp: "2+ YRS", icon: sqlIcon },
      { name: "MySQL", xp: "2+ YRS", icon: sqlIcon },
      { name: "PostgreSQL", xp: "1+ YRS", icon: sqlIcon },
    ],
  },
  game: {
    categoryName: "AI & Machine Learning",
    percentage: 35,
    skillList: [
      { name: "Machine Learning", xp: "2+ YRS", icon: figmaIcon },
      { name: "Deep Learning", xp: "2+ YRS", icon: figmaIcon },
      { name: "NLP", xp: "1+ YRS", icon: figmaIcon },
      { name: "Model Training", xp: "2+ YRS", icon: figmaIcon },
      { name: "AI Deployment", xp: "1+ YRS", icon: figmaIcon },
    ],
  },
  design: {
    categoryName: "Tools & Platforms",
    percentage: 20,
    skillList: [
      { name: "Git & GitHub", xp: "3+ YRS", icon: psIcon },
      { name: "Linux", xp: "2+ YRS", icon: psIcon },
      { name: "Docker", xp: "1+ YRS", icon: psIcon },
      { name: "VS Code", xp: "3+ YRS", icon: psIcon },
      { name: "Firebase", xp: "2+ YRS", icon: psIcon },
      { name: "Vercel", xp: "2+ YRS", icon: psIcon },
      { name: "Netlify", xp: "2+ YRS", icon: psIcon },
    ],
  },
  soft: {
    categoryName: ["Innovative", "Problem-Solver", "Research-Oriented", "Detail-Oriented", "Adaptive", "Collaborative"],
    percentage: 100,
  },
};
