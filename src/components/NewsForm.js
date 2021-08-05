import React from 'react';

class NewsForm extends React.Component {

    addButton = () => {
        this.props.addNews();
    };
    render(){
        return(
            <div>
                <button onClick={this.addButton}>Add</button>
            </div>
        )
    }
}

export default NewsForm;