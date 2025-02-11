import Link from 'next/link';

export function PreviewBanner() {
  return (
    <div className="bg-secondary p-3 text-center">
      {'Previewing draft content. '}
      <Link
        className="underline transition hover:opacity-70"
        href="/api/exit-preview"
      >
        Exit preview mode
      </Link>
    </div>
  );
}
