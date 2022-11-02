import BoxGrid from '@/ui/box-grid';

function Page({ params, searchParams }) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
  return (
    <div className="bg-red-100">
      <BoxGrid />
    </div>
  );
}

export default Page;
