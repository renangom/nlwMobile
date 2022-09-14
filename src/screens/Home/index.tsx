import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from "../../Components/Heading";
import { GameCard } from "../../Components/GameCard";
import { GAMES } from "../../utils/games";
export function Home(){
    return(
        <View style={styles.container}> 
            <Image source={logoImg} style={styles.logo} />
            <Heading title="Encontre seu duo" subtitle="Selecione o game que deseja jogar..." />
            <FlatList contentContainerStyle={styles.contentList} horizontal data={GAMES} keyExtractor={item => item.id} renderItem={({item}) => (<GameCard data={item} />)} />
            
        </View>
    )
}