const OddEvenResult = ({count}) => {
    // props 변경시 리렌더
    // 부모 요소의 state 변경 시 자식 요소도 리렌더
    console.log(count);
    return <>{count % 2 === 0 ? "짝수": "홀수"}</>
}

export default OddEvenResult;