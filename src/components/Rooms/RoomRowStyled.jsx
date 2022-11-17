import styled from 'styled-components';

const Row = styled.tr`
    opacity: ${props => props.opacity || 1};
    border-top: 1px solid #D4D4D4;

    .room__data__id,
    .data__price span
    {
        color: #799283;
    }

    .room__data__number,
    .data__text{
        color: #393939;
    }
`;

const RoomNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    padding-left: 30px;

    .room{
        &__img{
            border-radius: 8px;
            width: 150px;
            height: 77px;
            object-fit: cover;
        }

        &__data{
            text-align: center;

            &__id{
                font-size: 14px;
                font-family: var(--font-poppins);
            }

            &__number{
                font-family: var(--font-poppins);
                font-weight: 500;
            }
        }
    }
`;

const DataContainer = styled.td`
    vertical-align: bottom;

    &~.data-container__button{
        vertical-align: top;
        padding-right: 30px;
    }

    .data{
        &__text,
        &__price{
            font-family: var(--font-poppins);
            padding-left: 30px;
            max-width: 300px;
        }

        &__text{
            font-weight: 500;
        }

        &__price{
            font-weight: 600;
            color: #212121;
            span{
                font-size: 14px;
            }
        }
    }

    button{
        background-color: transparent;
        border: none;
        margin-left: 60px;
        margin-top: 15px;

        .icon{
            width: 25px;
            height: 25px;
        }
    }
`;


const RoomStatus = styled.p`
    background-color: ${props => props.status || "blue"};
    color: white;
    padding: 13px 25px;
    border-radius: 12px;
    text-align: center;
    margin-left: 30px;
`;

export {
    Row,
    RoomNameContainer,
    DataContainer,
    RoomStatus
}
