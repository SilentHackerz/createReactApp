var React = require('react');



const ProfileList = ({number, onProfileSelect}) => {
    const Profiles = number.map(() => {
        return(
            <ProfileListItem
                number={props.number}
                onProfileSelect={onProfileSelect}/>
        )
    });
    return (
        <ul>
            {Profiles}
        </ul>
    );
};

const ProfileListItem = ({number, onProfileSelect}) => {
    return (
        <li onClick={() => onProfileSelect(number)}>
            <p>Profile {number}</p>
        </li>
    )
};


const Profile = ({profile}) => {
    if(!profile){
        return <div>Loading...</div>
    }
    return(
        <ul>
            <p>This is Profile {profile.number}</p>
        </ul>
    )

};


export default Profile;
export default ProfileList;