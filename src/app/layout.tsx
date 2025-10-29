import "../shared/styles/globals.css";

export const metadata = {
  title: "Dashboard Time",
  description: "Administra tu negocio con inteligencia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
