
import { propsBadge } from "./types/Typebadge";
import React from "react";

export const Badge: React.FC<propsBadge> = ({label, status = 'neutral', icon}) => {

   const color = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    error: 'bg-red-100 text-red-800',
    neutral: "text-gray-800"
   }

    return(
        <span className={`inline-flex  items-center gap-2 ${color[status]}`}>
            {icon && (
                <span >{icon}</span>
            )}
            {label}
        </span>
    )
}
