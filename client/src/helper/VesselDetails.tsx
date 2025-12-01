import React, { useState, type FormEvent } from "react";
{
    /*const rolesList =[
            "Captain",
            "Chief Engineer",
            "Chief Officer",
            "Second Engineer",
            "Third Engineer",
            "Electrical Engineer",
            "Bosun",
            "Pumpman",
            "Able Seaman",
            "Surveyor"
    ];*/
}
const reportType=[
    "Preliminary Report",
    "Daily Report",
    "Condition Assessment - Deck",
    "Condition Assessment - Engine Room",
    "Observation Photographic Report",
]
const VesselDetails = () => {
    const [vesselData, setVesselData] = useState({
        preparedBy: "",
        reportDate: "",
        shipName: "",
        ImoNumber: "",
        captainName: "",
        chiefEngineer: "",
        port: "",
        reportType: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVesselData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(vesselData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Vessel Details
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Prepared By:</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="preparedBy"
                            value={vesselData.preparedBy}
                            placeholder="Prepared By"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                        />
                        <label className="block text-sm font-medium text-gray-700">Report Date :</label>
                        <input
                            type="date"
                            onChange={handleChange}
                            name="reportDate"
                            value={vesselData.reportDate}
                            placeholder="Report Date`"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                        />
                        <label>Report Type</label>
                        <select
                            name="reportType"
                            value={vesselData.reportType}
                            onChange={handleChange}
                            className="mt-4 block-w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">Select report type</option>
                                {reportType.map((type,index)=>(
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="block text-sm font-medium text-gray-700">Ship Name</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="shipName"
                            value={vesselData.shipName}
                            placeholder="Enter the ship name"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            bg-gray-50"
                        />
                        <label className="block text-sm font-medium text-gray-700">IMO Number</label>

                        <input
                            type="text"
                            onChange={handleChange}
                            name="ImoNumber"
                            value={vesselData.ImoNumber}
                            placeholder="Enter the IMO number"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            bg-gray-50"
                        />
                        <label className="block text-sm font-medium text-gray-700">Captain Name</label>
                        <input
                            type="text"
                            name="captainName"
                            value={vesselData.captainName}
                            onChange={handleChange}
                            placeholder="Enter the Captain name"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            bg-gray-50"
                        />
                        <label className="block text-sm font-medium text-gray-700">Cheif Engineer</label>
                        <input
                            type="text"
                            name="chiefEngineer"
                            value={vesselData.chiefEngineer}
                            onChange={handleChange}
                            placeholder="Enter the Chief Engineer name"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            bg-gray-50"
                        />
                        <label className="block text-sm font-medium text-gray-700">Port of Registry</label>
                        <input
                            type="text"
                            name="port"
                            value={vesselData.port}
                            onChange={handleChange}
                            placeholder="Enter the Port"
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            bg-gray-50"
                        />
                        <button type="submit"
                            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium
                            hover:bg-blue-700 active:scale-95 transition-all duration-150
                            shadow-md hover:shadow-lg">
                                Next
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VesselDetails;
