import { FC } from "react";
import { User } from "../types/user";

// export const ListItem = (props: User) => {
export const ListItem: FC<User> = props => {
    const { id, name, age, personalColor="grey", hobbies } = props;
    return (
        <p style={{ color: personalColor }}>
            {id}: {name}({age}) {hobbies?.join(" / ")}
        </p>
    );
};
