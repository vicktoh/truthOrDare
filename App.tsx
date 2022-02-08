import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ref, onValue, get } from "firebase/database";
import { db } from "./services/firebase";
import  { QuestionsContext } from './hooks/context';
import { Questions } from "./types";
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [questions, setQuestions] = useState<Questions>();
    const [loadingQuestions, setLoadingQuestions] = useState<boolean>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingQuestions(true);
                const dbRef = ref(db, "questions");
                const snapshot = await get(dbRef);
                const data = snapshot.val();
                setQuestions(data);
            } catch (e) {}
        };
        fetchData();
    }, []);

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
              <QuestionsContext.Provider value = {questions || null}>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </QuestionsContext.Provider>
                
            </SafeAreaProvider>
        );
    }
}
