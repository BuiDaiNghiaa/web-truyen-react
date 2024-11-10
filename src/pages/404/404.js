import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return(
        <>
        <div className="body">
            <h1 className="h1">404 Error</h1>
            <p className="zoom-area">
                <b>CSS</b> animations to make a cool 404 page.
            </p>
            <section className="error-container">
                <span>4</span>
                <span>
                    <span className="screen-reader-text">0</span>
                </span>
                <span>4</span>
            </section>
            <div className="link-container">
                <Link className="more-link" to="/">
                    Visit the original article
                </Link>
            </div>
        </div>
        </>
    )
}