"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSearch, FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
type WorkflowStatus = "Completed" | "Not completed";

interface WorkflowItem {
    icon: string;
    workflow: string;
    runName: string;
    lastUpdate: string;
    interactions: number;
    status: WorkflowStatus;
}

const RunsTable = () => {
    const workflows : WorkflowItem [] = [
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Not completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:22", interactions: 84, status: "Completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:23", interactions: 84, status: "Not completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:24", interactions: 84, status: "Completed" },
        { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:25", interactions: 84, status: "Not completed" },
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(workflows.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedWorkflows = workflows.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4 flex-wrap gap-2">
                <h2 className="text-xl font-bold">Runs</h2>
                <div className="flex gap-2 flex-wrap items-center">
                    {/* Status Dropdown */}
                    <div className="relative">
                        <select className="border border-gray-300 rounded-lg text-[#8588AB] px-3 py-1 text-sm outline-none bg-transparent pr-8 appearance-none">
                            <option>Status</option>
                        </select>
                        <FiChevronDown size={20} className="absolute right-2 pr-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#22222F]" />
                    </div>

                    {/* Workflow Dropdown */}
                    <div className="relative">
                        <select className="border border-gray-300 rounded-lg text-[#8588AB] px-3 py-1 text-sm outline-none bg-transparent pr-8 appearance-none">
                            <option>Workflow</option>
                        </select>
                        <FiChevronDown size={20} className="absolute right-2 pr-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#22222F]" />
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search runs"
                            className="border border-gray-300 rounded-lg pl-10 pr-3 py-1 text-sm outline-none bg-transparent"
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
                    </div>
                </div>

            </div>
            <div className="w-full overflow-x-auto md:overflow-visible rounded-xl border-2 border-gray-200">
                <table className="w-full table-auto">
                    <thead className="border-b">
                        <tr>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">Workflow</th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">Run</th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">Last update</th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">Interactions used</th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedWorkflows.map((item, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-2 flex items-center gap-2 font-medium text-[#22222F]">
                                    <Image
                                        src={item.icon}
                                        width={20}
                                        height={20}
                                        alt="icon"
                                        className="border p-1 rounded-sm"
                                    />
                                    {item.workflow}
                                </td>
                                <td className="px-6 py-2 text-[#555770]">{item.runName}</td>
                                <td className="px-6 py-2 text-[#555770]">{item.lastUpdate}</td>
                                <td className="px-6 py-2 text-blue-500">{item.interactions}</td>
                                <td className="px-6 py-2">
                                    {item.status === "Completed" ? (
                                        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                                            {item.status}
                                        </span>
                                    ) : (
                                        <span className="bg-red-200 text-red-800 text-sm px-3 py-1 rounded-full">
                                            {item.status}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 text-sm disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    <FiChevronLeft />
                    Previous
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 text-sm ${page === currentPage
                                ? "border border-gray-300 text-gray-600 rounded-sm font-medium"
                                : "border-gray-300 text-gray-800"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 text-sm disabled:opacity-50"
                    disabled={currentPage === totalPages}
                >
                    Next
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
};

export default RunsTable;