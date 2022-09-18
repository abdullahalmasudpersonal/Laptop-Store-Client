import React from 'react';
import auth from '../../Firebase.init';
import profile from '../../Assets/img/logo/profile.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import './SideManu.css';

const Profile = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="col">
            <div class="card border-0 profile-dev">
                <div className='pt-4 ps-4'>
                    <h4 className='fw-bold side-header'>My Profile</h4>
                </div>
                <hr />
                <div class="card-body pt-2 pb-4 ps-4 pr-4 profile-dev-part2">
                    <div>
                        <img src={profile} alt='' />
                    </div>
                    <div className='ps-4 pt-3'>
                        <h5 class="card-title">{user?.displayName}</h5>
                        <p class="card-text">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;