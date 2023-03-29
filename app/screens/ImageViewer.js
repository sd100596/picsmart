import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import { ImageViewer } from 'react-native-image-zoom-viewer';

const images = [{
    url: 'https://pixabay.com/images/id-3352341/',
    props: {
    }
}]
export default function ImageModal() {
    return (
            <ImageViewer style={styles.container}
                imageUrls={images}
                renderIndicator={() => null}
            />
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%"
    }
})