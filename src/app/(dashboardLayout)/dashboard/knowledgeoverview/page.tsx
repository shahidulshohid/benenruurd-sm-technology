"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { Dialog } from "@/components/ui/dialog"
import { DialogCloseContent } from '../../../../components/AddKnoledge-modal';

interface KnowledgeItem {
    id: number;
    icon: string;
    name: string;
    size: string;
    usedIn: string;
    lastSynced: string;
    status: "Synced" | "Syncing";
}

const KnowledgePage = () => {
    const knowledgeItems: KnowledgeItem[] = [
        {
            id: 1,
            icon: "/google.png",
            name: "Briefing_PDF_Document.pdf",
            size: "4.12 MB",
            usedIn: "3 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Syncing",
        },
        {
            id: 2,
            icon: "/google.png",
            name: "Untitled text",
            size: "2.31 B",
            usedIn: "1 workflow",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 3,
            icon: "/google.png",
            name: "Briefing_PDF_Document.pdf",
            size: "11.32 MB",
            usedIn: "0 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 4,
            icon: "/google.png",
            name: "Sample_Doc.pdf",
            size: "5.67 MB",
            usedIn: "2 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 5,
            icon: "/google.png",
            name: "Note.txt",
            size: "1.23 KB",
            usedIn: "1 workflow",
            lastSynced: "27-06-2025 02:53",
            status: "Syncing",
        },
        {
            id: 6,
            icon: "/google.png",
            name: "Report_Final.pdf",
            size: "7.45 MB",
            usedIn: "4 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 7,
            icon: "/google.png",
            name: "Summary.docx",
            size: "2.11 MB",
            usedIn: "2 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 3;

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredItems = knowledgeItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    //add knowledge modal 
    const [open, setOpen] = useState<boolean>(false)


    return (
        <div className="w-full px-6 py-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Knowledge</h1>
                <div className="flex items-center gap-2">
                    <button onClick={() => setOpen(true)} className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                        + Add knowledge
                    </button>
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogCloseContent />
                    </Dialog>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search knowledge"
                            className="border border-gray-300 rounded-lg pl-10 pr-3 py-1 text-sm outline-none bg-transparent"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-200">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                                File name
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                                File size
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                                Used in
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                                Last synced
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                                Status
                            </th>
                            <th className="px-6 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id} className="border-b border-gray-300">
                                <td className="px-6 py-2 flex items-center gap-2 text-[#22222F] font-medium">
                                    <Image
                                        src={item.icon}
                                        width={20}
                                        height={20}
                                        alt="icon"
                                        className="border border-gray-300 rounded p-1"
                                    />
                                    {item.name}
                                </td>

                                <td className="px-6 py-2 text-[#707187]">{item.size}</td>
                                <td className="px-6 py-2 text-[#707187]">{item.usedIn}</td>
                                <td className="px-6 py-2 text-[#707187]">{item.lastSynced}</td>
                                <td className="px-6 py-2 text-[#707187]">
                                    <span
                                        className={
                                            item.status === "Syncing"
                                                ? "bg-[#D5D6E2] px-2 p-1 rounded-full text-[#6466F1] text-sm font-semibold"
                                                : "text-[#26252C] text-sm bg-[#EEEDF1] px-2 p-1 rounded-full font-semibold"
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-2">
                                    <button className="text-red-500 hover:text-red-700">
                                        <MdOutlineDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
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
                            className={`px-3 py-1 text-sm rounded-sm font-medium ${page === currentPage
                                ? "border border-gray-300 text-gray-600"
                                : "border border-transparent text-gray-800"
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

export default KnowledgePage;









