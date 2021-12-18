

export default function Paypal() {
  return (
    <div>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Your Email</label>
        <div>
          <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Email" type="text" />
        </div>
      </div>
      <div>
        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
      </div>
    </div>
  )
}