
import React from "react"

type colorCard = 'green' | 'white' | 'black'


export interface propsCard {
    type: colorCard
    title: string 
    imageUrl?: string
    footer?:  React.ReactNode
}