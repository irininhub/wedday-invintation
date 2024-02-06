import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useState } from "react";
import { EStatusInvation, FamilyType } from "../../../types";

export const useAddFamily = () => {
    const [loading, setLoading] = useState(false);
    const addFamily = async (fields: FamilyType) => {
        setLoading(true);
        const data = {
            ...fields,
            link: `${window.location.origin}/${fields.surname_id}`,
            status: EStatusInvation.CREATE,
        };
        try {
            await addDoc(collection(db, "families"), data);
        } catch (error: any) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };
    return {
        addFamily,
        loading,
    };
};
