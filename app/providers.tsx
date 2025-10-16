"use client";

import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

export default function ClarityProvider({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        Clarity.init('tr5zlykwre');
    }, []);
    return <>{children}</>;
}