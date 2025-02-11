'use client';

import { LiveQueryProvider } from 'next-sanity/preview';
// import { useMemo } from 'react';

import { getClient } from '@/sanity/sanity.client';

export function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  // const client = useMemo(() => getClient({ token }), [token]);
  const client = getClient({ token });

  return (
    <LiveQueryProvider
      client={client}
      // Uncomment below to see debug reports
      // logger={console}
    >
      {children}
    </LiveQueryProvider>
  );
}
