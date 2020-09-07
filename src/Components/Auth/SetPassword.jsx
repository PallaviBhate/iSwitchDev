import React,{Component} from 'react'
class SetPassword extends Component {
    constructor(props) {
      super(props);
    }
    onClick = () => {
      this.props.history.push("/");
    };
    render() {
      return (
        <div>
          <h1>SetPassword Component</h1>
          <a onClick={this.onClick} style={{color:'blue'}} className="link">
            click here
          </a>{" "}
          to back
        </div>
      );
    }
  }
  
export default SetPassword