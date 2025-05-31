'use client';

import { Box, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

export default function CreateConfigPage() {
  const router = useRouter();
  
  return (
    <Box className="p-8">
      <Button 
        variant="soft" 
        onClick={() => router.push('/admin/configs')}
        className="mb-4"
      >
        &larr; Volver a la lista
      </Button>
      
    </Box>
  );
}
