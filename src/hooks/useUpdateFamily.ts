import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { EStatusInvation } from "../types";

type updateDate = {
    status?: EStatusInvation;
    persons?: Array<{ id: string; name: string }>;
};

export const useUpdateFamily = () => {
    const updateFamily = async (docId: string, date: updateDate) => {
        try {
            await updateDoc(doc(db, "families", docId), {
                ...date,
            });
        } catch (error: any) {
            console.log("error", error);
        }
    };

    return { updateFamily };
};
