import React from 'react';
import UserForm from '../../components/Users/UserForm';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

const NewUser = () => {
    return (
        <FormContainer>
            <UserForm></UserForm>
        </FormContainer>
    );
}

export default NewUser;
