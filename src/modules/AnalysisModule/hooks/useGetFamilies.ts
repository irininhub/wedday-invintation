import { onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { useState } from "react";
import { FamilyType } from "../../../types";

export const useGetFamilies = () => {
    const [families, setFamilies] = useState<FamilyType[]>([]);
    const getFamilies = async () => {
        try {
            onSnapshot(query(collection(db, "families")), (snapshot) => {
                const families = snapshot.docs.map((el) => ({
                    ...(el.data() as FamilyType),
                    docId: el.id,
                }));
                setFamilies(families);
            });
        } catch (error: any) {
            console.log("error", error);
        }
    };
    return {
        getFamilies,
        families,
    };
};
