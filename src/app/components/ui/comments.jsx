import React, { useEffect, useState } from "react";
import api from "../../api";
import CommentsList, { AddCommentForm } from "../common/comments";
import { useParams } from "react-router-dom";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            const usersList = data.map((item) => ({
                value: item._id,
                label: item.name
            }));
            setUsers(usersList);
        });
        getComments();
    }, []);

    const getComments = () => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) =>
                data.sort((a, b) => {
                    const dateNow = Date.now();
                    return dateNow - a.created_at - (dateNow - b.created_at);
                })
            )
            .then((sortData) => setComments(sortData));
    };

    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then(getComments)
            .catch((e) => console.log(e));
    };

    const handleRemove = (id) => {
        api.comments
            .remove(id)
            .then(getComments)
            .catch((e) => console.log(e));
    };

    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <AddCommentForm users={users} onSubmit={handleSubmit} />
                </div>
            </div>
            {comments.length ? (
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={comments}
                            users={users}
                            onRemove={handleRemove}
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Comments;
