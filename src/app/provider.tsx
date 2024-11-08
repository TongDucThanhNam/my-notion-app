"use client";

import {NextUIProvider} from "@nextui-org/system";
import {ThemeProviderProps} from "next-themes/dist/types";
import React from "react";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

export function Providers({children}: ProvidersProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}
