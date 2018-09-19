import React from "react";

export default class CommentBox extends React.Component {
    state = {
        comment: ""
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ comment: "" });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <textarea
                            value={this.state.comment}
                            onChange={event => this.setState({ comment: event.target.value })}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
