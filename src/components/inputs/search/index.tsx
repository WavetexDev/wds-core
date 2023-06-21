import React from 'react'
import * as s from './styles'
<<<<<<< HEAD
import { WaveclassTheme } from '@/layout'
=======
import { WaveclassTheme } from '../../../layout';
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

import { InputProps } from '../types'

import { Typography } from '../../typography'

<<<<<<< HEAD
export const SearchInput = (
    props
: InputProps): JSX.Element => {
=======
export const SearchInput = (props: InputProps): JSX.Element => {
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
    return (
        <>
            <WaveclassTheme>
                <s.SearchInputContainer>
                    <s.SearchInputWrapper>
                        {props.icon}
                        <s.SearchInput type={props.type} placeholder={props.placeholder} required={props.required} />
                    </s.SearchInputWrapper>

                    {
                        props.showError &&
                        <s.ErrorMessage>
                            <Typography variant={'small-regular'} content={props.errorMessage} />
                        </s.ErrorMessage>
                    }
                </s.SearchInputContainer>
            </WaveclassTheme>
        </>
    )
}