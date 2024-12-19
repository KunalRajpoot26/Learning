import {useState} from "react";

const Input = ({ adding }) => {
    const[Title, setTitle] = useState('');
    const[Description, setDescription] = useState('');

    const handleadding = () => {
    if( Title.trim() !== '' && Description.trim() !== '') {
        adding({Title,Description});
        setTitle('');
        setDescription('');

    }
    }

return (

    <>
    < input
    type='text'
    placeholder='Title'
    value={Title}
    onChange={(e) => setTitle(e.target.value)}
    />

    <input 
    type='text'
    placeholder='Description'
    value={Description}
    onChange={(e) => setDescription(e.target.value)}
    />

    <button 
    onClick={handleadding}
    >
        Add it!
    </button>
    
    </>

    );
};

export default Input