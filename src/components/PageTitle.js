import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggle-theme";

function PageTitle({ title, className }) {
    return (
        <div className="flex gap-4 items-center">
            <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>
            <ModeToggle />
        </div>
    );
}

export default PageTitle;
