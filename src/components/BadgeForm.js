import React, { Component } from "react";

export class BadgeForm extends Component {
  /*state = {};

  state = { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  */
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  /*handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state);
  };*/

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} className="row gx-3 gy2">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <div className="col 12">
            <button onClick={this.handleClick} className="btn btn-primary mt-3">
              Save
            </button>
          </div>

          {this.props.error && (
            <p className="text-danger">
              El error es: {this.props.error.message}
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
