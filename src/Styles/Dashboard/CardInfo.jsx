import styled, { css } from 'styled-components';

const Card = styled.div`
    width: 20%;
    height: 100px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    font-family: var(--font-poppins);

    p:first-child{
        font-size: 30px;
        font-weight: 600;
        margin: 0;
    }

    p:last-child{
        font-size: 14px;
        color: #787878;
        margin: 0;
    }
`;

const Icon = styled.div`
${(props) => {
        if (props.typebooking === "Checkin" || props.typebooking === "Checkout" || props.typebooking === "NewBookings") {
            return css`
                background-color: #FFEDEC;
                color: #E23428;
            `;
        } else if (props.typebooking === "Available") {
            return css`
                background-color: #E23428;
                color: #FFEDEC;
            `;
        }
    }}

    width: 50px;
    height: 50px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin: 0 30px;
`;

export {
    Card,
    Icon
};
