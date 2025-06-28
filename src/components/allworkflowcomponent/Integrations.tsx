"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { SiSlack, SiGmail, SiNotion, SiAsana, SiLinear, SiGoogledrive } from "react-icons/si";
import { LuCalendarFold } from "react-icons/lu";

export default function IntegrationsPage() {
  const sections = [
    {
      title: "Communication",
      integrations: [
        { icon: <SiSlack size={18} />, name: "Slack" },
      ],
    },
    {
      title: "E-mail",
      integrations: [
        { icon: <SiGmail size={18} />, name: "Gmail" },
      ],
    },
    {
      title: "Project Management",
      integrations: [
        { icon: <SiNotion size={18} />, name: "Notion" },
        { icon: <SiLinear size={18} />, name: "Linear" },
        { icon: <SiAsana size={18} />, name: "Asana" },
      ],
    },
    {
      title: "File Storage",
      integrations: [
        { icon: <SiGoogledrive size={18} />, name: "Google Drive" },
      ],
    },
    {
      title: "Calendar",
      integrations: [
        { icon: <LuCalendarFold size={18} />, name: "Google Calendar" },
      ],
    },
  ];

  return (
    <div className="rounded-lg shadow w-full max-w-md p-0 border border-t-0">
      {sections.map((section) => (
        <div key={section.title}>
          {/* Section Title */}
          <div className="border-t border-b">
            <h4 className="text-xs font-semibold text-gray-500 px-4 py-3">
              {section.title}
            </h4>
          </div>

          {/* Integration Items */}
          <div>
            {section.integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex justify-between items-center p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="border p-1 rounded">
                    {integration.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {integration.name}
                  </h3>
                </div>
                <MdKeyboardArrowRight className="text-gray-400" size={20} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
