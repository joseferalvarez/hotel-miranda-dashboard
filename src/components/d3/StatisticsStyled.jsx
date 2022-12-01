import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1300px) {
        flex-direction: column;
    }

    p{
        color: #393939;
        font-family: var(--font-poppins);
        font-weight: 500;
        font-size: 20px;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    gap: 50px;

    @media (max-width: 1300px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Stat = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    p{
        font-family: var(--font-poppins);
        font-size: 14px;
        &:nth-child(3){
            font-size: 16px;
            font-weight: 600;
        }
    }
`;

const Square = styled.div`
    width: 13px;
    height: 13px;
    background-color: ${(props) => props.color};
`;

export {
    FilterContainer,
    StatsContainer,
    Stat,
    Square
}
