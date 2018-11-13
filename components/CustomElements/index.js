
import React from 'react';

import {
    Alert,
    Linking,
    Dimensions,
    LayoutAnimation,
    Text,
    View,
    StatusBar,
    StyleSheet,
    Button,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';


export class CButton extends React.Component {

  render() {
    return (<TouchableOpacity onPress={this.props.onPress}>
                <View style={{backgroundColor: 'blue'}}>
                    <Text style={{color:'black', fontSize:18}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>

         )
    }

}



export class CText extends React.Component {

    render() {
        return (<Text {...this.props}>{this.props.children}</Text>)
    }

}

export class CTextBold extends React.Component {

    render() {
        return (<Text {...this.props} style={{color:'black', fontWeight: '900', fontSize: 18}}>{this.props.children}</Text>)
    }

}

export class CTextBigLight extends React.Component {

    render() {
        return (<Text {...this.props} style={{color:'black', fontWeight: 'normal', fontSize: 18}}>{this.props.children}</Text>)
    }

}

export class BigText extends React.Component {

    render() {
        return (<Text {...this.props} style={CustomStyles.headText}>{this.props.children}</Text>)
    }

}

export class BText extends React.Component {

    render() {
        return (<Text {...this.props}>{this.props.children}</Text>)
    }

}

export class TTextDate extends React.Component {

    render() {
        return (<Text {...this.props}>{this.props.children}</Text>)
    }

}

export class TMTextBold extends React.Component {

    render() {
        return (<Text style={{fontWeight: '900', fontSize: 14, marginVertical: 10}} {...this.props}>{this.props.children}</Text>)
    }

}
export class TMTextBoldCenteredBig extends React.Component {

    render() {
        return (<Text style={{fontWeight: '900', fontSize: 20, marginVertical: 10, textAlign: 'center'}} {...this.props}>{this.props.children}</Text>)
    }

}
export class TMTextLight extends React.Component {

    render() {
        return (<Text style={{fontWeight: 'normal', fontSize: 14, marginVertical: 10}} {...this.props}>{this.props.children}</Text>)
    }

}
export class TMTextLightCenteredBig extends React.Component {

    render() {
        return (<Text style={{fontWeight: 'normal', fontSize: 16, marginVertical: 10, textAlign: 'center'}} {...this.props}>{this.props.children}</Text>)
    }

}

export class TTextNumber extends React.Component {

    render() {
        return (<Text {...this.props}>{this.props.children}</Text>)
    }

}
export class TTextUsers extends React.Component {

    render() {
        return (<Text {...this.props}>{this.props.children}</Text>)
    }

}

export class TitleText extends React.Component {

    render() {
        return (<Text style={CustomStyles.titleStyle} {...this.props}>{this.props.children}</Text>)
    }

}
export class TTextAmount extends React.Component {

    render() {
        return (<Text {...this.props} style={CustomStyles.amountText}>{this.props.children}</Text>)
    }

}
export class TTextAcception extends React.Component {

    render() {
        return (<Text style={{fontSize: 14}} {...this.props}>{this.props.children}</Text>)
    }

}

export class TTextAcceptionBig extends React.Component {

    render() {
        return (<Text style={{fontSize: 20, fontWeight: '900',
            color: '#2B61C4', textAlign: 'center'}} {...this.props}>{this.props.children}</Text>)
    }

}

export class EmptyList extends  React.Component {
    render () {
        const {text} = this.props;
        return (<View style={{width:"100%", backgroundColor:'#fff'}}>
            <TTextDeclinationBig>{text}</TTextDeclinationBig>
        </View>);
    }
}

export class TTextDeclinationBig extends React.Component {

    render() {
        return (<Text style={{fontSize: 20, fontWeight: '900',
            color: '#F0576A', textAlign: 'center'}} {...this.props}>{this.props.children}</Text>)
    }

}

export class TSectionComment extends React.Component {

    render() {
        return (<Text style={CustomStyles.sectionComment} {...this.props}>{this.props.children}</Text>)
    }

}

export class OutsideComment extends React.Component {

    render() {
        return (<Text {...this.props} style={CustomStyles.outComment}>{this.props.children}</Text>)
    }

}

export class CTextInput extends React.Component {

    render() {
        return (
            <View style={CustomStyles.inputMargin}><TextInput style={CustomStyles.textInput} {...this.props}/></View>)
    }

}


export class CActivityIndicator extends React.Component {
    render () {
        return (<View><ActivityIndicator size="large" color="#0000ff" /></View>);
    }
}

export class CTextInputSearch extends React.Component {

    render() {
        return (
            <View style={CustomStyles.searchStyle}><TextInput style={CustomStyles.textInput} {...this.props}/></View>)
    }

}



export class TransButton extends React.Component {

    render() {
        return (<TouchableOpacity onPress={this.props.onPress}>
                <View style={{backgroundColor: 'transparent'}}>
                    <Text style={{color:'black', fontWeight: '900' , fontSize:16, margin:20, textAlign: 'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }
}

export class StyledButtonYellow extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{backgroundColor: '#F5A623', elevation: 4}}>
                    <Text style={{color:'#fff', fontSize:16,fontWeight:'bold', margin:10, textAlign: 'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
            )
    }

}
export class StyledButtonBlue extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{backgroundColor: '#2B61C4', elevation: 4 }}>
                    <Text style={{color:'#fff', fontSize:16,fontWeight:'bold', margin:10, textAlign: 'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

export class StyledButtonDecline extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{width:'100%' }}>
                <View style={{backgroundColor: '#F55A9E', elevation: 4 }}>
                    <Text style={{color:'#fff', fontSize:16,fontWeight:'bold', margin:10, textAlign: 'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}export class StyledButtonAccept extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{width:'100%'}}>
                <View style={{backgroundColor: '#2B61C4', elevation: 4}}>
                    <Text style={{color:'#fff', fontSize:16,fontWeight:'bold', margin:10, textAlign: 'center'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}




export const buttonProps = {
    color: 'yellow',
    style: {
        color: 'red',
        margin: 10,
        fontSize: 20
    }
};

export const ViewStyles = StyleSheet.create({
    screen: {flex: 1,
        width:"100%",
        paddingLeft:10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ticketViewLoading: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 25,
        width: "100%",
        paddingRight: 25
    },
    ticketView: {
        paddingTop: 10,
        paddingBottom : 10,
        paddingLeft: 10,
        width: "100%",
        paddingRight: 10,
        backgroundColor: '#EBEBEB',
        borderStyle: 'solid',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 10
    },
    ticketPreview:{paddingBottom: 5},
    ticketImg:{paddingBottom: 5, height: 300, resizeMode: "cover" },
    ticketTitle:{paddingBottom: 10, color:"#000", paddingTop: 10, fontSize: 24, fontWeight: 'bold'},
});

export const CustomStyles = StyleSheet.create({
    error: {
        color: '#AC0000',
        fontWeight: 'bold',
    },
    QRScanner: {
        paddingBottom: 10
    },
    phone: {
        color: '#000',
        fontWeight: 'bold',
    },
    textAndroid: {
        width: '100%'
    },
    inputMargin: {
        margin: 5,
        width:'100%',
    },
    buttonMargin: {
        margin: 5,
        backgroundColor: '#AC0000'
    },
    searchStyle: {
        marginTop: 25,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 2,
        paddingLeft: 10,
        zIndex: 999,
        borderStyle: 'solid',
        borderColor: '#eee',
        borderWidth: 1,
        paddingRight: 20,
    },

    mainButton: buttonProps.style,

    TopBar: {
        margin: 0,
        position: 'relative',
        top: 0,
        height: 56,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        display: 'flex',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#2B61C4',
    },
    androidToolStyle: {
        width: "100%",
        height: 56,
        backgroundColor: '#2B61C4',
        borderWidth: 0,
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignSelf: 'stretch',

    },
    settings: {
        flex: 1
    },
    testAndroid: {
        width: "100%",
        marginBottom: 15,
    },
    containerAndroid: {
        flex: 1,
        padding: 10,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
    },
    containerTop: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        padding: 0,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        backgroundColor: '#FAFAFA',
    },
    transactionFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    transactionTopFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,

    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    textInput: {
        padding: 5,
        marginBottom: 15,
        marginTop: 5,
        width: "100%",
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 0,
    },
    buttonStyled: {
        padding:20,
    },
    testText: {
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },
    headText: {
        color: '#FFF',
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: 'bold',

    },
    outComment: {
        margin: 15,
        marginTop: 30,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'normal',

    },
    amountText: {
        marginVertical: 10,
        fontWeight: '900',
        color: 'black',
        fontSize: 24,
    },
    declinedStyle: {
        fontWeight: '900',
        color: '#F0576A',
    },
    acceptedStyle: {
        fontWeight: '900',
        color: '#2B61C4',
    },
    sectionComment: {
        fontWeight: '900',
        fontSize: 16,
        marginVertical: 15
    },
    detailedViewContainer: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    ViewCenteredContainer: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        paddingVertical: 15,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "900",
        marginVertical: 10,
        color: '#000',
    },
    actionsChoose: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginTop: 15,
        justifyContent: 'space-between',
    }
});
