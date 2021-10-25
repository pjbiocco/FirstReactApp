import React, { Component } from 'react';
import SOCIALPROFILES from './data/socialProfile';

class SocialProfile extends Component{

    render() {
        const {icon, link} = this.props.socialprofile;

        return (
            <div style = {{display: 'inline-block', width: 75, margin: 10}}>
                    <a href={link}><img src={icon} alt='RIP' style={{width:75, height: 75}}/></a>
            </div>
        )
    }

}

class SocialProfileGroup extends Component{
    render() {
        return (
            <div>
                {
                    SOCIALPROFILES.map(SOCIALPROFILE => { 
                        return (
                            <SocialProfile key = {SOCIALPROFILE.id} socialprofile={SOCIALPROFILE}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default SocialProfileGroup;