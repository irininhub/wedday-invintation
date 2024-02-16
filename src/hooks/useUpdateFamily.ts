import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { EStatusInvation } from "../types";
import { useState } from "react";

type updateDate = {
    status?: EStatusInvation;
    persons?: Array<{ id: string; name: string }>;
    form?: {
        alcohol: string[];
        eat: string[];
        other: string;
    };
};

export const useUpdateFamily = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const updateFamily = async (docId: string, date: updateDate) => {
        try {
            await updateDoc(doc(db, "families", docId), {
                ...date,
            });
            setIsSuccess(true);
        } catch (error: any) {
            console.log("error", error);
        }
    };

    return { updateFamily, isSuccess, setIsSuccess };
};
