import React, {useState} from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (

        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={'Buscar Gif'}
                value={inputValue || ''}
                onChange={handleInputChange}/>
        </form>


    );
};