import { startTransition, useActionState, useOptimistic, type SubmitEvent } from "react";
import { UserIcon } from "../icons";
import type { State, Comment, ActionPayload } from "../types";

const INITIAL_STATE: State = {
    comments: [
        { id: "1", postId: "0001", text: "I will do it!", author: "vlas_vozmitel", createdAt: "2026-06-29T07:19:00.000Z" },
        { id: "2", postId: "0002", text: "I doing it!!!", author: "vlas_vozmitel", createdAt: "2026-06-29T07:19:00.000Z" },
        { id: "3", postId: "0003", text: "I've done it!!!", author: "vlas_vozmitel", createdAt: "2026-06-29T07:19:00.000Z" },
    ],
    status: null,
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const reducerAction = async (prevState: State, payload: ActionPayload): Promise<State> => {
    await delay(2000);
    switch (payload.type) {
        case 'ADD':
            return {
                comments: [...prevState.comments, payload.comment],
                status: "ok"
            };
        case 'GET':
            return {
                ...INITIAL_STATE,
                status: "ok"
            };
        default:
            return INITIAL_STATE;
    }
};


export const CommnetsSection = () => {
    const [state, dispatch, isPending] = useActionState(reducerAction, INITIAL_STATE);
    const [optimisticComments, setOptimistic] = useOptimistic<Comment[], Comment>(
        state.comments,
        (state, payload) => [...state, payload]
    );

    const onAddingComment = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const text = formData.get('newCommentText') as string;

        if (!text.trim())
            return;

        const comment: Comment = {
            id: String(Date.now()),
            postId: "9",
            text,
            createdAt: new Date().toISOString(),
            author: "vasya pupkin",
        };
        startTransition(() => {
            setOptimistic(comment);
            form.reset();
            dispatch({ type: 'ADD', comment });
        });
    };

    return (
        <div className="flex flex-col gap-6 min-w-3xl">
            <h1 className="text-3xl">Комментарии</h1>
            <form className="flex flex-col gap-1" onSubmit={onAddingComment}>
                <textarea
                    placeholder="Комментировать..."
                    name="newCommentText"
                    className="border rounded-2xl p-2"
                    disabled={isPending}
                >
                </textarea>
                <button
                    type="submit"
                    disabled={isPending}
                    className="ml-auto border rounded-xl w-32 "
                >
                    {isPending ? 'Отправка...' : 'Отправить'}
                </button>
            </form>

            <div className="flex flex-col gap-2">
                {optimisticComments.map(comment => (
                    <div key={comment.id} className="flex flex-col gap-2 border p-2  rounded-2xl">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex">
                                <UserIcon />
                                <p>{comment.author}</p>
                            </div>
                            <span className="text-xs flex">{new Date(comment.createdAt).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div>{comment.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};  