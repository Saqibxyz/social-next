import React from 'react'
import FriendRequest from './FriendRequest'
import BirthDay from './BirthDay'
import Ad from './Ad'

const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className=' flex flex-col gap-6'>
            <FriendRequest />
            <BirthDay />
            <Ad size='md'/>

        </div>
    )
}

export default RightMenu