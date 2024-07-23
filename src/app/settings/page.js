/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

const columns = [
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
];
const data = [
    {
        category: "Account",
        value: true,
    },
    {
        category: "Notifications",
        value: false,
    },
    {
        category: "Language",
        value: "English",
    },
    {
        category: "Theme",
        value: "Dark",
    },
];

function Settings() {
    return (
        <div className="flex flex-col gap-5  w-full">
            <PageTitle title="Settings" />
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default Settings;
