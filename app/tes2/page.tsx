const UserAvatar = ({ className = "" }) => (
    <div className={`w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden ${className}`}>
        
        <img src="user.svg" alt="user" className="w-5 h-5 text-gray-400" /> 
    </div>
);

const Badge = ({ text } : { text: string }) => (
    <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm z-10">
        {text}
    </div>
);
export default function tes2() {
    return (
     <section className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-8 relative">
      <div className="absolute top-8 left-8">
<img src="horse.svg" alt="Kuda"  className="w-12 h-12"/>
      </div>
      <div className="flex gap-4">
        <div className="bg-purple-400 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-blue-950 relative">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <p className="text-4xl font-bold">Photoshop</p>
    <p className="font-bold">in 3 days</p>
</div>
<div className="absolute bottom-5 right-5 flex -space-x-4 items-center">
             <img src="https://randomuser.me/api/portraits/women/70.jpg" alt="User 1" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
            
            <img src="https://randomuser.me/api/portraits/men/69.jpg" alt="User 2" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>

            <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="User 3" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
           
            <div className="w-10 h-10 rounded-full bg-white border-4 border-white flex items-center justify-center ring-1 ring-black/5">
              <span className="text-xl font-bold text-blue-950">9+</span>
            </div>
          </div>
        </div>
        
         <div className="bg-orange-400 p-8 h-72 w-122 rounded-4xl flex flex-col justify-between text-blue-950 relative">
            <div className="absolute top-8 right-8">
               <img src="star.svg" alt="Star"  className="w-7 h-7"/>            
               </div>
            <div className="flex gap-3">
                <img src="robot.svg" alt="Ai" />
                <p className="font-bold">Ai</p>
            </div>
<div>
    <p className="text-3xl font-bold">DALL•E 2, Midjourney, Stable DIffusion</p>
    <p className="font-bold">in 5 days</p>
</div>
<div className="absolute bottom-5 right-5 flex -space-x-4 items-center">
             <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="User 1" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
            
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User 2" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>

            <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="User 3" className="w-10 h-10 rounded-full border-4 border-white object-cover ring-1 ring-black/5"/>
           
            <div className="w-10 h-10 rounded-full bg-white border-4 border-white flex items-center justify-center ring-1 ring-black/5">
              <p className="text-xl font-bold text-blue-950">9+</p>
            </div>
          </div>
        </div>
        </div>

<div className="flex gap-4">
        <div className="bg-red-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <p className="text-4xl font-bold">Figma</p>
    <p className="font-bold">8 hours ago</p>
</div>
        </div>  

      <div className="bg-green-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="code-circle.svg" alt="code" />
                <p className="font-bold">Coding</p>
            </div>
<div>
    <p className="text-4xl font-bold">Phyton</p>
    <p className="font-bold">2 days ago</p>
</div>
        </div>  
         <div className="bg-blue-400 p-8 h-72 w-80 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-3">
                <img src="palette.svg" alt="palette" />
                <p className="font-bold">Design</p>
            </div>
<div>
    <p className="text-4xl font-bold">Sketch</p>
    <p className="font-bold">4 Days ago</p>
</div>
        </div>  
        </div>
        <div className="absolute bottom-10 right-10">
<p className="text-gray-500 font-bold">Day 20 / 365</p>
        </div>
        </section>
    )

}