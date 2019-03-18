/*react-native-image-pan-zoom
* Syed tehrim abbas*/
import React, {Component} from 'react';
import {
    Modal,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    backgroundImageMargin: {
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center'
    }, watermark: {opacity: 0.5, alignSelf: 'center', alignItems: 'center', width: 300, height: 300}
});

export default class ZoomImagePreview extends Component {
    render() {
        let {source, visible, imageStyle, overlayStyle, waterMarkSource, waterMarkStyle, showWatermark, width, height, onRequestClose} = this.props;

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                onRequestClose={onRequestClose}
                visible={visible}>
                <View style={[styles.overlay, overlayStyle]}>
                    <ImageZoom cropWidth={Dimensions.get('window').width}
                               cropHeight={Dimensions.get('window').height}
                               imageWidth={Dimensions.get('window').width}
                               imageHeight={Dimensions.get('window').height}>
                        <TouchableWithoutFeedback style={{
                            width: width,
                            height: height
                        }} onPress={onRequestClose}>
                            <ImageBackground imageStyle={[styles.image, styles.backgroundImageMargin]}
                                             resizeMode={'contain'}
                                             source={source}
                                             style={[styles.image, imageStyle]}>
                                <TouchableWithoutFeedback style={[waterMarkStyle]}>
                                    <Image resizeMode={'contain'} source={waterMarkSource}
                                           style={{
                                               width: width,
                                               height: height
                                           }}/>
                                </TouchableWithoutFeedback>

                            </ImageBackground>
                        </TouchableWithoutFeedback>
                    </ImageZoom>
                </View>
            </Modal>);
    }
}

ZoomImagePreview.propTypes = {
    indicator: PropTypes.func,
    visible: PropTypes.bool,
    onRequestClose: PropTypes.func,
    source: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]), waterMarkSource: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    indicatorProps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    showWatermark: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    imageStyle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]), waterMarkStyle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    overlayStyle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};
