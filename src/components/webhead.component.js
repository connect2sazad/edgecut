import React from 'react';
import { Helmet } from 'react-helmet';

function WebHead({ headInsiders }) {

    const author = "Sazad Ahemad";
    const favicon = "https://lyncdigit.com/wp-content/uploads/2021/11/logo-icon-png-300x300.png";

    const keywordsMaker = () =>{
        var keywords = headInsiders.keywords;
        const keywordString = keywords.join(', ');
        return keywordString;
    }

    return (
        <>
            <Helmet>
                <title>{headInsiders.page_title}</title>
                <meta name="keywords" content={keywordsMaker()} />
                <meta name="description" content={headInsiders.description} />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="author" content={author} />
                <link rel="icon" href={favicon} type="image/png" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
                <link href={process.env.PUBLIC_URL+"assets/css/font-awesome.min.css"} rel="stylesheet" />
                <link href={process.env.PUBLIC_URL+"assets/css/style.css"} rel="stylesheet" />
                <link href={process.env.PUBLIC_URL+"assets/css/responsive.css"} rel="stylesheet" />
            </Helmet>
        </>
    );
}

export default WebHead;
