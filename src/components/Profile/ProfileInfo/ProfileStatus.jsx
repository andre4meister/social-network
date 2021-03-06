import React from "react";


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
    
  }
  deactivateEditMode() {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  };

  onStatusChange =(e) =>{
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
          </div>
        )}
        {this.state.editMode && (<div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
