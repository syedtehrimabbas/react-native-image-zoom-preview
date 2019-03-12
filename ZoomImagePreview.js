import React, {Component} from 'react';
import {Modal, View, TouchableWithoutFeedback, StyleSheet, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    image: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }
});

export default class ZoomImagePreview extends Component {
    render() {
        let {source, visible, close, imageStyle, overlayStyle} = this.props;

        return (<Modal
            animationType={'fade'}
            transparent={true}
            onRequestClose={close}
            visible={visible}>
            <View style={[styles.overlay, overlayStyle]}>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                           cropHeight={Dimensions.get('window').height}
                           imageWidth={Dimensions.get('window').width}
                           imageHeight={Dimensions.get('window').height}>
                    <TouchableWithoutFeedback onPress={close}>
                        <Image resizeMode={'contain'} source={source} style={[styles.image, imageStyle]}/>
                    </TouchableWithoutFeedback>
                </ImageZoom>
            </View>
        </Modal>);
    }
}

ZoomImagePreview.propTypes = {
    indicator: PropTypes.func,
    visible: PropTypes.bool,
    close: PropTypes.func,
    source: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    indicatorProps: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    imageStyle: PropTypes.oneOfType([
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