import React from 'react'
import * as s from './styles'
import { WaveclassTheme } from '@/layout';

import { InputProps } from '../types'

import { Typography } from '../../typography'

export const SearchInput = (props: InputProps): JSX.Element => {
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