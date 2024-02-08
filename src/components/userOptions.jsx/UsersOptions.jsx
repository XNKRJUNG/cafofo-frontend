import React from 'react';
import UserOptions from '../userOptions/userOptions';

const UsersOptions = (props) => {

const {users,fetchData} = props;

const usersItems = users.map((user, index) => {
    return (
        <UserOptions
            key={index}
            id = {user.id}
            firstName={user.firstname}
            lastName={user.lastname}
            email={user.email}
            role={user.role}
            active={user.active}
            fetchData={fetchData}
        />
    )
});
    return (
        <div className='usersDiv' style={{ display: 'flex' }}>
            {usersItems}
        </div>
    )
}

export default UsersOptions;