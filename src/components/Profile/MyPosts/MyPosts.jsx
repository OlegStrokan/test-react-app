import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from '../../common/FormsControl/FormsControl'

const Textarea = FormControl("textarea")

let maxLength10 = maxLengthCreator(10)
let minLength2 = minLengthCreator(2)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}
                   placeholder="Enter your post message"
                   validate={[required, maxLength10, minLength2]}/>
        </div>
        <button>Add Post</button>
    </form>;
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo((props) => {
    console.log('render')
    const postsElements = props.posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>)


    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.bgColor}>
                <h3>My post</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})


export default MyPosts