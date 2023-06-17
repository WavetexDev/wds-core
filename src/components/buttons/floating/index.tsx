import React from 'react'
import * as s from './styles'

import { TfiPlus } from 'react-icons/tfi'

import { FloatingButtonProps } from './types'

export function FloatingButton({ variant }: FloatingButtonProps) {
    return (
        <s.FloatingButton variant={variant}>
            <TfiPlus size={16} />
        </s.FloatingButton>
    )
}