import React, { Component } from 'react';

class InputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let materialIconName = this.props.iconMaterial;
        let iconClassName = "prefix material-icons";
        
        if (this.props.icon.length > 0) {
            materialIconName = '';
            iconClassName = "prefix " + this.props.icon;
        } 

        return (
            <div className="input-field row">
                <i className={iconClassName}>{materialIconName}</i>
                <input id={this.props.name} name={this.props.name} type="text" className="validate" onChange={this.props.onChange}/>
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        );
    }
}

InputText.defaultProps = {
    name : 'input',
    label: 'Label',
    icon : '',
    iconMaterial : 'mode_edit',
    onChange : null
};

// MainComponent.propTypes = {
//     color: React.PropTypes.string.isRequired
// };
export default InputText;