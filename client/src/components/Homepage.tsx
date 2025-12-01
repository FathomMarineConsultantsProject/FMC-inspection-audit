import React from 'react'
import { useNavigate } from 'react-router-dom'

const kpis = [
    { id: 'prelim', title: 'Preliminary Report' },
    { id: 'daily', title: 'Daily Report' },
    { id: 'conditional', title: 'Conditional Assessment' },
    { id: 'observation', title: 'Observation Report' },
]

const Homepage: React.FC = () => {
    const navigate = useNavigate()

    const handleCreateReport = () => {
        navigate('/create-report')
    }

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Inspection Audit Platform</h1>
                    <button
                        onClick={handleCreateReport}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Create Report
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {kpis.map((kpi) => (
                        <div key={kpi.id} className="bg-white p-4 rounded shadow">
                            <h3 className="text-sm text-gray-600">{kpi.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage