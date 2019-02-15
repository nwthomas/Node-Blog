import React from "react";
import PropTypes from "prop-types";
import { UserCard } from "../UserCard";

const UserListContainer = props => {
  return (
    <div>
      {props.users.map(user => {
        return <UserCard user={user} key={user.id} />;
      })}
    </div>
  );
};

UserListContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  )
};

export default UserListContainer;
