import React from 'react'
import { useNavigate } from 'react-router-dom'
import VesselDetails from '../helper/VesselDetails'
import Summary from '../helper/Summary'
import Recommendation from '../helper/Recommendation'

const CreateReport: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Create Report</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Vessel Details Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <VesselDetails />
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <Summary />
          </div>

          {/* Recommendation Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <Recommendation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateReport