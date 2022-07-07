import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => { //es necesario llamar alos "PROPS" para poder comunicar entre componentes

    const [inputValue, setInputValue] = useState('');


    //para poder alterar el value del input, hay que llamar al event target y setear su value
    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    //para guardar el valor agregado en el formulario, y asi no desaparezca una vez el form se refresque.
    const onSubmit = (event) => {

        event.preventDefault();
        if (inputValue.trim().length <= 1) return;//evitamos que no se puede enviar el input vacio

        setInputValue('');//vaciamos el input despues de añadir los datos
        onNewCategory( inputValue.trim() );

      //  setCategories(categories => [...categories, inputValue]) //es necesario un callback del array del otro componente para poder alterarlo


        //NO HACEMOS PUSH AL ARRAY, usamos operador SPREAD(...) del array que queremos modificar
        //setCategories([ ...categories,'Lilo']);
        //Segunda forma. Haciendo callback al array
    }

    return (
        <form onSubmit={onSubmit}>

            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange= { onInputChange} />


        </form>
    )
}