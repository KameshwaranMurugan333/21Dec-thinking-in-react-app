import React from "react";

export const SearchBar = ({
    search = "",
    setSearch = () => false,
    isProductsOnly = false,
    setIsProductOnly = () => false
}) => {
    return <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" /><br/>
        <input type={"checkbox"} value={isProductsOnly} onChange={(e) => setIsProductOnly(e.target.checked)} />
        <label>Show only products in stock</label>
    </div>
}