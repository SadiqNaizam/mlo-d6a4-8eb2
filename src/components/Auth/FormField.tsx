import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FormField: React.FC<FormFieldProps> = ({ className, label, id, ...props }) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      {/* The label is visually hidden to match the design but remains for accessibility */}
      <Label htmlFor={id} className="sr-only">
        {label}
      </Label>
      <Input id={id} className={cn("h-11", className)} {...props} />
    </div>
  );
};

export default FormField;
