import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state={ language: 'english' };

    onLanguageChange = language => {
        this.setState({
            language
        })
        console.log(this.state.language)
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </div>
                <ColorContext.Provider value="primary">
                    {/* value is a special property for provider. this is how wepass data to LanguageContext */}
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;