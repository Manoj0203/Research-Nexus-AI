import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DropPDF() {
    const [fileName, setFileName] = useState('');

    const pickPDF = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            });

            setFileName(res.name);
        } catch (err) {
            if (!DocumentPicker.isCancel(err)) {
                console.log(err);
            }
        }
    };

    return (
        <View style={styles.container}>
            {/* Upload Card */}
            <View style={styles.uploadCard}>
                <Icon name="cloud-upload-outline" size={70} color="#8B5CF6" />

                <Text style={styles.title}>Drag & drop your PDF here</Text>
                <Text style={styles.or}>or</Text>

                <TouchableOpacity style={styles.button} onPress={pickPDF}>
                    <Text style={styles.buttonText}>Choose PDF</Text>
                </TouchableOpacity>

                {!!fileName && (
                    <Text style={styles.fileName}>
                        {fileName}
                    </Text>
                )}
            </View>

            {/* Tips */}
            <View style={styles.tipCard}>
                <Text style={styles.tipTitle}>Tips for best results</Text>

                <View style={styles.tipRow}>
                    <Icon name="check" size={20} color="#4FC3F7" />
                    <Text style={styles.tipText}>Upload academic papers in PDF format</Text>
                </View>

                <View style={styles.tipRow}>
                    <Icon name="check" size={20} color="#4FC3F7" />
                    <Text style={styles.tipText}>
                        Ensure the PDF has selectable text
                    </Text>
                </View>

                <View style={styles.tipRow}>
                    <Icon name="check" size={20} color="#4FC3F7" />
                    <Text style={styles.tipText}>
                        Max file size: 10MB
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0023',
        padding: '4%',
        justifyContent: 'center',
    },

    uploadCard: {
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderColor: '#51486B',
        borderRadius: 18,
        backgroundColor: '#110034',
        padding: 28,
        alignItems: 'center',
    },

    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 18,
    },

    or: {
        color: '#9CA3AF',
        marginVertical: 18,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#5B2DD8',
        width: 220,
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 18,
    },

    fileName: {
        color: '#8B5CF6',
        marginTop: 20,
    },

    tipCard: {
        marginTop: 22,
        backgroundColor: '#110034',
        borderRadius: 18,
        padding: 20,
    },

    tipTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 18,
    },

    tipRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },

    tipText: {
        color: '#C9CDD8',
        marginLeft: 10,
        fontSize: 15,
        flex: 1,
    },
});