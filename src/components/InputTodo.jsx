import React, { Component } from "react"
import { FaPlusCircle } from "react-icons/fa"

class InputTodo extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: ""
          };
    }

    onChange = e => {
        this.setState({  [e.target.name]: e.target.value, });
      };

      handleSubmit = e => {
        e.preventDefault()
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({  title: "" })
        } else {
            alert("Please write item")
        }
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.onChange} />
        <button className="input-submit">
          <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
          </button>
      </form>
    )
  }
}
export default InputTodo