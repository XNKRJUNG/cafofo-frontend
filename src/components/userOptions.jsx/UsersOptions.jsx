import React from 'react';
import UserOptions from '../userOptions/userOptions';

const UsersOptions = (props) => {

const {users} = props;

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