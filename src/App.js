import { useState, useEffect } from "react";
import { UsernameForm } from "./components/usernameForm";
import { tokenCheck } from "./utils";
import "./App.css";
import { PicFeed } from "./components/picFeed";

const App = () => {
    const [user, setUser] = useState();
    // const [userName, setUsername] = useState();

    const [pics, setPics] = useState([]);

    const fetchPics = async (setPics) => {
        try {
            const res = await fetch("https://picsum.photos/v2/list");
            const data = await res.json();
            setPics(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // this line checks if local storage has a key value of the userToken
        // then run the tokenCheck function, if not, it does nothing.
        if (localStorage.key("userToken")) {
            tokenCheck(setUser)
        };
        fetchPics(setPics);
    }, []);


    return (
        <div className="App">
            {/* && is a logical operator. It checks if something is true and does something. */}
            {/* If false, it does nothing */}
            {user && <h1>{user}</h1>}
            <UsernameForm setUser={setUser} />
            {pics.map((pic, i) => {
                    return <PicFeed key={i} pic={pic} />;
                })}
        </div>
    );
};

export default App;
