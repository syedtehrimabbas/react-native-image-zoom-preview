# react-native-image-zoom-preview
react-native-image-zoom-preview provide functionality to Display zoom image in transparent modal window on image able also you can add water mark to your image.


# Installation

Automatically

With Expo, this is pre-installed. Jump ahead to Usage

Install library from npm

npm i react-native-image-zoom-preview

# how to use?

import ZoomImagePreview from "react-native-image-zoom-preview";


       constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            images: [],
            isPreview: false,
            previewSource: '',
            imageHeight: 0,
            imageWidth: 0,
        }
    }
    
    <ZoomImagePreview
                    waterMarkStyle={styles.waterMarkStyle}
                    showWatermark={true}
                    waterMarkSource={require('../assets/images/watermark.png')}
                    visible={isPreview} source={{uri: previewSource}}
                    close={this.onClosePreview.bind(this)}
                    height={this.state.imageHeight}
                    width={this.state.imageWidth}
                />
                
       onClosePreview(images) {
        console.log("images", images)
        this.setState({
            isPreview: !this.state.isPreview,
            previewSource: images[this.state.currentIndex],
        })
        Image.getSize(images[this.state.currentIndex], (width, height) => {
            console.log("width:",width)
            console.log("height:",height)
            this.setState({
                imageWidth: width,
                imageHeight: height-10
            })
        });
    }
