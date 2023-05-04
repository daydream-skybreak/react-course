import React from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";

    const DishDetail = (props) => {
        if (props.dish) {
            return (
                <div className='row'>
                    <RenderDish dish={props.dish}/>
                    <RenderComment comments={props.dish.comments}/>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const RenderDish = ({dish}) => {
        return (
            <div className='col-12 col-md-5 ml-5 m-1'>
                <Card>
                    <CardImg src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            </div>
        )
    }

    const RenderComment = ({comments}) => {
        if (comments === null) return (<div></div>)
        else {
            let commentList = comments?.map(comment => {
                return (
                    <div key={comment.id} className='col-12 col-md-5 m-1'>
                        <li>{comment.comment}</li>
                        <li className='mt-3'>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </div>
                )
            })
            return (
                <div className='m-1 col-md-5 col-12'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentList}
                    </ul>
                </div>
            )
        }
    }


export default DishDetail
