import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface ButtonSecondaryProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ className, children, ...props }) => {
  return (
    <Button
      variant="outline"
      className={cn("w-full h-11 text-base font-semibold border-border", className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
