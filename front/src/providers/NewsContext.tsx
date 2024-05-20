import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { INewsResponse } from "./interfaces";

interface INewsContext {
    news: INewsResponse | null;
    getNewsBySubject: (subject: string) => Promise<void>;
    getNewsById: (id: string, subject: string) => Promise<void>;
}

export const NewsContext = createContext<INewsContext>({} as INewsContext);

export function NewsProvider({ children }: { children: React.ReactNode }) {
    const url = "http://localhost:3000";

    const [news, setNews] = React.useState<INewsResponse | null>(null);

    const getNews = async (): Promise<void> => {
        try {
            const { data } = await axios.get<INewsResponse>(`${url}/api`);
            setNews(data);
            console.log(news, "news");
            
        } catch (error) {
            console.log(error);

        }
    }

    const getNewsBySubject = async (subject: string): Promise<void> => {
        try {
            const { data } = await axios.get<INewsResponse>(`${url}/api/${subject}`);
            setNews(data);
            console.log(news, "newsSbubjects");
        } catch (error) {
            console.log(error);
        }

    }

    const getNewsById = async (id: string, subject: string): Promise<void> => {
        try {
            const { data } = await axios.get<INewsResponse>(`${url}/api/${subject}/${id}`);
            setNews(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNews();
        Promise.allSettled([])
    }, []);

    const values: INewsContext = {
        news,
        getNewsBySubject,
        getNewsById
    }

    return (
        <NewsContext.Provider value={values}>{children}</NewsContext.Provider>
    );
}