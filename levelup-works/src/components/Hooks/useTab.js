import React, { useState } from "react";

export const useTab = () => {
    const [tabSelected, setTabSelected] = useState(1);

    const toggleTab = (number) => {
        setTabSelected(number)
    };

    return { tabSelected, toggleTab }
};