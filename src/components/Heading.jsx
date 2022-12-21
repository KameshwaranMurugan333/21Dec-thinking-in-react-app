import React from "react";
import { SubHeading } from "./SubHeading";
import { TableItem } from "./TableItems";

export const Heading = ({
    data = [],
    search = "",
    isProductsOnly = false
}) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <td style={{ width: "150px", fontWeight: "bold" }}>Name</td>
                    <td style={{ fontWeight: "bold" }}>Price</td>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    return <div key={index}>
                        <SubHeading subHeading={row.category} />
                        {row.products.filter(_ => _.name.toLowerCase().includes(search.toLocaleLowerCase())).map((product, index) => {
                            if (isProductsOnly) {
                                if (product.stocked === true) {
                                    return <TableItem stocked={product.stocked} key={index} name={product.name} price={product.price} />
                                } else {
                                    return <div key={index}></div>
                                }
                            } else {
                                return <TableItem stocked={product.stocked} key={index} name={product.name} price={product.price} />
                            }
                        })}
                    </div>
                })}
            </tbody>
        </table>
    </div>
}