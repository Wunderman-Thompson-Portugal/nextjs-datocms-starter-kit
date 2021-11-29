import Blocks from '@/components/Organisms';


export default function Hero(hero) {

    console.log(hero.data)
    return (
        <section className={`w-full`}>
            <Blocks key={`hero`} sections={[hero.data]}></Blocks>
        </section>
    )
}