"use client";
import { nhost } from "@/lib/nhost";
import { NhostProvider } from "@nhost/nextjs";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryclient";
import Dashboard from "@/components/pages/dashboard";

export default function Home() {
  return (
    <NhostProvider nhost={nhost}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </NhostProvider>
  );
}
