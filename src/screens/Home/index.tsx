import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from "../../Components/Heading";
import { GameCard, GameCardProps } from "../../Components/GameCard";
import { useEffect, useState } from "react";



export function Home(){
    const [games, setGames] = useState<GameCardProps[]>([])
    useEffect(() => {
        fetch('http://10.0.0.164:3333/games')
        .then(response => response.json())
        .then(data => setGames(data))
    }, [])
    return(
        <View style={styles.container}> 
            <Image source={logoImg} style={styles.logo} />
            <Heading title="Encontre seu duo" subtitle="Selecione o game que deseja jogar..." />
            <FlatList contentContainerStyle={styles.contentList} horizontal data={games} keyExtractor={item => item.id} renderItem={({item}) => (<GameCard data={item} />)} />
            
        </View>
    )
}