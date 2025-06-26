import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LinkActions: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label
          htmlFor="remember"
          className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember for 30 days
        </Label>
      </div>
      <Button variant="link" className="p-0 h-auto text-sm font-normal text-primary">
        Forgot password
      </Button>
    </div>
  );
};

export default LinkActions;
