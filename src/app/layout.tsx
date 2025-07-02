import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arden's Website",
  description: "Portfolio website of Arden Wang, aspiring SWE!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            theme="system"
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                error: "group-[.toaster]:bg-red-500 group-[.toaster]:text-white",
                success: "group-[.toaster]:bg-green-500 group-[.toaster]:text-white",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}