import BarChar from "@/components/BarChar";
import Card, { CardContent } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const cardData = [
    {
        label: "Total Revenue",
        amount: "$45,231.89",
        description: "+20.1% from last month",
        icon: DollarSign,
    },
    {
        label: "Subscriptions",
        amount: "+2350",
        description: "+180.1% from last month",
        icon: Users,
    },
    {
        label: "Sales",
        amount: "+12,234",
        description: "+19% from last month",
        icon: CreditCard,
    },
    {
        label: "Active Now",
        amount: "+573",
        description: "+201 since last hour",
        icon: Activity,
    },
];
const userSalesData = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        saleAmount: "+$1,999.00",
    },
    {
        name: "Jackson Lee",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$1,999.00",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        saleAmount: "+$39.00",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        saleAmount: "+$299.00",
    },
    {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        saleAmount: "+$39.00",
    },
];

export default function Home() {
    return (
        <div className="flex w-full flex-col gap-5">
            <PageTitle title="Dashboard" />
            <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {cardData.map((d, i) => (
                    <Card key={i} {...d} />
                ))}
            </section>
            <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                <CardContent>
                    <p className="p-4 font-semibold">Overview</p>
                    <BarChar />
                </CardContent>
                <CardContent className="flex justify-between gap-4">
                    <section>
                        {" "}
                        <p>Recent Sales</p>
                        <p className="text-sm text-gray-400">
                            You made 265 sales this month
                        </p>
                    </section>

                    {userSalesData.map((d, i) => (
                        <SalesCard key={i} {...d} />
                    ))}
                </CardContent>
            </section>
        </div>
    );
}