import SectionHeader from "@/components/common/section-header";
import { RocketIcon } from "lucide-react";


export default function Recentlyproject() {
    return (
        <section className="py-20 bg-muted/20">
    <div className="wrapper py-20">
       <SectionHeader
       title="Recently Added Projects"
       Icon={RocketIcon}
       description="The most recently added real-word project"
       />
       <div className="grid-wrapper">
         {Recentlyproject.map(product => (
           <div key={product.id} product = {product} />
           
       ) )
       };
            </div>
        ) :(
            <div className="text-center py-10">
                <p className="text-muted-foreground">No projects found.</p>
            </div>
        )}
        </section>
    );
}