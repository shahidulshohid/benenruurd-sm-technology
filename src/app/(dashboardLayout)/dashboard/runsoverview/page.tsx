"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

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
  const workflows: WorkflowItem[] = [
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Not completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:21", interactions: 84, status: "Completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:22", interactions: 84, status: "Completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:23", interactions: 84, status: "Not completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:24", interactions: 84, status: "Completed" },
    { icon: "/google.png", workflow: "Gmail - Email Received", runName: "Name of the run here", lastUpdate: "23-06-2025 10:25", interactions: 84, status: "Not completed" },
  ];

  const itemsPerPage = 3;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered list based on search
  const filteredWorkflows = useMemo(() => {
    return workflows.filter((item) =>
      item.workflow.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.runName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, workflows]);

  const totalPages = Math.ceil(filteredWorkflows.length / itemsPerPage);

  const paginatedWorkflows = filteredWorkflows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
        <h2 className="text-xl font-bold">Runs</h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 w-full md:w-auto">
          {/* Status Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto border cursor-pointer border-[#D5D6E2] rounded-lg text-[#8588AB] px-3 py-1 text-sm outline-none bg-transparent pr-8 appearance-none">
              <option>Status</option>
            </select>
            <FiChevronDown size={20} className="absolute right-2 pr-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#22222F]" />
          </div>

          {/* Workflow Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto border cursor-pointer border-[#D5D6E2] rounded-lg text-[#8588AB] px-3 py-1 text-sm outline-none bg-transparent pr-8 appearance-none">
              <option>Workflow</option>
            </select>
            <FiChevronDown size={20} className="absolute right-2 pr-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#22222F]" />
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search runs"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset to page 1 when searching
              }}
              className="w-full sm:w-64 border border-gray-300 rounded-lg pl-10 pr-3 py-1 text-sm outline-none bg-transparent"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-xl border border-[#D8D8DF]">
          <table className="w-full table-auto min-w-[768px]">
            <thead style={{ borderBottom: "1px solid var(--border-colors-dark-blue-200, #D8D8DF)" }}>
            <tr>
              <th className="px-3 py-2 text-left text-[#8588AB] font-semibold text-sm">Workflow</th>
              <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Run</th>
              <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Last update</th>
              <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Interactions used</th>
              <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedWorkflows.length ? (
              paginatedWorkflows.map((item, i) => (
                <tr key={i} className="hover:bg-[#FAFAFA] cursor-pointer transition" style={{ borderBottom: "1px solid var(--border-colors-dark-blue-200, #D8D8DF)" }}>
                  <td className="px-3 py-2 flex items-center gap-2 font-semibold text-[#22222F]">
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt="icon"
                       className="border border-[#D5D6E2] p-1 rounded" 
                    />
                    <span className="text-[#22222F] text-sm">{item.workflow}</span>
                  </td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.runName}</td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.lastUpdate}</td>
                  <td className="px-6 py-2 text-[#217AFC] font-semibold text-sm">{item.interactions}</td>
                  <td className="px-6 py-2">
                    {item.status === "Completed" ? (
                      <span className="bg-[#D1FAE5] text-[#059669] font-semibold text-sm px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    ) : (
                      <span className="bg-[#FEF2F2] text-[#D94F4F] font-semibold text-sm px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No matching results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 overflow-x-auto gap-4 whitespace-nowrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-2 md:px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold shadow-sm focus:outline-none"
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
          className="px-2 md:px-4 py-1 border border-gray-300 rounded-lg flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold shadow-sm focus:outline-none"
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
