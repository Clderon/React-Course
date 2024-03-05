
export function TwitterFollowCard({userName, name, isFollow}){
    console.log(isFollow);
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar de deviantArt" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUsername'>{name}</strong>
                    <span className='tw-followCard-infoContact'>@{userName}</span>
                </div>
            </header>


            <aside className="tw-followCard-aside">
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>


    )
}