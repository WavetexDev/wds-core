import React from 'react'
import * as s from './styles'

import { BiUser } from 'react-icons/bi'
import { Typography } from '../../typography'

import { ButtonProps } from '../types'

export function OptionButton({ content }: ButtonProps) {
    return (
        <s.OptionButton>
            <BiUser size={13} />
            <Typography variant={'paragraph-bold'} content={content} />
        </s.OptionButton>
    )
}