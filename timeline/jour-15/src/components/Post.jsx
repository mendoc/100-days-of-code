import Moment from 'react-moment';
import Linkify from 'react-linkify';

export default function Post({ data }) {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text"><Linkify>{data.content}</Linkify></p>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Posté le <cite title="Source Title"><Moment format="DD/MM à HH:mm">{data.postDate}</Moment></cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}