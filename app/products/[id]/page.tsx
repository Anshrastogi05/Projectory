import { Button } from "@/components/ui/button";
export default async function Products({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    return (
        <div>
            <h1>Product Details of product {id}</h1>
            <p>Details for product with ID: {id}</p>
           <Button variant="ghost" className="ml-2 bg-pink-300">Back to Products</Button>
        </div>
    );
}