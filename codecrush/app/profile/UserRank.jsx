import { useState, useEffect } from "react";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import Request from "../helpers/Request";

export const UserRank = () => {
const { user } = UserAuth();
const [users, setUsers] = useState([]);
const [rank, setRank] = useState(0);

useEffect(() => {
const request = new Request();
request
    .get("http://localhost:8082/api/users")
    .then((data) => {
    setUsers(data);
    })
    .then(() => {
    console.log("Hi!")
    currentRank();
    });
}, [user]);

const orderedUsers = users.sort(
(a, b) => b.score - a.score
);

const currentRank = () => {
console.log(user);
if (user) {
    console.log(orderedUsers);
    const foundUser = orderedUsers.find((currentUser) => {
    return currentUser.uid === user[0].uid;
    });
    // console.log(orderedUsers.indexOf(foundUser))
    const position = orderedUsers.indexOf(foundUser) + 1 ;
    setRank(position);
    return rank;
}
};

return <p><b>{rank}</b></p>
};
