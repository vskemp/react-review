import React from 'react';

// /*you could put Greet(jeff) if you wanted */
// function Greet(props) {
//     return (
//         <h1>{props.how}, {props.whom}</h1>
//     );
// }

// export default Greet;



function Greet({
    how,
    whom
}) {
    return (
        <div className="card greet">
            <h1>{how}, {whom}</h1>
        </div>
    );
}

export default Greet;