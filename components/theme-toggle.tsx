"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleMenu() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
      <DropdownMenuRadioItem value="light">
        <Icons.Sun className="mr-2 h-4 w-4" /> Light
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="dark">
        <Icons.Moon className="mr-2 h-4 w-4" /> Dark
      </DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="system">
        <span className="mr-2 h-4 w-4 inline-block">🖥️</span> System
      </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  );
}
