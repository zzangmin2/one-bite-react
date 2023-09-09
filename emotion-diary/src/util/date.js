export const getStringDate = (date) => {
  // new Date를 String화 시키는 함수
  //toISOString() -> 형식의 문자열을 반환하는 메서드
  return date.toISOString().slice(0, 10);
};
