import React, {useState,useContext,createContext} from "react";

const UserContext = createContext([
    {
            firstName : "Bob",
            lastName: "Bourbon",
            suffix: 1,
            email: "bobbour@gmail.com"
    },
    obj => obj
]);
const LevelFive = () => {
    const[user,setUser] = useContext(UserContext);
    return(
        <div>
            <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
            <button onClick={()=>{
                setUser(Object.assign({}, user, {suffix : user.suffix+1}))
            }}> Increment </button>
        </div>
    );
}
const LevelFour = () =>{
        return(
        <div> 
        <h4> Level four</h4>
        <LevelFive></LevelFive>
        </div>
    )
    
}
const LevelThree = () =>{
    return(
        <div> 
            <h4> Level three</h4>
            <LevelFour></LevelFour>
        </div>
    )
    
}
const LevelTwo = () =>{
    return(
    <div> 
        <h4> Level two</h4>
        <LevelThree></LevelThree>
    </div>
    )   
}

const ContextComponent = () =>{
    const userState = useState({
        firstName: "johny",
        lastName:"johny",
        suffix: 1,
        email: "johny@gmail.com"
    });
    return (
        <UserContext.Provider value = {userState}>
            <h1>I'm useContext example</h1>
            <h1>First Level</h1>
            <LevelTwo></LevelTwo>
        </UserContext.Provider>
    )
}
export default ContextComponent;