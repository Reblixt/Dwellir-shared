"use client";

import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Or paste in the whole url in here

const { networkConfig } = createNetworkConfig({
  mainnet: { url: getEnvUrl() },
});
const queryClient = new QueryClient();

export default function SuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

function getEnvUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUI_RPC_URL;
  console.log(url);
  return String(url);
}
