import styled from 'styled-components';

const TopbarContainer = styled.div`
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;

    .data{
        display: flex;
        align-items: center;
        width: 20%;
        gap: 50px;

        .title{
            padding-left: 100px;
            font-family: var(--font-poppins);
            font-size: 28px;
            font-weight: 700;
            color: #262626;
        }
    }

    .icons{
        display: flex;
        width: 70%;
        padding-right: 10%;
        justify-content: flex-end;
        align-items: center;
        gap: 60px;
    }
`;

const Icon = styled.div`
    position: relative;

    .icon{
        color: #135846;
        width: 25px;
        height: 25px;
    }

    .notification{
        position: absolute;
        display: block;
        right: -14px;
        top: -14px;
        width: 25px;
        height: 25px;
        background-color: #E23428;
        border-radius: 8px;
        border: 2px solid white;

        p{
            text-align: center;
            margin:  2px auto;
            font-family: var(--font-poppins);
            font-weight: 600;
            color: white;
            font-size: 14px;
        }
    }
`;

export {
    TopbarContainer,
    Icon
}
