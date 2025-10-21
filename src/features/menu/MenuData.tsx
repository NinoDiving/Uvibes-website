import {
  CalendarDays,
  House,
  ListCheck,
  Newspaper,
  Puzzle,
  Users,
} from "lucide-react";

export const Items = [
    {
        id: 1,
        icon: <House size={32} color="#78C751"/>,
        label: "Accueil",
        color: "#78C751",
        link: "/",
    },
    {
        id: 3,
        icon: <ListCheck size={32} color="#32BDCA"/>,
        label: "Avantages",
        color: "#32BDCA",
        link: "/avantages",
    },
    {
        id: 2,
        icon: <Puzzle size={32} color="#D90A5C"/>,
        label: "Fonctionnement",
        color: "#D90A5C",
        link: "/features",
    },
    {
        id: 4,
        icon: <Users size={32} color="#FD6E00"/>,
        label: "Uvibes",
        color: "#FD6E00",
        link: "/uvibes",
    },
    {
        id: 5,
        icon: <Newspaper size={32} color="#78C751"/>,
        label: "Blog",
        color: "#78C751",
        link: "/blog",
    },
    {
        id: 6,
        icon: <CalendarDays size={32} color="#D90A5C"/>,
        label: "Prendre RDV",
        color: "#D90A5C",
        link: "",
    },
    {
        id: 7,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="loginGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="53%" stopColor="#f76213" />
                        <stop offset="100%" stopColor="#f62570" />
                    </linearGradient>
                </defs>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"
                      stroke="url(#loginGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        ),
        label: "Connexion",
        color: "linear-gradient(90deg, #f76213 53%, #f62570 100%)",
        link: "https://app.uvibes.fr/welcome",
    },
];
