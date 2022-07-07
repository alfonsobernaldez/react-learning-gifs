import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Simpsons']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return; //si la key del array ya exista, no añadira de nuevo el valor


        setCategories([newCategory, ...categories]);
    }




    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories= {setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />))
            }

        </>
    )
}