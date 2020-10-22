import React from 'react'

class ReviewShow extends React.Component{
    constructor(props){
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {
        this.props.fetchReview(this.props.match.params.reviewId)
            .then(() => {
                this.setState({ loading: false })
            });
    }

    render(){
        if (this.state.loading) {
            return <div></div>
        }
        if (!this.props.currentReview) {
            return null;
        }
        return (
            <div>
                Test
            </div>
        )
    }


}

export default ReviewShow;