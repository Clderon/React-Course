// importando la utilidad ( hugs ) para poder crear estados
import { useState } from "react";

// children (todo lo que envuelve) [ puede cer una cadena de texto o un elemento html]
// valores por defecto en los parámetros
export function TwitterFollowCard({children, userName='unknow', name, initialIsFollowing}){


    // creando un estado ( como es el estado inicial)
    // retorna un array de 2 en el [0] retorna el valor del estado [1] una función que permite actualizar el estado para la nueva version
    // desestructurando el state
    // es estado inicial solo se puede iniciar 1 vez
    const [isFollow,setFolloWing ]  = useState(initialIsFollowing)

    // rendering condicional ( dependiendo de una condición que rendering una cosa o otra)
    // respondiendo a un estado 
    const text = isFollow ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollow  ? 'tw-followCard-button is-follow' : 'tw-followCard-button'

    const handleClick = () => {
        // cuando hagamos click en el button vamos a cambiar el button
        setFolloWing(!isFollow)
    }


    return (


        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${ userName     }`} alt="avatar de deviantArt" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUsername'>{ name||children }</strong>
                    <span className='tw-followCard-infoContact'>@{ userName }</span>
                </div>
            </header>


            <aside className="tw-followCard-aside">
                <button className= {buttonClassName} onClick={handleClick}>
                   <span className="tw-followCard-text">{ text }</span>   {/* Children -> lo que envuelve este elemento */}
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>


    )
}