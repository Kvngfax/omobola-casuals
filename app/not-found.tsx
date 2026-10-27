import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24 text-center">
      <h1 className="font-serif text-6xl font-semibold text-brand">Page not found</h1>
      <p className="mb-8 mt-4 text-lg">That page doesn’t exist, but our catalogue does.</p>
      <Link href="/catalogue" className="inline-flex min-h-11 items-center rounded-full bg-brand px-7 py-3 font-medium text-cream hover:bg-espresso">View catalogue</Link>
    </div>
  );
}
