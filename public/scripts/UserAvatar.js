import React from 'react';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

const UserAvatar = () => (
    <div>
        <Avatar
            src="assets/random_guy.png"
            size={100}
            style={style}
        />
        <span>MA - 121</span>
    </div>
);

export default UserAvatar;