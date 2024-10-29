import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    return (

        <form aria-label='form' onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={'Buscar Gif'}
                value={inputValue || ''}
                onChange={handleInputChange} />
        </form>

    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}