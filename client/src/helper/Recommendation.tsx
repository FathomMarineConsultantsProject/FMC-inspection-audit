import React,{useState, type FormEvent} from 'react'

const Recommendation = () => {
    const [data,setData] = useState({
        generalRecommendation:"",
        correctiveAction:"",
        additionalNote:"",
    })
    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value} = e.target;
        setData(prev=>({...prev,[name]:value}));
    }
    const handleSubmit =(e: FormEvent)=>{
        e.preventDefault();
        console.log(data);
    }
    return (
        <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10'>
            
            <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
                Recommendation and Action Taken
            </h1>
            
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label className='block text-gray-700 font-medium mb-1'>General Recommendation</label>
                    <textarea
                        name='generalRecommendation' 
                        value={data.generalRecommendation} 
                        rows={4} 
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100'/>
                </div>
                <div>
                    <label className='block text-gray-700 font-medium mb-1'>Corrective Action Suggested</label>
                    <textarea
                        name='correctiveAction' 
                        value={data.correctiveAction} 
                        rows={4} 
                        onChange={handleChange} 
                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100'/>
                </div>
                <div>
                    <label className='block text-gray-700 font-medium mb-1'>Additional Note</label>
                    <textarea
                        name='additionalNote' 
                        value={data.additionalNote} 
                        rows={4} 
                        onChange={handleChange} 
                        className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100'/>
                </div> 
                <button type='submit'
                    className='px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-md hover:shadow-lg float-right'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Recommendation