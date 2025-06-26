import React from 'react';
import { Box } from 'lucide-react';

const LogoHeader: React.FC = () => {
  return (
    <div className="flex w-[400px] items-center gap-2">
      <Box className="h-8 w-8 text-primary" strokeWidth={2.5} />
      <span className="text-2xl font-bold text-foreground">InsideBox</span>
    </div>
  );
};

export default LogoHeader;
