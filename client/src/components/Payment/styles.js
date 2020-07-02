import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 25px;
`

export const Title = styled.div`
    position: absolute;
    font-size: 24px;
    transform: translate(-50%, 50%);
    left: 50%;
    top: 10px;
`

export const BackDrop = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background-color: skyblue;
    transform: rotate(-45deg) translateX(-20px) translateY(-60px);
    border-radius: 50%;
`

export const PaymentCard = styled.div`
    position: relative;
    width: 325px;
    height: 200px;
    border: 1px solid black;
    border-radius: 25px;
`

export const Pan = styled.div`
    position: absolute;
    bottom: 50px;
    left: 20px;
    font-size: 20px;
`

export const PanItem = styled.span`
    margin-right: 10px;
`

export const Cvv = styled.span`
    position: absolute;
    bottom: 20px;
    left: 40px;
    font-size: 16px;
`

export const Ex = styled.span`
    position: absolute;
    bottom: 20px;
    right:40px;
    font-size: 16px;
`

export const Chip = styled.span`
    position: absolute;
    border-radius: 10px;
    bottom: 90px;
    left: 40px;
    width: 40px;
    height: 30px;
    background-color: gold;
`

export const ChipLeft = styled.span`
    border-left: 1px solid black;
    position: relative;
    left: 20px;
    border: 1px solid black;
`