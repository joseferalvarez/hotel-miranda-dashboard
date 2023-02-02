/**React */
import React from 'react';
/**Components */
import ContactCard from './ContactCard';
import { Swiper, SwiperSlide } from 'swiper/react';
/**Styles */
import 'swiper/css';

/**Component */
const ContactList = ({ contacts }) => {
    if (contacts) {
        return (
            <Swiper
                slidesPerView={3}
                observer
                observeParents
            >
                {contacts.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ContactCard contact={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    } else {
        <></>
    }
}

export default ContactList;
