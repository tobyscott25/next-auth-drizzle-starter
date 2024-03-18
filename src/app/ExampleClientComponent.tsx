"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export function ExampleClientComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <p>Not signed in.</p>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </>
    );
  }

  return (
    <div>
      ClientComponent {status}{" "}
      {status === "authenticated" && (
        <>
          <Image
            src={session.user?.image as string}
            alt="Avatar"
            width={100}
            height={100}
            priority
          />
          <div>{session.user?.name}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
