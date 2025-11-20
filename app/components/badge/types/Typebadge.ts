import React from "react"

export type statusOptions = 'success' | 'warning' | 'info' | 'error' | 'neutral'

export interface propsBadge {
    label: string
    status?: statusOptions
    icon?: React.ReactNode
}