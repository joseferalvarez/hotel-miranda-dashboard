import React from 'react';
import GuestsTable from '../../components/Bookings/GuestsTable';
import data from "../../db/guest.json";
import { BookingsContainer } from './BookingsStyled';
import { FilterTable, FilterButton, TableTools, TableButtons } from '../../components/Blocks/Blocks';
import Select from '../../components/Blocks/Select';



const Bookings = () => {
    return (
        <BookingsContainer>
            <div className='content'>
                <TableTools>
                    <FilterTable>
                        <FilterButton>All Guest</FilterButton>
                        <FilterButton>Pending</FilterButton>
                        <FilterButton>Booked</FilterButton>
                        <FilterButton>Canceled</FilterButton>
                        <FilterButton>Refund</FilterButton>
                    </FilterTable>
                    <TableButtons>
                        <Select type="green" options={["1 November 2020 - 30 November 2020"]}></Select>
                        <Select type="white" options={["Newest"]}></Select>
                    </TableButtons>
                </TableTools>
                <GuestsTable data={data}></GuestsTable>
            </div>
        </BookingsContainer>
    );
}

export default Bookings;
