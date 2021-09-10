import React,{useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Video, AVPlaybackStatus, ScreenOrientation } from 'expo-av';

const {width, height} = Dimensions.get('window')

const MoviePlayer = ({navigation, route})=>{

	const {title} = route.params;
	const [fullScreen,setFullScreen] = useState(false);
	const [status, setStatus] = React.useState({});

	const video = React.useRef(null);

	const fullScreenPlayback = ()=>{
		if(Platform.OS === 'ios'){
			video.current.presentFullscreenPlayer()
		}else{

		}
	}

	const handleDismissFullScreen = ()=>{
		if(Platform.OS === 'ios'){
			if(!fullScreen){
				setFullScreen(!fullScreen)
				return;
			}
			if(status.isLoaded && fullScreen){
				navigation.pop();
			}
		}else{

		}
	}

	const handlePlatformNativeControls = ()=>{
		if(Platform.OS === 'ios'){
			return false;
		}
		return true;
	}

	return (
		<View style={styles.container}>
			<View onPress={()=>console.log('TOQUE')}>
				<Video
					ref={video}
					style={styles.video}
					source={{uri: 'https://es.vid.web.acsta.net/nmedia/34/19/06/03/14//19562331_hd_013.mp4',}}
					resizeMode="contain"

					//Y si lo pongo en pantalla chiquita y doy la chance de que hagan fullscreen?? MMm
					onPlaybackStatusUpdate={status => setStatus(() => status)}
					shouldPlay={true}
					autoplay={true}
					useNativeControls={handlePlatformNativeControls()}
					onLoad={()=>fullScreenPlayback()}
					onFullscreenUpdate={()=>handleDismissFullScreen()}
					// onReadyForDisplay={params => {params.naturalSize.orientation = "landscape"}}
					// el onReadyForDisplay era  una solución que no funcionó de una web.
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	video: {
		alignSelf: 'center',
		width: width,
		height: height,
		backgroundColor:'#000000'
	}
});

export default MoviePlayer;