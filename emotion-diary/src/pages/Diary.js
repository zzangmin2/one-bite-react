import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const Diary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const diaryList = useContext(DiaryStateContext);
  console.log(diaryList);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      console.log("타겟다이어리" + targetDiary);

      if (targetDiary) {
        //일기가 존재할 때
        setData(targetDiary);
      } else {
        //일기가 없을 떄
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다..</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <div>
          <MyHeader
            headText={`${getStringDate(new Date(data.date))} 기록`}
            leftChild={
              <MyButton
                text={"< 뒤로가기"}
                onClick={() => {
                  navigate(-1);
                }}
              />
            }
            rightChild={
              <MyButton
                text={"수정하기"}
                onClick={() => {
                  navigate(`/edit/${data.id}`);
                }}
              />
            }
          />
        </div>
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
