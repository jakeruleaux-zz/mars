import React from "react";
import { fetchPhotoId } from "./../actions";
import { connect } from "react-redux";

class PhotoSearch extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { _date } = this.refs;
    if (!_date.value.trim()) {
      return;
    }
    this.props.dispatch(fetchPhotoId(_date.value.trim()));
    console.log(_date.value);
    // _date.value = "";
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Photo Date" ref="_date"></input>
          <button>search</button>
        </form>
      </div>
    )
  }
}

export default connect()(PhotoSearch);
