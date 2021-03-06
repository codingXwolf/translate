import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //this is how to hook up context object to a class component.
    //needs to be called contextType. Cant change the name
    // static contextType = LanguageContext;
    
    renderSubmit (language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                {/* another way of getting info from context objects */}
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render () {
        return (
            <ColorContext.Consumer >
            {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;