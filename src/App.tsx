import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState<string | null>(null)

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onButtonClickHandler = () => {
        if (value.length === 10) {
            setError(null)
            setNumber(value)
            setValue('')
        } else {
            setError("Title is required");
            setValue('')
        }

    }
    const result = () => {
        if (number) {
            let res = ''
            if (number === '9139730337' || number === '9836219041') {
                res = "Оператор MTC, регион Омская область"

            } else if (number === '9124324995') {
                res = "Оператор MTC, регион Край Географии"
            } else {
                res = `Номер ${number} введен в неправильном формате или отсутствует в базе`
            }
            return res
        }
    }

    const onFocusChanged = () => {
        setError(null)
        setNumber('')
    }


    return (
        <div className="App-header">
            <div className="Size">
                <input type="tel"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       placeholder="Введите номер телефона без '8'"
                       onChange={changeValue}
                       value={value}
                       className="InputSize"
                       onFocus={onFocusChanged}/>
                <button className="ButtonSize"
                        onClick={onButtonClickHandler}>Отправить запрос
                </button>
            </div>
            <div className="ForError">
                {error && <div>Ошибка! Номер должен содержать 10 цифр.</div>}
            </div>
            <div className="ForResult">
                {result()}
            </div>
        </div>
    );
}

export default App;
