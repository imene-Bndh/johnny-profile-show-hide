import React from 'react';

const Profile = ({ fullName, bio, profession, children }) => {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    {children}
                </div>
                <div className="col-8">
                    <h1>{fullName}</h1>
                    <h2>{profession}</h2>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;