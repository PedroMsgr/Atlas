import { Box } from '@radix-ui/themes';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="min-h-screen bg-gray-50">
      {children}
    </Box>
  );
}
