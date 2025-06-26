import React from 'react';
import { cn } from '@/lib/utils';
import { Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

/**
 * A generic, reusable application header component.
 * This component is intended for general site layout and is not used on the specific login page,
 * which has a minimalist centered layout without a persistent header bar.
 */
const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
      {...props}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Box className="h-8 w-8 text-primary" strokeWidth={2.5} />
          <span className="text-2xl font-bold text-foreground">InsideBox</span>
        </a>

        {/* Placeholder for primary navigation or user actions in a full application */}
        <nav className="flex items-center gap-2">
          <Button variant="ghost">Log In</Button>
          <Button>Sign Up</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
