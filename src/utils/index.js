export const signUp = async (username, email, password, setUser) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        setUser(data.user); /* gets the username which was saved into DB 
                            from the regUser function in the backend REST API code */
        localStorage.setItem("userToken", data.token);
    } catch (error){
        console.log(error);
    }
};

export const login = async (username, password, setUser) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        setUser(data.user); /* gets the username which was saved into DB 
                            from the regUser function in the backend REST API code */
        localStorage.setItem("userToken", data.token);
    } catch (error) {
        
    }
};

export const tokenCheck = async (setUser) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
            
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        setUser(data.user); /* gets the username which was saved into DB 
                            from the regUser function in the backend REST API code */
        localStorage.setItem("userToken", data.token);
    } catch (error) {
        
    }
};