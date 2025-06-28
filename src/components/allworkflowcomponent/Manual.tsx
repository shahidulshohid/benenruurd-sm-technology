"use client";

import { FaRegHandPaper } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdBatchPrediction } from "react-icons/md";

export default function ManualComponent() {
    return (
        <div className="rounded-br-lg rounded-bl-lg shadow w-full p-0 border border-t-0">
            <div className="space-y-2">
                <div
                    className="flex justify-between items-center p-3" >
                    <div className="flex items-center gap-3">
                        <div className="border p-1 rounded">
                            <FaRegHandPaper size={18} />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                Start a single run
                            </h3>
                            <p className="text-xs text-gray-500">Trigger a single run on demand</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
            </div>
            <div className="space-y-2">
                <div
                    className="flex justify-between items-center p-3" >
                    <div className="flex items-center gap-3">
                        <div className="border p-1 rounded">
                            <MdBatchPrediction />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">
                                Start a batch of runs
                            </h3>
                            <p className="text-xs text-gray-500">Trigger multiple runs at once</p>
                        </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
            </div>
        </div>
    );
}