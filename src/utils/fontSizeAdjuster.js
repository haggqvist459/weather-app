import { PixelRatio, Dimensions, } from 'react-native';

const pixelRatio = PixelRatio.get();
const {height, width} = Dimensions.get('window')

const adjustSize = (size) => {
        if(pixelRatio >= 3.5){
                if(width <= 360){
                        return size * 0.95;
                }
                if(height < 667){
                        return size * 1.2;
                }
                if(height >= 667 && height <= 735){
                        return size * 1.25;
                }
                return size * 1.4;
        }
        if(pixelRatio >= 3 && pixelRatio < 3.5){
                if(width <= 360){
                        return size * 0.95
                }
                if(height < 667){
                        return size * 1.15
                }
                if(height >= 667 && height <=735){
                        return size * 1.2
                }
                return size * 1.25
        }
        if(pixelRatio >= 2 && pixelRatio < 3){
                if(width <= 360){
                        return size * 0.80
                }
                if (height < 667){
                        return size;
                }
                if (height >= 667 && height <= 735) {
                        return size * 1.15
                }
                return size * 1.25
        }
        return size;
};


    
    export default adjustSize


    /** 
     
 if (pixelRatio >= 2 && pixelRatio < 3) {
            // iphone 5s and older Androids
            if (windowWidth < 360) {
                return size * 0.95;
            }
            // iphone 5
            if (windowHeight < 667) {
                return size;
                // iphone 6-6s
            } if (windowHeight >= 667 && windowHeight <= 735) {
                return size * 1.15;
            }
            // older phablets
            return size * 1.25;
        } 
        if (pixelRatio >= 3 && pixelRatio < 3.5) {
            // catch Android font scaling on small machines
            // where pixel ratio / font scale ratio => 3:3
            if (windowWidth <= 360) {
                return size;
            }
            // Catch other weird android width sizings
            if (windowHeight < 667) {
                return size * 1.15;
                // catch in-between size Androids and scale font up
                // a tad but not too much
            }
            if (windowHeight >= 667 && windowHeight <= 735) {
                return size * 1.2;
            }
            // catch larger devices
            // ie iphone 6s plus / 7 plus / mi note 等等
            return size * 1.27;
        } if (pixelRatio >= 3.5) {
            // catch Android font scaling on small machines
            // where pixel ratio / font scale ratio => 3:3
            if (windowWidth <= 360) {
                return size;
                // Catch other smaller android height sizings
            }
            if (windowHeight < 667) {
                return size * 1.2;
                // catch in-between size Androids and scale font up
                // a tad but not too much
            }
            if (windowHeight >= 667 && windowHeight <= 735) {
                return size * 1.25;
            }
            // catch larger phablet devices
            return size * 1.4;
        } return size;



     */