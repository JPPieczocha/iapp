import React, {useState} from 'react';
import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '../../constants/colors'
import styles from './Styles';

const MovieFocus = ({navigation,route})=>{

    const {allData} = route.params;

    const header = ()=>{
        return(
            <View style={{height:120,justifyContent:'center', position:'absolute', top:0, left: 0, width:'100%', paddingLeft: 15, paddingTop: 40}}>
                <View
                style={{
                    width:50,
                    height:50,
                    backgroundColor: Colors.transparentWhite,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Ionicons name={'arrow-back'} size={30} color={Colors.inactiveTint}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <View style={{height:'100%', width:'100%', backgroundColor: Colors.primaryv3}}>
            <ImageBackground 
            resizeMode='stretch' 
            style={{
                height:'100%', 
                width:'100%',
                justifyContent:'flex-end'
            }} 
            source={{ uri: allData.movie.imageMobile }}
            >
                <BlurView  intensity={80} tint="dark" style={styles.main}>
                    <ScrollView
                    vertical
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    bouncesZoom={false}
                    style={{width:'100%'}}>
                        <View style={styles.mainHeader}>
                            <Text style={styles.titleText}>{allData.movie.title}</Text>
                            <View style={styles.movieData}>
                                <Text style={styles.movieDataText}>{allData.movie.minAge}</Text>
                                <Text style={styles.movieDataText}>{allData.movie.duration} Minutos</Text>
                                <Text style={styles.movieDataText}>{allData.movie.value}</Text>
                            </View>
                            <TouchableOpacity style={styles.playMovie} onPress={()=>navigation.navigate('MoviePlayer',{fileURL: allData.movie.movieUrl})}>
                                <Text style={styles.playMovieText}>Reproducir</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sinopsis}>
                                <Text style={styles.sinopsisText}>{allData.movie.description}</Text>
                        </View>
                        <TouchableOpacity style={styles.details} onPress={()=>navigation.navigate('MovieDetails',{allData: allData})}>
                                <Text style={styles.playMovieText}>Más detalles</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </BlurView>
            </ImageBackground>
            {header()}
        </View>
    )
}

export default MovieFocus