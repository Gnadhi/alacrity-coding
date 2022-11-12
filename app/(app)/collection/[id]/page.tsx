// This is the main page in which cards belong and new cards can be created.
import Card from '@/ui/card/Card';

function Page({ params, searchParams }) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
  return (
    <div className="bg-light-gray-500">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 px-8 py-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}

export default Page;
