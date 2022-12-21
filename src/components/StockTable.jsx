import React from "react";
import { Heading } from "./Heading";
import { SearchBar } from "./SearchBar";

export const StockTable = () => {

    const [search, setSearch] = React.useState("");
    const [isProductsOnly, setIsProductOnly] = React.useState(false);

    const [data, setData] = React.useState([
        {
            category: "Sporting Goods", products: [
                { price: "$49.99", stocked: true, name: "Football" },
                { price: "$9.99", stocked: true, name: "Baseball" },
                { price: "$29.99", stocked: false, name: "Basketball" }
            ]
        },
        {
            category: "Electronics", products: [
                { price: "$99.99", stocked: true, name: "iPod Touch" },
                { price: "$399.99", stocked: false, name: "iPhone 5" },
                { price: "$199.99", stocked: true, name: "Nexus 7" }]
        }
    ])

    return <div>
        {/* Search Bar */}
        <SearchBar
            search={search}
            setSearch={setSearch}
            isProductsOnly={isProductsOnly}
            setIsProductOnly={setIsProductOnly}
        />

        {/* Heading */}
        <Heading data={data} search={search} isProductsOnly={isProductsOnly}/>
    </div>
}