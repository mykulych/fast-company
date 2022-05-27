import React from "react";
import PropTypes from "prop-types";
import getDate from "../../../utils/getDate";

const Comment = ({ comment, onRemove, users }) => {
    const getUserNameById = (id) => {
        const user = users.find((x) => x.value === id);
        return user?.label + " ";
    };

    return (
        <div className="row">
            <div className="col">
                <div className="d-flex flex-start">
                    <img
                        src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                        className="
                                                    rounded-circle
                                                    shadow-1-strong
                                                    me-3
                                                "
                        alt="avatar"
                        width="65"
                        height="65"
                    />
                    <div
                        className="
                                                    flex-grow-1 flex-shrink-1
                                                "
                    >
                        <div className="mb-4">
                            <div
                                className="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                        "
                            >
                                <p className="mb-1">
                                    {getUserNameById(comment.userId)}
                                    <span className="small">
                                        {getDate(comment.created_at)}
                                    </span>
                                </p>
                                <button
                                    className="
                                                                btn btn-sm
                                                                text-primary
                                                                d-flex
                                                                align-items-center
                                                            "
                                    onClick={() => onRemove(comment._id)}
                                >
                                    <i
                                        className="
                                                                    bi bi-x-lg
                                                                "
                                    />
                                </button>
                            </div>
                            <p className="small mb-0">{comment.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default Comment;
