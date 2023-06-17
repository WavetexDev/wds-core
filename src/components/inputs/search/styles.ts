import { styled } from "styled-components";

export const SearchInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sp4};
`

export const SearchInputWrapper = styled.div`
    width: 258px;
    height: 40px;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.gray500};
    border-bottom: 1px solid ${({ theme }) => theme.gray500};
    padding-left: ${({ theme }) => theme.spacing.sp12};

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sp8};
`

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;

    &::placeholder {
        color: ${({ theme }) => theme.gray700};
    }

    &:focus {
        outline: 0;
        box-shadow: 0px 4px 4px ${({ theme }) => theme.box_shadow.light}, inset 0px 0px 5px -1px ${({ theme }) => theme.gray500}
    }
`

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.red};
`