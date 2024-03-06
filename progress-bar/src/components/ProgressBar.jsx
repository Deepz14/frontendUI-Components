import { useRef } from "react";
import { useState, useEffect } from "react";


const ProgressBar = () => {
    const [progressVal, setProgressVal] = useState(0);
    const textSizeAuto = useRef(null);

    useEffect(() => {
        let _value = 0;
        let timer = setInterval(() => {
            _value += Math.floor(Math.random() * 100) + 1; // int b/w 1 to 100
            if(_value >= 100) {
                _value = 100;
                setProgressVal(_value);
                clearInterval(timer);
            }
            // console.log('Randm val: ', _value);
            setProgressVal(_value);
        }, [2000]);

        return () => {
            _value = 0;
            clearInterval(timer);
        }

    }, [])

    return (
       
            <div className="progress-bar">
                <div style={{
                    width: `${progressVal}%`
                }} className="progress">{progressVal}%</div>
            </div>
    )
}


export default ProgressBar;