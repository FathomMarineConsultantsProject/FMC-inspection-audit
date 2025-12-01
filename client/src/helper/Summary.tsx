import React, { useState, type FormEvent } from 'react'

const Summary = () => {
    const [findingData, setFindingData] = useState({
        bridge: '',
        accommodation: '',
        deck: '',
        engineRoom: '',
        documentation: '',
        executiveSummary: '',
        recommendationSummary: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLTextAreaElement | HTMLInputElement
        setFindingData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(findingData)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Inspection Finding</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="bridge" className="block text-sm font-medium text-gray-700 mb-2">
                Bridge
                </label>
                <textarea
                id="bridge"
                name="bridge"
                value={findingData.bridge}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter bridge findings..."
                />
            </div>

            <div>
                <label htmlFor="accommodation" className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation
                </label>
                <textarea
                id="accommodation"
                name="accommodation"
                value={findingData.accommodation}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter accommodation findings..."
                />
            </div>

            <div>
                <label htmlFor="deck" className="block text-sm font-medium text-gray-700 mb-2">
                Deck
                </label>
                <textarea
                id="deck"
                name="deck"
                value={findingData.deck}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter deck findings..."
                />
            </div>

            <div>
                <label htmlFor="engineRoom" className="block text-sm font-medium text-gray-700 mb-2">
                Engine room
                </label>
                <textarea
                id="engineRoom"
                name="engineRoom"
                value={findingData.engineRoom}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter engine room findings..."
                />
            </div>

            <div>
                <label htmlFor="documentation" className="block text-sm font-medium text-gray-700 mb-2">
                Documentation
                </label>
                <textarea
                id="documentation"
                name="documentation"
                value={findingData.documentation}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter documentation findings..."
                />
            </div>

            <div>
                <label htmlFor="executiveSummary" className="block text-sm font-medium text-gray-700 mb-2">
                Executive Summary
                </label>
                <textarea
                id="executiveSummary"
                name="executiveSummary"
                value={findingData.executiveSummary}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter executive summary..."
                />
            </div>

            <div>
                <label htmlFor="recommendationSummary" className="block text-sm font-medium text-gray-700 mb-2">
                Recommendation & Summary
                </label>
                <textarea
                id="recommendationSummary"
                name="recommendationSummary"
                value={findingData.recommendationSummary}
                rows={4}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter recommendations..."
                />
            </div>

            <div className="pt-4">
                <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Summary