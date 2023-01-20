import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ContactCard from './ContactCard';
import LoaderSpinner from '../Blocks/LoaderSpinner';
import styled from 'styled-components';

const List = styled.div`
    padding: 1% 0;
    width: 100%;
`;

const ContactList = ({ contacts }) => {
    if (contacts) {
        return (
            <List>
                <Swiper
                    slidesPerView={4}
                >
                    {contacts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ContactCard contact={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </List>
        );
    } else {
        return (
            <LoaderSpinner></LoaderSpinner>
        );
    }
}

export default ContactList;
