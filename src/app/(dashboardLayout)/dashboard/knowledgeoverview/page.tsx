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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                <h1 className="text-xl md:text-2xl font-bold">Knowledge</h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold"
                    >
                        + Add knowledge
                    </button>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogCloseContent />
                    </Dialog>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search knowledge"
                            className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm outline-none bg-transparent"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
                    </div>
                </div>
            </div>


            {/* Table */}
            <div className="w-full overflow-x-auto md:overflow-visible rounded-xl border-2 border-b-0 border-gray-200">
                <table className="w-full table-auto min-w-[768px]">
                    <thead className="border-b-2">
                        <tr>
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
                            <tr key={item.id} className="border-b-2 rounded-xl hover:bg-[#FAFAFA] cursor-pointer transition">
                                <td className="px-6 py-2 flex items-center gap-2 font-semibold text-[#22222F]">
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        className="border border-[#D5D6E2] p-1 rounded"
                                    />
                                    <span className="text-[#22222F] text-sm">{item.name}</span>
                                </td>

                                <td className="px-6 py-2 text-[#707187]">{item.size}</td>
                                <td className="px-6 py-2 text-[#707187]">{item.usedIn}</td>
                                <td className="px-6 py-2 text-[#707187]">{item.lastSynced}</td>
                                <td className="px-6 py-2 text-[#707187]">
                                    <span
                                        className={
                                            item.status === "Syncing"
                                                ? "bg-[#EEF2FF] px-2 p-2 rounded-full text-[#6466F1] text-sm font-semibold"
                                                : "text-[#26252C] text-sm bg-[#EEEDF1] px-2 p-1 rounded-full font-semibold"
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-2">
                                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
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
                    className="px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold shadow-sm focus:outline-none focus:ring-2"
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
                            className={`px-3 py-1 text-sm rounded-sm font-medium cursor-pointer ${page === currentPage
                                ? "border border-gray-300 text-[#22222F]"
                                : "border border-transparent text-[#8588AB]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold shadow-sm focus:outline-none focus:ring-2"
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









