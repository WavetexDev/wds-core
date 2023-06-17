import React from 'react'
import * as s from './styles'

import { Typography } from '../../typography'

import { RegularButtonProps } from './types'

export function RegularButton({ variant, content }: RegularButtonProps) {
    return (
        <s.RegularButton variant={variant}>
            <Typography variant={'paragraph-bold'} content={content} />
        </s.RegularButton>
    )
}