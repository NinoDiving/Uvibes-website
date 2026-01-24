import {
    CalendarDays,
    House,
    ListCheck,
    Newspaper,
    Puzzle,
    Users,
} from "lucide-react";
import NextImage from "next/image";

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
            <NextImage
                src="/images/icone-connexion.svg"
                width={100}
                height={100}
                alt="Logo Connexion"
                className="icon-connexion"
            />
        ),
        label: "",
        color: "linear-gradient(90deg, #f76213 53%, #f62570 100%)",
        link: "https://app.uvibes.fr/welcome",
    },
];
