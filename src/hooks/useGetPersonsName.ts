import { useState } from "react";
import { FamilyType } from "../types";

export const useGetPersonsName = () => {
    const [text, setText] = useState("names of invited guests");

    const getString = (persons: FamilyType[]) => {
        const res = persons.map((el) => el.name);
        if (persons.length === 1) {
            setText(res.join());
        }
        if (persons.length === 2) {
            setText(res.join(" и "));
        }
        if (persons.length > 2) {
            setText(res.join(", "));
        }
    };

    return { getString, text };
};
