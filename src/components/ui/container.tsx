import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  [x: string]: any;
}

export function Container({ className, ...props }: Props) {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}
