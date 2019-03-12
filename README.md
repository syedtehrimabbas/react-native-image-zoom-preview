# react-native-image-zoom-preview
react-native-image-zoom-preview provide functionality to Display zoom image in transparent modal window on image able also you can add water mark to your image.


#Installation

Automatically

With Expo, this is pre-installed. Jump ahead to Usage

Install library from npm

npm i react-native-image-zoom-preview

#how to use?

import ZoomImagePreview from "react-native-image-zoom-preview";


<ZoomImagePreview
                    waterMarkStyle={styles.waterMarkStyle}
                    showWatermark={true}
                    waterMarkSource={require('../assets/images/watermark.png')}
                    visible={this.state.isPreview}
                    source={{uri: previewSource}}
                    close={this.onClosePreview.bind(this)}
                />
                
        onClosePreview(source) {
        this.setState({isPreview: !this.state.isPreview})
    }
