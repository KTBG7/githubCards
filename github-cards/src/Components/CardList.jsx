import React from 'react'
import Card from './Card'

function CardList(props) {
       const filteredProfiles = props.profiles.filter((oldProfile,i,a)=>a.findIndex(profile=>(profile.id === oldProfile.id))===i);

    return (
        <>
        {filteredProfiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </>
    )
}

export default CardList
