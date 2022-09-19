import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../Components/Background';
import { styles } from './styles';
import {Entypo} from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../Components/Heading';
import { DuoCard, DuoCardProps } from '../../Components/DuoCard';
import {useEffect, useState} from 'react'

interface RouteParams{
  id:string;
  title: string;
  bannerUrl:string;
}


export function Game() {

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as RouteParams;

  function handleGoBack(){
    navigation.goBack();
  }

  const [duos, setDuos] = useState<DuoCardProps[]>([])
  useEffect(() => {
      fetch(`http://10.0.0.164:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image source={{uri:game.bannerUrl}} style={styles.cover} resizeMode="cover" />
        <Heading title={game.title} subtitle='Conecte-se e comece a jogar' />
        <FlatList data={duos} keyExtractor={item => item.id} renderItem={({item}) => (
          <DuoCard data={item} />
        )} />
      </SafeAreaView>
    </Background>
  );
}