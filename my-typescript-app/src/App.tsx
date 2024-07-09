import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import { User } from "./types/user";

export const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>("http://localhost:8080/users")
            .then((res) => {
                return setUsers(res.data);
            });
    }, []);

    return (
        <div>
            {users.map(user => (
                <ListItem id={user.id}
                          name={user.name}
                          age={user.age}
                          personalColor={user.personalColor}
                          hobbies={user.hobbies} />
            ))}
        </div>
    );
};