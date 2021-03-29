import React from 'react';


class UserInfo extends React.Component {
   render(){
        const {userName, userGender, userAge, yearsWorked} = this.props;
        return (
            <div>
                <div>
                    <div>userName: {userName}</div>
                    <div>userGender: {userGender}</div>
                    <div>userAge: {userAge}</div>  
                    <div>yearsWorked: {yearsWorked}</div>           
                </div>
            </div>
       )
   }
}
export default UserInfo;
