import React, { useState } from 'react';

interface Props {
    text : string
}

interface UserData {
    id: number;
    name: string;
}

const TestCompornet:React.FC<Props> = (props) => {
    const [count, setCount] = useState<number>(1);
    const [user, setUser] = useState<UserData>({id:1, name:"Jiro"})
    const [inputData, setInputData] = useState("");

    const handlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    }

    return (
        <div>
            <h1>{ props.text }</h1>
            <h2>{ count }</h2>

            <input type="text" value={ inputData } onChange={handlInput} />
            <p>{ inputData }</p>
        </div>
    )
}
        
export default TestCompornet;
