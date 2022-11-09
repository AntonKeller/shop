import React, {useEffect, useState} from 'react';
import {Avatar, Divider, Typography} from "@material-ui/core";

const Friends = () => {

    const [listFriends, setListFriends] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => response.json())
            .then(response => setListFriends(response))
    }, [])

    return (
        <>
            {
                listFriends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <div style={{padding: "15px 10px"}}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "left",
                                    alignItems: "center"
                                }}>
                                    <Avatar style={{marginRight: "10px"}}>А</Avatar>
                                    <Typography>{friend.name}</Typography>
                                </div>
                            </div>
                            <Divider/>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Friends;