import Blocks from '@/components/Organisms';


export default function Hero(hero) {

    return (
        <header className={`w-full`}>
            <Blocks key={`hero`} sections={[hero.data]}></Blocks>
        </header>
    )
}