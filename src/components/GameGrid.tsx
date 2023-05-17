import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
    const { games, error, loading } = useGames()

    const Skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={10}
                padding="10px"
            >
                {loading && Skeletons.map((s) => <GameCardSkeleton key={s} />)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    )
}

export default GameGrid
