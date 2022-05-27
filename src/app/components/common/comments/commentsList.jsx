import React from "react";
import PropTypes from "prop-types";
import { Comment } from "./index";

const CommentsList = ({ comments, onRemove, users }) => {
    return (
        <div className="bg-light card-body mb-3">
            {comments?.map((comment) => (
                <Comment
                    key={comment._id}
                    comment={comment}
                    users={users}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default CommentsList;
