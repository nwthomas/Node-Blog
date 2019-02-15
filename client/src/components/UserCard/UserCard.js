import React from "react";
import PropTypes from "prop-types";

const UserCard = props => {
  return (
    <div>
      <h1>{props.user.name}</h1>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string
};

export default UserCard;
