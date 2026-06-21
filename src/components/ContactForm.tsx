import { useEffect, useRef, useState } from "react";

function ContactForm () {
    const nameInput = useRef<HTMLInputElement>(null);
    const prevEmail = useRef<string>('');
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

    const handleClear = () => {
        setName('');
        setEmail('');
        nameInput.current?.focus();
    }

    useEffect(function setEmailValue() {
        console.log('Previous email was:', prevEmail?.current);
        console.log('Current email is:', email);
        
        prevEmail.current = email; 
    }, [email])

    return (
        <div>
            <form 
                style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
                onSubmit={handleShow}
            >
                <input ref={nameInput} type="text" name="name" onChange={changeName} />
                <input type="email" name="email" onChange={changeEmail} />
                <button 
                    type="submit"
                    className="counter"
                >
                    Get Values
                </button>
                <button 
                    type="button"
                    className="counter"
                    onClick={handleClear}
                >
                    Clear Values
                </button>
            </form>
        </div>
    )
}

export default ContactForm;