const UserSalaryInfo = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2 w-3/4" >
                <h2 className="text-xl font-roboto">Salary Jun 2024</h2>
                <div className="flex flex-row gap-2">
                    <span htmlFor="userId" className="font-roboto">Search By ID</span>
                    <input className="border focus:outline-none" type="number" id="userId" />
                    <button className="px-4 py-1 bg-orange-500 text-white hover:bg-orange-600">Search</button>
                </div>
                <div className="w-full bg-violet-900 bg-opacity-20 mt-20 p-10 rounded-lg">
                    <div className="grid grid-cols-5 w-full border border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="userId">ID :</label>
                        <span className="col-span-4 px-4 py-2" id="userId">101</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="userName">Name</label>
                        <span className="col-span-4 px-4 py-2" id="userName">Md Pavel Hossain</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="deg">Degsicnation</label>
                        <span className="col-span-4 px-4 py-2" id="deg">Assistant Teacher</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="joiningDate">Joining Date</label>
                        <span className="col-span-4 px-4 py-2" id="joiningDate">15/05/2024</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="netSalary">Net Salary</label>
                        <span className="col-span-4 px-4 py-2" id="netSalary">TK 15000</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="absant">Absant</label>
                        <span className="col-span-4 px-4 py-2" id="absant">10 Days</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="late">Late</label>
                        <span className="col-span-4 px-4 py-2" id="late">8 Days</span>
                    </div>
                    <div className="grid grid-cols-5 w-full border border-t-0 border-black text-xl font-roboto divide-x-[1px] divide-zinc-700">
                        <label className="col-span-1 px-4 py-2" htmlFor="paidAmount">Paid Amount</label>
                        <span className="col-span-4 px-4 py-2" id="paidAmount">TK 12580</span>
                    </div>
                    <div className="my-4 flex flex-row gap-4 ">
                        <button className="px-8 py-1 bg-green-500 text-lg text-white font-roboto hover:bg-green-700">Print</button>
                        <button className="px-8 py-1 bg-orange-500 text-lg text-white font-roboto hover:bg-orange-700">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSalaryInfo;