import styled from '@emotion/styled';

export const GridTwo = styled.div`
    display: Grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`

export const GridThree = styled.div`
    display: Grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
`

export const RecieverArea = styled.div`
    grid-area: Reciever;
`

export const AddressArea = styled.div`
    grid-area: Address;
`
export const DataArea = styled.div`
    grid-area: Data;
`

export const Container = styled.div`
    position: relative;
`