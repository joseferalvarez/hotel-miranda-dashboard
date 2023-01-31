import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import styled from 'styled-components';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

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

const PhotoSlider = ({ photos, text }) => {
    const slider = useRef(null);

    const handlePrev = useCallback(() => {
        if (!slider.current) return;
        slider.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!slider.current) return;
        slider.current.swiper.slideNext();
    }, []);

    return (
        <Slide>
            <Swiper ref={slider}
                modules={[Navigation, EffectFade]}
                effect='fade'
                slidesPerView={1}
            >
                {photos.map((photo) => (
                    <SwiperSlide>
                        <Image>
                            <img src={photo} alt=''></img>
                            <div></div>
                        </Image>
                    </SwiperSlide>
                ))}

            </Swiper>
            <ButtonLeft onClick={handlePrev}><HiArrowLeft /></ButtonLeft>
            <ButtonRight onClick={handleNext}><HiArrowRight /></ButtonRight>
            {text ?
                <Text>
                    <p>{text.type}</p>
                    <p>{text.description}</p>
                </Text> :
                <></>}
        </Slide>
    );
}

export default PhotoSlider;
