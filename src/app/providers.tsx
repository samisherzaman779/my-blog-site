"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="techxiz-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
