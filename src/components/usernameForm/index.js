import { useState } from "react";
import { signUp, login } from "../../utils"
// fires the event change (e) when enter is pressed (onSubmit)
// otherwise it would change after each letter is typed
export const UsernameForm = ({ setUser }) => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [hideEmail, setHideEmail] = useState();

const submitHandler = (e) => {
    e.preventDefault();
    if (!hideEmail) {
        signUp(username, email, password, setUser);
    } else {
        login (username, password, setUser);

    }
    
     
    // setUsername(user);
};

    return (
        <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            {!hideEmail && <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
        <button onClick ={() => setHideEmail(!hideEmail)}>Sign up with Email / Login</button>
        </div>
    );
};
