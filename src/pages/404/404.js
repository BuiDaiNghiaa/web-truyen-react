import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return(
        <>
        <div className="body">
            <h1 className="h1">404 Error</h1>
            <p class="zoom-area">
                <b>CSS</b> animations to make a cool 404 page.
            </p>
            <section class="error-container">
                <span>4</span>
                <span>
                    <span class="screen-reader-text">0</span>
                </span>
                <span>4</span>
            </section>
            <div class="link-container">
                <Link class="more-link" to="/">
                    Visit the original article
                </Link>
            </div>
        </div>
        </>
    )
}