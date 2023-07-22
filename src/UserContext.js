import React, { createContext, useState, useEffect } from 'react';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [users,setUsers] = useState(()=> {
        try {
            const storedUsers = localStorage.getItem('users');
            return storedUsers ? JSON.parse(storedUsers) : [];
          } catch (error) {
            console.error('Error parsing users data from local storage:', error);
            return [];
          }
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser,setUser] = useState(null);
    
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
      }, [users]);
    const registerUser = (username,password) => {
        if(users[username])
        {
            alert("Username already exists!.");
            console.log(users);
            return false;
        }
        setUsers((prevUsers)=>({
            ...prevUsers,
            [username]: {
                password,
                favorites: []    
            },
        }));
        console.log(users);
        alert("Registration Successful!");
        return true;
    };
    const loginUser = (username) => {
            setIsLoggedIn(true);
            setUser(username);
            return true;
    };
    const logoutUser = ()=> {
        setIsLoggedIn(false);
        setUser(null);
        alert('Signed Out');
    }
    const setFavorites = (username, movie) => {
      setUsers((prevUsers) => {
        const user = prevUsers[username] || {}; // Check if the user exists in prevUsers, or initialize an empty object
        const favorites = user.favorites || []; // Retrieve the favorites array for the user, or initialize an empty array
        const updatedUser = {
          ...user,
          favorites: [...favorites, movie], // Append the movieId to the favorites array
        };
        const updatedUsers = {
          ...prevUsers,
          [username]: updatedUser, // Update the user in the users object
        };
        localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update localStorage with the modified favorites
        return updatedUsers;
      });
      };
    const deleteFav = (movieId) => {
        if (users[loggedUser]) { 
          setUsers((prevUsers) => {
            const user = prevUsers[loggedUser] || {}; // Check if the user exists in prevUsers, or initialize an empty object
            const favorites = users[loggedUser].favorites.filter((movie) => movie.id !== movieId) || []; // Retrieve the favorites array for the user, or initialize an empty array
            const updatedUser = {
              ...user,
              favorites: favorites, // Append the movieId to the favorites array
            };
            const updatedUsers = {
              ...prevUsers,
              [loggedUser]: updatedUser, // Update the user in the users object
            };
            localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update localStorage with the modified favorites
            return updatedUsers;
          });
        }
      };
    const value={users,isLoggedIn,loggedUser,registerUser,loginUser,logoutUser,setFavorites,deleteFav};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );

};
export default UserContext;