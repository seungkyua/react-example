import {ChangeEvent, useState, FC, useCallback} from "react";
import "./App.scss";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
    const { memos, addTodo, deleteTodo } = useMemoList();

    // 텍스트 박스 State
    const [text, setText] = useState<string>("");

    // 텍스트 박스 입력 시 입력 내용을 State 에 설정
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    // [추가] 버튼 클릭 시
    const onClickAdd = () => {
        addTodo(text);
        setText("");
    };

    // [삭제] 버튼 클릭 시 (몇 전째 버튼이 클릭되었는지 인수로 전달)
    const onClickDelete = useCallback((index: number) => {
        deleteTodo(index);
    }, [deleteTodo]);

    return (
        <div>
            <h1>간단 메모 애플리케이션</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <button id={"my-button"} className={"button"} onClick={onClickAdd}>추가</button>
            <MemoList memos={memos} onClickDelete={onClickDelete} />
        </div>
    );
};