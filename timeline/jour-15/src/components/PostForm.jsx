import { useState } from "react";
import { addPost } from '../utils/DB';

export default function PostForm({ onPost }) {

    const [content, setContent] = useState("");
    const [processing, setProcessing] = useState(false);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (content === "" || content.length > 300) return;
        setProcessing(true);

        addPost(content, (res) => {
            if (res) {
                onPost();
                setContent("");
            }
            setProcessing(false);
        })
    }

    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <fieldset disabled={processing}>
                <div className="form-group">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <label className="mb-0 font-weight-bold mt-2" htmlFor="post-content">Contenu à poster | {content.length} sur 300</label>
                        <button className="btn btn-success btn-sm" disabled={content !== "" ? false : true}>Poster</button>
                    </div>
                    <textarea name="content" maxLength={300} className="form-control" placeholder="Saisissez votre post" id="post-content" rows="3" onChange={handleContentChange} value={content}></textarea>
                </div>
            </fieldset>
        </form>
    )
}