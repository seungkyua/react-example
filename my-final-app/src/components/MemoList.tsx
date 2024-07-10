import { FC } from "react";
import "./MemoList.scss";

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
    const { memos, onClickDelete} = props;

    return (
        <div className={"container"}>
            <p>메모 목록</p>
            <ul>
                {memos.map((memo, index) => (
                    <li key={memo}>
                        <div className={"memo-wrapper"}>
                            <p>{memo}</p>
                            <button className={"button"} onClick={() => onClickDelete(index)}>삭제</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}