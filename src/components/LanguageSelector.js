import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.props.onLanguageChange('en')} />
                    <i className="flag de" onClick={() => this.props.onLanguageChange('de')} />
                </div>
            </div>
        );
    }
}

export default LanguageSelector;