import React from 'react';
import SearchUser from "../components/SearchUser";



class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            username: "",
            lodaing: false
        };
      
    }
   
    fetchUser = async username => {
        this.setState({
            lodaing: true
        });
        let response = await fetch(`https://api.github.com/users/${username}/repos`);
        response = await response.json();
        this.setState({
            repos: response,
            username,
            lodaing: false
        });
    }

    render() {
        let { username, repos, lodaing } = this.state
        console.log('repository', repos, username);

        if (lodaing) return (<div className="user-page">LOADING...</div>);

        return (
            <div>
                <SearchUser fetchUser={this.fetchUser} />
                <h1>{username}</h1>
                {
                    repos.map(item => {
                        return (
                            <div className="showUserData" key={item.id}  >
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default User