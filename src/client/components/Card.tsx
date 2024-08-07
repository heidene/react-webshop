export function Card({ product }: { product: { id: string; name: string } }) {
  return (
    <div className="flex items-center justify-center max-w-80">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <div className="prod-title">
            <div className="text-2xl font-bold text-gray-900 uppercase">
              {product.name}
            </div>
            <div className="text-sm text-gray-400 uppercase">
              The best shoes in the marketplace
            </div>
          </div>
          <div className="prod-img pt-4">
            <img
              src="https://images.placeholders.dev/?width=208&height=250&text=product"
              className="object-cover object-center w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row mt-8">
            <div className="text-xl font-bold">65 $</div>
            <div className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
