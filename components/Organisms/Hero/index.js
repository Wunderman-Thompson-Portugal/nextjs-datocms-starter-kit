import Blocks from '@/components/Organisms';


export default function Hero(hero) {

    console.log(hero.data)
    return (
        <header className={`w-full`}>
            <Blocks key={`hero`} sections={[hero.data]}></Blocks>
        </header>
    )
}