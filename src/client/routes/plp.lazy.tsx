import { createLazyFileRoute } from '@tanstack/react-router'
import { Card } from '../components/Card';
import { trpc } from '../../util/trpc';

export const Route = createLazyFileRoute('/plp')({
  component: Plp
})

const Cards = ({ items }: { items: {id:string, name:string}[] | undefined }) => items?.map((item) => <Card key={item.id} product={item} />);

function Plp() {
  const { data, isLoading } = trpc.productList.useQuery();

  if (isLoading) return <div className="mt-2" >Loading...</div>;

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-auto-flow-column justify-items-center content-center">
      <Cards items={data} />
    </div>
  );
}
