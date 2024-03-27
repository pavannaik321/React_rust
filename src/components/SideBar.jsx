import React from "react";

const SideBar = ({ sendDataToParent }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 font-bold  uppercase  md:text-xl text-stone-200">
                Your projects
            </h1>
            <div className="mb-5">
            <button className=" mb-5 rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 " onClick={() => sendDataToParent(0)}>
        {" "}
        + View Products
    </button>
    <button className="rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 " onClick={() => sendDataToParent(1)}>
        {" "}
        + Add Products
    </button>
</div>

<div className="mb-5">
    <button className="rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 " onClick={() => sendDataToParent(2)}>
        {" "}
        + View By ID
    </button>
</div>

<div className="mb-5">
    <button className="rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 " onClick={() => sendDataToParent(3)}>
        {" "}
        + Product below Price
    </button>
</div>
<div className="mb-5">
    <button className="rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 " onClick={() => sendDataToParent(4)}>
        {" "}
        + Delete Product
    </button>
</div>
        </aside>
    );
};

export default SideBar;
