import { Box } from "@radix-ui/themes";
import Layout from "@/components/layout/Layout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Box className="min-h-screen ">{children}</Box>
    </Layout>
  );
}
