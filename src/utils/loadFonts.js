import * as Font from 'expo-font'

export const FONT_NAME = 'SourceSansPro';

const loadFonts = async() => {

        await Font.loadAsync({
                //fontWeight 200
                'SourceSansPro-ExtraLight': require('../assets/fonts/SourceSansPro-ExtraLight.ttf'),
                'SourceSansPro-ExtraLightItalic': require('../assets/fonts/SourceSansPro-ExtraLightItalic.ttf'),
                //fontWeight 300
                'SourceSansPro-Light': require('../assets/fonts/SourceSansPro-Light.ttf'),
                'SourceSansPro-LightItalic': require('../assets/fonts/SourceSansPro-LightItalic.ttf'),
                //fontWeight 400
                'SourceSansPro-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf'),
                'SourceSansPro-Italic': require('../assets/fonts/SourceSansPro-Italic.ttf'),
                //fontWeight 600
                'SourceSansPro-SemiBold': require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
                'SourceSansPro-SemiBoldItalic': require('../assets/fonts/SourceSansPro-SemiBoldItalic.ttf'),
                //fontWeight 700
                'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
                'SourceSansPro-BoldItalic': require('../assets/fonts/SourceSansPro-BoldItalic.ttf'),
                //fontWeight 900
                'SourceSansPro-Black': require('../assets/fonts/SourceSansPro-Black.ttf'),
                'SourceSansPro-BlackItalic': require('../assets/fonts/SourceSansPro-BlackItalic.ttf'),
        })
}

export default loadFonts;