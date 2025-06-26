import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FormField from './FormField';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import LinkActions from './LinkActions';

const LoginFormCard: React.FC = () => {
  // In a real application, you would use a form library like react-hook-form
  // and manage state more robustly.
  // For this example, we'll keep it simple.
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    // Handle form submission logic here
  };

  return (
    <Card className="w-[400px] bg-surface shadow-sm rounded-md">
      <CardHeader className="text-left p-6">
        <CardDescription className="text-muted-foreground">Please enter your details</CardDescription>
        <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <FormField
              id="email"
              label="Email address"
              type="email"
              placeholder="Email adress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <LinkActions />
          <div className="space-y-3 pt-2">
            <ButtonPrimary type="submit">
              Sign up
            </ButtonPrimary>
            <ButtonSecondary>
              {/* 
                CRITICAL REQUIREMENT: Only lucide-react icons are permitted.
                The Google icon is not available in lucide-react.
                Therefore, no icon is rendered here to adhere to the project constraints.
              */}
              Sign in with Google
            </ButtonSecondary>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center p-6 pt-0">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" className="p-0 h-auto text-primary">
            Sign up
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginFormCard;
