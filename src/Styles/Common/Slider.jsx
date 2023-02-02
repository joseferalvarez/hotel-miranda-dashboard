import styled from "styled-components";

const Slide = styled.div`
    position: relative;
    height: 100%;

    div{
        height: 100%;
        border-radius: 0 20px 20px 0;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 2;
        background-color: #77777750;
        border: 1px solid white;
        font-size: 30px;
        color: white;
        border-radius: 8px;
        width: 50px;
        height: 50px;
    }

    img{
        height: 100%;
        object-fit: cover;
    }
`;

const ButtonLeft = styled.button`
    bottom: 200px;
    left: 50px;
`;

const ButtonRight = styled.button`
    bottom: 200px;
    right: 50px;
`;

const Image = styled.div`
    position: relative;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(51,51,51,0) 0%, rgba(51,51,51,0.7987570028011204) 60%, rgba(51,51,51,1) 90%);
        top: 0;
        left: 0;
    }
`;

const Text = styled.div`
    position: absolute;
    width: 90%;
    max-height: 150px;
    overflow: hidden;
    z-index: 2;
    bottom: 30px;
    left: 0;
    color: white;
    font-family: var(--font-poppins);
    padding: 0 5%;

    p:first-child{
        font-size: 25px;
        margin: 0;
    }
`;

export {
    Slide,
    ButtonLeft,
    ButtonRight,
    Image,
    Text
}
