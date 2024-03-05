// spell:disable
import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [

    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true,
    },
    {
        userName:'pheralb',
        name:'Pablo H.',
        isFollowing: false,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdezs',
        isFollowing: true,
        
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,

    },
]



// creando la function app

export function App(){

    // cada ves que la aplicacion cambio de estado se renderizan todos los elementos nuevamente pero en el DON solo se renderizan los cambios
    // que se realizaron
    const [name, setName] = useState('midudev')

    const cambioName = ()=>{
        setName('Luis Miguel')

    }

    return (
        // sin llaves = true en los boolean
        <section className='App'>

            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        // ciamdo agregamos arreglos se incluye la key
                        key={userName}
                        userName={userName}
                        initialIsFollowing = {isFollowing}
                    >
                        {/* children */}
                        {name} 
                    </TwitterFollowCard>
                ))
            }

            {/* 
                se pueden tener componentes dentro de otros
                <TwitterFollowCard> 
                    <TwitterFollowCard>

                    </TwitterFollowCard>
                </TwitterFollowCard>
            */}
            {/* <TwitterFollowCard 
                userName={name} 
                initialIsFollowing={true}
                name={'Miguel Angel Duran'}>
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName={'pheralb'} 
                name={'Miguel Angel Duran'}>
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName={'elonmusk'} >
                 Children (puede incluir mas cosas) 
                <i>Luis Miguel</i> 
            </TwitterFollowCard> */}



            <button onClick={cambioName}>
                Cambiar nombre
            </button>

            {/* Cuando utilizar el children ( cuando el componente va a ser muy extensible)  o como props depende de  como se va a componer la ui del usuario*/}
        </section>
    )   
}