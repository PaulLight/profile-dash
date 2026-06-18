import { useState } from "react";

function ContactForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleShow = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email);
        console.log(name);
    }

    return (
        <div>
            <form 
                style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
                onSubmit={handleShow}
            >
                <input type="email" name="email" onChange={changeEmail} />
                <input type="text" name="name" onChange={changeName} />
                <button 
                    type="submit"
                    className="counter"
                >
                    Get Values
                </button>
            </form>
        </div>
    )
}

export default ContactForm;