import React from "react";

export const SubHeading = ({
    subHeading = ""
}) => {
    return <p style={{ fontWeight: "bold" }}>{subHeading}</p>
}