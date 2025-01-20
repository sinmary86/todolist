import { Component } from 'react';
import imageTodo from './needToDo.png';
import imageDone from './alreadyDone.png';

export class DoneItem extends Component {
    state = {
        textGrade: "*Сlick here if you like our app",
        imgGrade: imageLike,
    }
    
    likeClicked = () => {
        this.setState({
            textGrade: "*Thank you for your feedback!",
            imgGrade: imageThanks,
        })
    }
    render() {
        return <div className="container">
            <p>{this.state.textGrade}</p>
            <img className="btnLike" src={this.state.imgGrade} alt="heart" width="20px"  height="20px" onClick={this.likeClicked} />
        </div>
    }

   
}
