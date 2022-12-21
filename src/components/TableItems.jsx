import React from "react";

export const TableItem = ({
    name = "",
    price = "",
    stocked = true
}) => {
    return <tr>
        <td style={{ width: "250px", color: stocked ? "black" : "red" }}>{name}</td>
        <td style={{ color: stocked ? "black" : "red" }}>{price}</td>
    </tr>
}