// src/app/admin/servers/[id]/page.tsx

"use client";

import { Heading } from "@radix-ui/themes";
import ServerDetail from "@/components/server/ServerDetail";
import { use } from "react";

interface ServerDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ServerDetailPage({ params }: ServerDetailPageProps) {
  const resolvedParams = use(params);

  return (
    <div className="flex justify-center items-start pt-8 pb-8 min-h-[calc(100vh-64px)] w-full">
      <div className="w-full max-w-5xl px-0 md:px-6">
        <Heading
          size="6"
          className="mb-6 text-center sm:text-left"
          style={{ marginBottom: "1em" }}
        >
          Detalles del servidor
        </Heading>
        <ServerDetail serverId={resolvedParams.id} />
      </div>
    </div>
  );
}
