"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type NetworkMode = "smart" | "2g" | "3g" | "full";
type Language = "en" | "te" | "hi";

interface AppContextType {
    networkMode: NetworkMode;
    setNetworkMode: (mode: NetworkMode) => void;
    language: Language;
    setLanguage: (lang: Language) => void;
    isDarkMode: boolean;
    setIsDarkMode: (dark: boolean) => void;
    lastSynced: string | null;
    syncNow: () => void;
    activeNetwork: "2g" | "3g" | "full"; // The actual active mode based on smart detection
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [networkMode, setNetworkMode] = useState<NetworkMode>("smart");
    const [language, setLanguage] = useState<Language>("en");
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [lastSynced, setLastSynced] = useState<string | null>(null);
    const [activeNetwork, setActiveNetwork] = useState<"2g" | "3g" | "full">("full");

    // Load from local storage on mount
    useEffect(() => {
        const savedMode = localStorage.getItem("networkMode") as NetworkMode;
        if (savedMode) setNetworkMode(savedMode);

        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) setLanguage(savedLang);

        const savedDark = localStorage.getItem("darkMode") === "true";
        if (savedDark) setIsDarkMode(savedDark);

        const savedSync = localStorage.getItem("lastSynced");
        if (savedSync) setLastSynced(savedSync);
        else setLastSynced(new Date().toLocaleString());

        updateActiveNetwork(savedMode || "smart");
    }, []);

    const updateActiveNetwork = (mode: NetworkMode) => {
        if (mode === "smart") {
            // Simulate checking connection
            const connection = (navigator as any).connection;
            if (connection) {
                if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
                    setActiveNetwork("2g");
                } else if (connection.effectiveType === '3g') {
                    setActiveNetwork("3g");
                } else {
                    setActiveNetwork("full");
                }
            } else {
                setActiveNetwork("full"); // fallback
            }
        } else {
            setActiveNetwork(mode);
        }
    };

    useEffect(() => {
        localStorage.setItem("networkMode", networkMode);
        updateActiveNetwork(networkMode);
    }, [networkMode]);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode.toString());
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const syncNow = () => {
        const now = new Date().toLocaleString();
        setLastSynced(now);
        localStorage.setItem("lastSynced", now);
        alert("Data synchronized successfully.");
    };

    return (
        <AppContext.Provider value={{
            networkMode,
            setNetworkMode,
            language,
            setLanguage,
            isDarkMode,
            setIsDarkMode,
            lastSynced,
            syncNow,
            activeNetwork
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within an AppProvider");
    return context;
}
