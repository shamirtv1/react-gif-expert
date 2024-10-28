import {useState} from "react";
import {AddCategory, GifGrid} from "./components/index.js";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategories = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    };

    return (
        <>
            <h1>GifExpertAppp</h1>

            <AddCategory onNewCategory={onAddCategories}/>

            {
                categories.map((category, index) => (
                    <GifGrid key={category} category={category}/>
                ))
            }

        </>
    );
}