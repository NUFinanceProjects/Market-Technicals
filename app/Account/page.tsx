import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Profile | Market Technicals",
  description:
    "Sign in to Market Technicals, review completed interview questions, score history, and behavioral story references.",
  alternates: {
    canonical: "/Account",
  },
};

export default function AccountPage() {
  return <Home initialScreen="account" />;
}
