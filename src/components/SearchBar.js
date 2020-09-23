import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //1st way to handle this binding problem in function callbacks
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  // //2nd way
  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // };

  render() {
    return (
      <div className="ui segment">
        <form
          // onSubmit={(event) => this.onFormSubmit(event)}
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.value}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
