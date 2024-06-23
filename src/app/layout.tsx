import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/redux/Provider";
import NextAuthProvider from "./NextAuthProvider";
import getCurrentUser from "./actions/GetCurrentUserState";
import InitialUserData from "@/components/initialUserData/InitialUserData";
import ModelParent from "@/components/modelParent/ModelParent";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userDataFromServer = await getCurrentUser();
  

  return (
    <html lang="en">
      {/* supress hydration problem because of extension problem this is description of the problem 
      url : https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
      <body
        className={`${poppins.className} relative`}
        suppressHydrationWarning={true}
      >
        <NextAuthProvider>
          <StoreProvider>
            <InitialUserData userData={userDataFromServer} />
            <Header />

    
            <Toaster position="top-center" />
            {children}
            <ModelParent/>
          </StoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
