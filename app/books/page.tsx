import { Suspense } from 'react';
import BooksPageContent from '@/components/BooksPageContent';

export default function BooksPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-6 py-20 max-w-2xl">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <BooksPageContent />
    </Suspense>
  );
}
