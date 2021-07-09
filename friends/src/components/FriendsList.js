import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {
    //condense this into one state statement
    const [friends, setFriends] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [email, setEmail] = useState('');

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err.response))
    }, [])

    const newFriend = {
        id: Date.now(),
        name: name,
        age: age,
        email: email
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const addFriend = () => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => console.log(res))
        .catch(err => console.log('post error', err.response))
    }

    return (
        <>
        <div>
        {friends.map(item => (
            <Friend key={item.id} name={item.name} age={item.age} email={item.email}/>
        ))}
        </div>
        <div>
            <form onSubmit={addFriend}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
                <input type="number" value={age} onChange={handleAgeChange} placeholder="Age" />
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                <button type="submit">Add Friend</button>
            </form>
        </div>
        </>
    )
}

export default FriendsList;