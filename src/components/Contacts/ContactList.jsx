import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ContactCard from './ContactCard';

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
