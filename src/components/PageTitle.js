import { cn } from "@/lib/utils";

function PageTitle({ title, className }) {
    return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
}

export default PageTitle;
