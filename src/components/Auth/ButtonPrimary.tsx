import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface ButtonPrimaryProps extends ButtonProps {
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn("w-full h-11 text-base font-semibold", className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
