import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

import Modal from "react-native-modal";

import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import Opcao from './opcao';

export default function HomeScreen() {
    //navigation
    const navigation = useNavigation();

    //CountDown
    const [totalDuration, setTotalDuration] = useState(0);
    useEffect(() => {
        //We are showing the coundown timer for a given expiry date-time
        //If you are making a quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec
        var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC
        var expirydate = '2023-03-08 09:45:00'; //You can set your own date-time
        //Let suppose we have to show the countdown for above date-time
        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time
        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        //converting in seconds
        setTotalDuration(d);
        //Settign up the duration of countdown in seconds to re-render
    }, []);

    // translate
    const { t, i18n } = useTranslation();
    const changeLanguage = value => {
        i18n.changeLanguage(value)
    }

    //Modal
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);

    function ctaInscriver(){
        navigation.navigate("Opcao");
        setModalVisible(!isModalVisible);
    }
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
      };


 return (    
   <View style={styles.container}>
     <StatusBar barStyle="light-content"/>
    <View style={styles.areaFlags}>
        <TouchableOpacity onPress={() => changeLanguage('br')}>
            <Image source={require('../../images/Brazil-flag.png')} style={styles.ctaFlag}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
            <Image source={require('../../images/USA-flag.png')} style={styles.ctaFlag}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('sp')}>
            <Image source={require('../../images/Spain-flag.png')} style={styles.ctaFlag}/>
        </TouchableOpacity>
    </View> 
    <Swiper autoplay={true} dotColor={"#fff"} activeDotColor={"#FFC32E"} autoplayTimeout={6}>
        <View style={styles.areaSlide}>
            <Text style={styles.tituto}>{t("INSCREVA-SE HOJE MESMO")}</Text>
            <Image source={require('../../images/logo-2.png')} style={styles.logo}/>
            <View style={styles.areaTexto}>
                <Text style={styles.textGrande}>
                Participe do primeiro evento online unindo portugueses e brasileiros
                para apresentar e debater Customer Experience e Customer Success.    
                </Text>
            </View>
            <TouchableOpacity style={styles.ctaInscriver} onPress={toggleModal2}>
                <Text style={styles.ctaTexto}>Quero me inscrever agora</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
                <Text style={{color:"#fff", fontWeight:'bold', fontSize:RFValue(10)}}> QUERO SER PATROCINADOR</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.areaSlide}>
            <Text style={styles.tituto}>BENEFÍCIOS EM PARTICIPAR</Text>
            <Image source={require('../../images/logo-1.png')} style={styles.logo}/>
            <View style={[styles.areaTexto,{marginVertical:17}]}>
                <Text style={styles.textPeq}>
                Apresentação de casos de sucesso de empresas que implantaram
                CX e CS com grandes resultados.
                </Text>
                <Text style={styles.textPeq}>
                Debates sobre tendências internacionais para ampliar 
                seus conhecimentos em CX e CS. 
                </Text>
                <Text style={styles.textPeq}>
                Networking direcionado com referências em CX e CS em seus países.    
                </Text>
                <Text style={styles.textPeq}>
                Soluções para aumentar os resultados da sua empresa e dos seus clientes.    
                </Text>
                <Text style={styles.textPeq}>
                Oportunidade de aprofundar o entendimento sobre CX e CS e a complementaridades entre eles.    
                </Text>
                
            </View>

            <TouchableOpacity style={styles.ctaInscriver} onPress={toggleModal2}>
                <Text style={styles.ctaTexto}>Quero me inscrever agora</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
                <Text style={{color:"#fff", fontWeight:'bold', fontSize:RFValue(10)}}> QUERO SER PATROCINADOR</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.areaSlide}>
            <Text style={styles.tituto}>CONTAGEM REGRESSIVA</Text>
            <Image source={require('../../images/logo-1.png')} style={styles.logo}/>
            <View style={styles.areaTexto}>
                <Text style={styles.textGrande}>
                Não perca tempo e aproveite esse primeiro lote com inscrição gratuita no The Customer Summit.    
                </Text>
            </View>
            <View style={styles.areaCrono}>
            <CountDown
            style={styles.count}

          until={totalDuration}
          //duration of countdown in seconds
          digitStyle={{width:70}}
          timetoShow={('H', 'M', 'S')}
          timeLabels={{d: 'Dias', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
          digitTxtStyle={{color: '#fff', fontSize:RFValue(20)}}
          digitTxtLabels={{color:"#fff"}}
          timeLabelStyle={{color: '#fff', fontWeight: 'bold', marginVertical:10, fontSize:RFValue(10)}}
          separatorStyle={{color: '#1CC625'}}
        />
               
            </View>
            <TouchableOpacity style={styles.ctaInscriver} onPress={toggleModal2}>
                <Text style={styles.ctaTexto}>Quero me inscrever agora</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal}>
                <Text style={{color:"#fff", fontWeight:'bold', fontSize:RFValue(10)}}> QUERO SER PATROCINADOR</Text>
            </TouchableOpacity>
        </View>
    </Swiper>
    <Modal 
    isVisible={isModalVisible} 
    style={styles.modalStyle} 
    animationInTiming={100} 
    animationOutTiming={100}
    coverScreen={true}
    >
        <View style={{width:"95%", height:"100%", alignItems:'center'}}>
            
            <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../images/conquist_marca.png')} style={{marginVertical:30}}/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>SEJA PATROCINADOR!</Text>
            <Text style={styles.modalDescription}>
            Envie uma mensagem para nosso time e receba uma proposta 
            com os benefícios detalhados para nossos patrocinadores e apoiadores.
            </Text>

            <TextInput
            style={styles.Input}
            placeholder="Digite seu Nome e Sobrenome"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Nome da sua empresa"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Qual seu cargo na empresa"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Seu melhor email"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Qual o seu país"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Digite seu numero celular"
            placeholderTextColor="#fff"
            />

            <TouchableOpacity style={styles.ctaInscriver} onPress={ctaInscriver}>
                <Text style={styles.ctaTexto}>QUERO SER UM PATROCINADOR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ctaFechaModal} onPress={toggleModal}>
                <Text style={styles.xText}>X</Text>
            </TouchableOpacity>

          
        </View>
      </Modal>
    <Modal 
    isVisible={isModalVisible2} 
    style={[styles.modalStyle,{backgroundColor:"#002E65"}]} 
    animationInTiming={100} 
    animationOutTiming={100}
    coverScreen={true}
    >
        <View style={{width:"95%", height:"100%", alignItems:'center'}}>
            
            <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../images/conquist_marca.png')} style={{marginVertical:30}}/>
            </TouchableOpacity>
            <Text style={[styles.modalTitle,{fontSize:RFValue(18)}]}>INSCREVA-SE AGORA MESMO!</Text>
            <Text style={styles.modalDescription}>
            Não perca tempo e aproveite esse primeiro lote com inscrição gratuita no The Customer Summit.
            </Text>

            <TextInput
            style={styles.Input}
            placeholder="Digite seu Nome e Sobrenome"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Nome da sua empresa"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Qual seu cargo na empresa"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Seu melhor email"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Qual o seu país"
            placeholderTextColor="#fff"
            />
            <TextInput
            style={styles.Input}
            placeholder="Digite seu numero celular"
            placeholderTextColor="#fff"
            />

            <TouchableOpacity style={styles.ctaInscriver} onPress={() => navigation.navigate(Opcao)}>
                <Text style={styles.ctaTexto}>QUERO ME INSCREVER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ctaFechaModal} onPress={toggleModal2}>
                <Text style={styles.xText}>X</Text>
            </TouchableOpacity>

          
        </View>
      </Modal>
   </View>
   
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#000D31"
    },
    areaFlags:{
        width:"100%",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'stretch',
        paddingTop:70,
        paddingBottom:20
    },
    ctaFlag:{
        margin:5
    },
    areaSlide:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10
    },
    tituto:{
        color:"#FFC32E",
        fontSize:RFValue(20),
        fontWeight:'bold'
    },
    logo:{
        marginVertical:30
    },
    areaTexto: {
        justifyContent:'center',
        alignItems:"flex-start",
        paddingHorizontal:30
    },
    textGrande:{
        color:"#fff",
        fontSize:RFValue(22),
        fontWeight:'bold',
    },
    textPeq:{
        color:"#fff",
        fontSize:RFValue(12),
        fontWeight:'bold',
        marginVertical:10
    },
    ctaInscriver:{
        backgroundColor:"#FFC32E",
        padding:8,
        width:360,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3
    },
    ctaTexto:{
        fontSize:RFValue(13),
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    count:{
        borderRadius:5,
        marginVertical:35,
        width:360,
        paddingVertical:20,
        backgroundColor:"#851849"
    },

    // Modal styles
    modalTitle:{
        color:"#FFC32E",
        marginVertical:10,
        fontSize:RFValue(22),
        fontWeight:'bold'
    },
    modalDescription: {
        color:"#fff",
        fontSize:RFValue(12),
        textAlign:'center',
        fontWeight:'700',
        marginTop:10,
        marginBottom:30
    },
    Input:{
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:5,
        textAlign:'center',
        padding:20,
        width:370,
        height:30,
        margin:10,
        marginVertical:5
    },
    modalStyle:{
        backgroundColor:"#851849",  
        position:'absolute',
        bottom:70,
        right:-20,
        paddingTop:10,
        justifyContent:'flex-start', 
        width:"100%",
        height:"80%",
        borderTopRightRadius:40,
        borderTopLeftRadius:40, 
        alignItems:'center',
        elevation:5
    },
    ctaFechaModal:{
        marginVertical:10,
        backgroundColor:"#fff",
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    },
    xText:{
        fontSize:RFValue(20),
        fontWeight:'bold'
    }

})