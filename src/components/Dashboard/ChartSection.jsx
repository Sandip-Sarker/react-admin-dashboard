import React from "react";
import RevnueChart from "./RevnueChart";
import SaleChart from "./SaleChart";

const ChartSection = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 col-span-2">
                <RevnueChart/>
            </div>
            <div>
                <SaleChart/>
            </div>
        </div>
    )
}

export default ChartSection;