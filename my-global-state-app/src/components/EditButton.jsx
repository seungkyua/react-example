import { useContext} from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
};

export const EditButton = props => {
    // const { isAdmin } = props;

    // const contextValue = useContext(AdminFlagContext);
    // console.log(contextValue);

    const { isAdmin } = useContext(AdminFlagContext);

    return (
        <button style={style} disabled={!isAdmin}>수정</button>
    );
};