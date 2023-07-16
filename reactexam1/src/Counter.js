import React, {useState} from "react";

const Counter = () =>{

    // 0에서 출발
    // 1씩 증가하고
    // 1씩 감소하는
    //count 상태

    // 0번째 인덱스 -> 상태의 값
    // 1번째 인덱스 -> 상태변화 함수
    //useState의 인자 -> 0번째 인덱스의 초기 값

    const [count, setCount] = useState(0);

    const onIncerease = () =>{
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count -1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick ={onIncerease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;