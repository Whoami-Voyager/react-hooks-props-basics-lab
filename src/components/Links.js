import React from "react";

function UserLink({github, linkedin}) {
    return (
        <div>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    )
}

export default UserLink