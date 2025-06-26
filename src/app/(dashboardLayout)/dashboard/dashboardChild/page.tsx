import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";

type WorkflowStatus = "Active" | "Inactive";
type IssueStatus = "error" | "none";

interface WorkflowItem {
  workflow: string;
  icon: string;
  lastRun: string;
  issue: string;
  issueStatus: IssueStatus;
  status: WorkflowStatus;
}

//   explore
interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

function DashboardChild() {
  const workflows: WorkflowItem[] = [
    {
      workflow: "Gmail - Email Received",
      icon: "/google.png",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Active",
    },
    {
      workflow: "Gmail - Email Received",
      icon: "/google.png",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Inactive",
    },
    {
      workflow: "Gmail - Email Received",
      icon: "/google.png",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Active",
    },
  ];
  //   explore
  const infoCards: InfoCardProps[] = [
    {
      title: "Documentation",
      description:
        "Learn about the best practices and check all functions of the platform.",
      icon: "/dashboardIcons/explore1.png",
    },
    {
      title: "Templates",
      description: "Explore pre-built workflows for common use cases.",
      icon: "/dashboardIcons/explore1.png",
    },
    {
      title: "Documentation",
      description: "Get support from other users and exchange ideas for new workflows and functions.",
      icon: "/dashboardIcons/explore1.png",
    },
  ];

  return (
    <div className="w-full px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Image src="/messageImg.png" width={40} height={40} alt="Message" />
        <Link href="/dashboard/dashboard">
          <Button className="bg-blue-500 hover:bg-blue-500 flex items-center gap-2">
            <HiPlus /> New Workflow
          </Button>
        </Link>
      </div>

      {/* Workflows that needs attention Table Section */}
      <div className="mb-24">
        <h3 className="text-xl text-[#22222F] font-semibold mb-3">
          Workflows that need attention
        </h3>
        <div className="w-full overflow-x-auto md:overflow-visible rounded-xl border-2 border-gray-200">
          <table className="w-full table-auto min-w-[768px]">
            <thead className="border-b">
              <tr>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Workflow
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Last run
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Issue
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((item, i) => (
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
                  <td className="px-6 py-2 text-[#555770]">{item.lastRun}</td>
                  <td className="px-6 py-2">
                    <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                      {item.issue}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    {item.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                        Inactive
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Most recent workflows Table Section */}
      <div className="my-24">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl text-[#22222F] font-semibold">
            Workflows that need attention
          </h3>
          <Button variant="outline">See all workflows</Button>
        </div>
        <div className="w-full overflow-x-auto md:overflow-visible rounded-xl border-2 border-gray-200">
          <table className="w-full table-auto min-w-[768px]">
            <thead className="border-b">
              <tr>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Workflow
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Last run
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Issue
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((item, i) => (
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
                  <td className="px-6 py-2 text-[#555770]">{item.lastRun}</td>
                  <td className="px-6 py-2">
                    <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                      {item.issue}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    {item.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                        Inactive
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Most recent runs Table Section */}
      <div className="my-24">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl text-[#22222F] font-semibold">
            Most recent runs
          </h3>
          <Button variant="outline">See all runs</Button>
        </div>
        <div className="w-full overflow-x-auto md:overflow-visible rounded-xl border-2 border-gray-200">
          <table className="w-full table-auto min-w-[768px]">
            <thead className="border-b">
              <tr>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Workflow
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Last run
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Issue
                </th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((item, i) => (
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
                  <td className="px-6 py-2 text-[#555770]">{item.lastRun}</td>
                  <td className="px-6 py-2">
                    <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                      {item.issue}
                    </span>
                  </td>
                  <td className="px-6 py-2">
                    {item.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                        Inactive
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* explore */}
      <div className="my-24">
        <h3 className="text-xl text-[#22222F] font-semibold mb-3">
          explore   
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-[#E4E4E7] bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={item?.icon}
                width={20}
                height={20}
                alt="item?.title"
                className="w-4 h-4 flex items-center justify-center text-gray-400"
              />
              <div>
                <h3 className="text-sm font-semibold text-[#1A1A1A]">
                  {item?.title}
                </h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardChild;
