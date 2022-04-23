import { useState, useEffect } from "react";
import { UsernameForm } from "./components/usernameForm";
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
        fetchPics(setPics);
    }, []);

    const adduser = async (username, email, password) => {
        try {
            const res = await fetch("http://localhost/user")
        } catch (error) {
            
        }
    }

    return (
        <div className="App">
            {/* && is a logical operator. It checks if something is true and does something. */}
            {/* If false, it does nothing */}
            {user && <h1>{user}</h1>}
            <UsernameForm setUser={setUser}/>
            {user && pics.map((pic, i) => {
                return <PicFeed key={i} pic={pic} />;
            })}
        </div>
    );
};

export default App;
