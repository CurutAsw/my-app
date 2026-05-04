export default function user() {
    return(
<section className="h-screen bg-gray-200 flex flex-col justify-center items-center gap-4">
       <div className="bg-white p-8 h-120 w-110 rounded-4xl flex flex-col justify-between text-black relative">
        <div className="absolute top-8 right-8">
            <img src="x.svg" alt="close"/>
        </div>
<div className="font-bold">
    <p className="text-2xl">Client Detail</p>

</div>
<div className="p-1 h-120 w-70 flex flex-col ">
    <img src="user.svg" alt="user"className="w-10 h-10 rounded-full border-4 border-black  object-cover"/>
    <div>
        <p className="p-1">Corenlius Greenfelder</p>
    <div className="bg-green-200 p-2 h-6 w-20 rounded-2xl">
<p>verrifikasi</p>
    </div>
</div>
<div className="">
</div>
</div>
       </div>
</section>
    );
}