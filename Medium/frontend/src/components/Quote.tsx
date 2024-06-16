import batSymbol from "../img/bat2.jpg"
export const Quote = () => {
    return <div className="bg-slate-200 h-screen flex justify-center flex-col">
          <div className="flex justify-center mb-4">
                <img 
                    src={batSymbol} 
                    alt="Bat symbol" 
                    className="w-100 h-24"
                />
            </div>
        <div className="flex justify-center">
      
            <div className="max-w-lg">
                <div className="text-3xl font-bold">
                    "Its not who i am underneath , but what i do defines me"
                </div>
                <div className="max-w-md text-xl font-semibold text-left mt-4">
                    Bruce Wayne
                </div>
                <div className="max-w-md text-sm font-light text-slate-400">
                    CEO | Wayne industries
                </div>
            </div>
        </div>
        
    </div>
}