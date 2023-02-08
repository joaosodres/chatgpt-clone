import { SessionProvider } from '@/components/SessionProvider';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import '../styles/globals.css';

import SideBar from '@/components/SideBar';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">

              <div className="bg-sideBarBackground max-w-ws h-screen overflow-y-auto
          md:min-w-[20rem]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-background flex-1">{children}</div>

            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
