/**React */
import React, { useCallback, useRef } from 'react';
/**Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
/**Styles */
import {
    Slide,
    ButtonLeft,
    ButtonRight,
    Image,
    Text
} from "../../Styles/Common/Slider";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

/**Component */
const PhotoSlider = ({ photos, text }) => {
    /**States */
    const slider = useRef(null);
    /**Prev and next slide */
    const handlePrev = useCallback(() => {
        if (!slider.current) return;
        slider.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!slider.current) return;
        slider.current.swiper.slideNext();
    }, []);

    /**HTML */
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
