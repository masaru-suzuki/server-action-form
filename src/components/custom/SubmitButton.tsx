'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

function Loader({ text }: { readonly text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      <p>{text}</p>
    </div>
  );
}

interface SubmitButtonProps {
  text: string;
  loadingText: string;
  className?: string;
  pending?: boolean;
}

export function SubmitButton({
  text,
  loadingText,
  pending,
  className,
}: Readonly<SubmitButtonProps>) {
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={cn(className)}
    >
      {pending ? <Loader text={loadingText} /> : text}
    </Button>
  );
}
