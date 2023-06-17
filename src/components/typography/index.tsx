import React from 'react'
import * as s from './styles'

export function Typography({ variant, content }) {
    return (
        <s.Typography variant={variant}>
            {content}
        </s.Typography>
    )
}