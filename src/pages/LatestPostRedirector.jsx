import { useEffect } from "react";
import { useJournalData } from "../contexts/BlogContext";
import { Navigate } from "react-router-dom";


export function LatestPostRedirector() {

    let journalEntries = useJournalData();

    useEffect(() => {
        let sortedEntries = [...journalEntries].sort((entryA, entryB) => entryB.id - entryA.id);

        let latestEntry = sortedEntries[0];

        Navigate(`/view/${latestEntry.id}`);

    }, [journalEntries]);
}