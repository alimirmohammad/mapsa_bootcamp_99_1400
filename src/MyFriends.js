import React from 'react';

const MyFriends = ({ name }) => {
  if (name === 'Akbar') {
    throw new Error('He is not my friend');
  }
  return <p>{name} is my friend.</p>;
};

export default MyFriends;
