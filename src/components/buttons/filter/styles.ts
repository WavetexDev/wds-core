import { styled } from 'styled-components'

export const FilterButton = styled.button`
    width: 134px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sp8};

    color: ${(props) => props.theme.secondary};

    border: 1px solid ${(props) => props.theme.gray300};
    box-shadow: ${(props) => props.theme.box_shadow.dark};
    border-radius: 20px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`