import { useState } from 'react';
import { useEffect } from 'react';
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App = () => {
    // console.log('렌더링');
    const [num, setNum] = useState(0);

    // useEffect(() => {
    //    alert();
    // }, [num]);

    useEffect(() => {
        alert();
    }, []);

    const onClickButton = () => {
        // setNum(num + 1);
        // setNum(num + 1);
        // setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };

    return (
        <>
            <h1 style={{ color: 'red' }}>안녕하세요!</h1>
            <ColoredMessage color='blue'>잘 지내시죠?</ColoredMessage>
            <ColoredMessage color='pink'>잘 지냅니다!</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
            <CssModules></CssModules>
        </>
    );
};