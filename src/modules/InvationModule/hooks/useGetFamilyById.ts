import {
    onSnapshot,
    query,
    collection,
    where,
    limit,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useState } from "react";
import { FamilyType } from "../../../types";

export const useGetFamilyById = () => {
    const [family, setFamily] = useState<FamilyType>({});
    const getFamily = async (family_id: string) => {
        try {
            onSnapshot(
                query(
                    collection(db, "families"),
                    where("surname_id", "==", family_id),
                    limit(1),
                ),
                (snapshot) => {
                    const family = snapshot.docs.map((el) => ({
                        ...(el.data() as FamilyType),
                        docId: el.id,
                    }))[0];
                    setFamily(family);
                },
            );
        } catch (error: any) {
            console.log("error", error);
        }
    };
    return {
        getFamily,
        family,
    };
};
