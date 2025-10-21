"use client";

import {useEffect, useState} from "react";
import {PopupButton} from "react-calendly";
import {Items} from "../../features/menu/MenuData";
import "../../styles/menu/Menu.css";
import MenuItem from "./MenuItem";

type MenuListProps = {
    className: string;
};

export default function MenuList({className}: MenuListProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            {Items.map((item) =>
                item.id === 6 && isClient ? (
                    <PopupButton
                        key={item.id}
                        url="https://calendly.com/uvibescommunication/30min"
                        rootElement={document.body}
                        text="Prendre RDV"
                        className={"calendly-button-menu"}
                    />
                ) : item.id === 7 && className === "menu-items-bottom-nav" ?
                    null
                    : <MenuItem key={item.id} {...item} className={className}/>
            )}
        </>
    );
}
