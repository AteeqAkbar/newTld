export default function Input (props) {
    return (
        <input 
            {...props}
            className='outline-none border-gray-300 border rounded p-2 mt-3 focus:shadow-inputfocus focus:border-white'
        />
    )
}