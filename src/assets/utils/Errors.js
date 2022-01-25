export function notFoundError(contentProps) {
    let contentString = 'The content you are trying to view';
    let name = contentProps?.name || '';
    let desc = contentProps?.desc || '';
    // console.log(JSON.stringify(contentProps));
    // console.log('"'+name+'"');
    // console.log('"'+desc+'"');
    if(name.length > 0) {
        contentString += ", '"+name+"'";
        if(desc.length > 0)
            contentString += " ("+desc+")";
        contentString += ',';
    }
    // console.log(JSON.stringify(contentString));
    return (
        <div className='content-not-found'>
            <h1 className='err-head'>
                Content Not Found
            </h1>
            <p className='err-desc'>
                {contentString} could not be found or accessed.
                This could be because:
            </p>
            <ul className='err-causes'>
                <li className='err-cause'>The content has not yet been made public.</li>
                <li className='err-cause'>The content has expired and its references have not yet been cleaned.</li>
                <li className='err-cause'>The content has been removed or otherwise made inaccessible.</li>
                <li className='err-cause'>There is a typo in the URL.</li>
                <li className='err-cause'>There has been a network error.</li>
            </ul>
        </div>
    );
};