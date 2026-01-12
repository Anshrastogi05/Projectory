import { Button } from "@/components/ui/button";

export default function Products() {
    return (
        <div>
            <h1>Our Products</h1>
            <p>Explore our range of products designed to meet your needs.</p>
            <Button variant="destructive" className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded" size="lg">View Products</Button>
        </div>
    );
};  
