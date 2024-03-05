// spell:disable
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
// creando la function app

export function App(){

    return (
        // sin llaves = true en los boolean
        <section className='App'>
            <TwitterFollowCard 
                isFollow 
                userName={'midudev'} 
                name={'Miguel Angel Duran'}/>
            
            <TwitterFollowCard 
                isFollow={false} 
                userName={'pheralb'} 
                name={'Miguel Angel Duran'}/>
            
            <TwitterFollowCard 
                isFollow={false} 
                userName={'elonmusk'} 
                name={'Miguel Angel Duran'}/>
        </section>
    )   
}