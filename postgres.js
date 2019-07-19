const Sequelize = require('sequelize');
const _ = require('lodash');

const sequelize = new Sequelize('postgres://postgres:@localhost:5432/postgresql', {
    quoteIdentifiers: false
});
const Model = Sequelize.Model;

class Feature extends Model {}
Feature.init({
    date: {
        type: Sequelize.BIGINT
    },
    datetime: {
        type: Sequelize.BIGINT
    },
    clientidentifier: {
        type: Sequelize.STRING
    },
    conferenceidentifier: {
        type: Sequelize.STRING
    },
    peeridentifier: {
        type: Sequelize.STRING
    },
    clientid: {
        type: Sequelize.STRING
    },
    connectionid: {
        type: Sequelize.STRING
    },
    streamid: {
        type: Sequelize.STRING
    },
    tags: {
        type: Sequelize.STRING
    },
    origin: {
        type: Sequelize.STRING
    },
    pageurl: {
        type: Sequelize.STRING
    },
    browsername: {
        type: Sequelize.STRING
    },
    browserversion: {
        type: Sequelize.STRING
    },
    browseros: {
        type: Sequelize.STRING
    },
    browseruseragent: {
        type: Sequelize.STRING
    },
    browsernameversion: {
        type: Sequelize.STRING
    },
    browsernameos: {
        type: Sequelize.STRING
    },
    browsernameversionos: {
        type: Sequelize.STRING
    },
    browsermajorversion: {
        type: Sequelize.INTEGER
    },
    browsertype: {
        type: Sequelize.STRING
    },
    locationCountry: {
        type: Sequelize.STRING
    },
    locationCity: {
        type: Sequelize.STRING
    },
    locationContinent: {
        type: Sequelize.STRING
    },
    locationLon: {
        type: Sequelize.DOUBLE
    },
    locationLat: {
        type: Sequelize.DOUBLE
    },
    locationLonLat: {
        type: Sequelize.STRING
    },
    calledgetusermedia: {
        type: Sequelize.BOOLEAN
    },
    calledlegacygetusermedia: {
        type: Sequelize.BOOLEAN
    },
    calledmediadevicesgetusermedia: {
        type: Sequelize.BOOLEAN
    },
    calledgetusermediarequestingaudio: {
        type: Sequelize.BOOLEAN
    },
    calledgetusermediarequestingscreen: {
        type: Sequelize.STRING
    },
    calledgetusermediarequestingvideo: {
        type: Sequelize.BOOLEAN
    },
    calledgetusermediarequestingaec3: {
        type: Sequelize.BOOLEAN
    },
    getusermediaerror: {
        type: Sequelize.STRING
    },
    getusermediasuccess: {
        type: Sequelize.BOOLEAN
    },
    timebetweengetusermediaandgetusermediasuccess: {
        type: Sequelize.INTEGER
    },
    timebetweengetusermediaandgetusermediafailure: {
        type: Sequelize.INTEGER
    },
    firstaudiotracklabel: {
        type: Sequelize.STRING
    },
    firstvideotracklabel: {
        type: Sequelize.STRING
    },
    numberofpeerconnections: {
        type: Sequelize.INTEGER
    },
    userfeedbackaudio: {
        type: Sequelize.INTEGER
    },
    userfeedbackvideo: {
        type: Sequelize.INTEGER
    },
    starttime: {
        type: Sequelize.BIGINT
    },
    stoptime: {
        type: Sequelize.BIGINT
    },
    lifetime: {
        type: Sequelize.INTEGER
    },
    sessionduration: {
        type: Sequelize.INTEGER
    },
    remotetype: {
        type: Sequelize.STRING
    },
    isinitiator: {
        type: Sequelize.BOOLEAN
    },
    signalingstableatleastonce: {
        type: Sequelize.BOOLEAN
    },

    configured: {
        type: Sequelize.BOOLEAN
    },
    configuredbundlepolicy: {
        type: Sequelize.BOOLEAN
    },
    configuredcertificate: {
        type: Sequelize.BOOLEAN
    },
    configuredicetransportpolicy: {
        type: Sequelize.BOOLEAN
    },
    configuredrtcpmuxpolicy: {
        type: Sequelize.BOOLEAN
    },
    configuredwithiceservers: {
        type: Sequelize.BOOLEAN
    },
    configuredwithstun: {
        type: Sequelize.BOOLEAN
    },
    configuredwithturn: {
        type: Sequelize.BOOLEAN
    },
    configuredwithturntcp: {
        type: Sequelize.BOOLEAN
    },
    configuredwithturntls: {
        type: Sequelize.BOOLEAN
    },
    configuredwithturnudp: {
        type: Sequelize.BOOLEAN
    },
    configuredsdes: {
        type: Sequelize.BOOLEAN
    },
    sdpsemantics: {
        type: Sequelize.STRING
    },
    calledaddtrack: {
        type: Sequelize.BOOLEAN
    },
    calledaddstream: {
        type: Sequelize.BOOLEAN
    },
    closereason: {
        type: Sequelize.STRING
    },

    localcreatedelay: {
        type: Sequelize.INTEGER
    },
    maxstreams: {
        type: Sequelize.INTEGER
    },
    maxremotestreams: {
        type: Sequelize.INTEGER
    },
    numberofremotestreams: {
        type: Sequelize.INTEGER
    },
    mediatypes: {
        type: Sequelize.STRING
    },
    usingbundle: {
        type: Sequelize.BOOLEAN
    },
    usingicelite: {
        type: Sequelize.BOOLEAN
    },
    usingmultistream: {
        type: Sequelize.BOOLEAN
    },
    usingrtcpmux: {
        type: Sequelize.BOOLEAN
    },
    usingsimulcast: {
        type: Sequelize.BOOLEAN
    },
    setlocaldescriptionfailure: {
        type: Sequelize.STRING
    },
    setremotedescriptionfailure: {
        type: Sequelize.STRING
    },
    addicecandidatefailure: {
        type: Sequelize.STRING
    },
    dtlsciphersuite: {
        type: Sequelize.STRING
    },
    srtpciphersuite: {
        type: Sequelize.STRING
    },

    icegatheringcomplete: {
        type: Sequelize.BOOLEAN
    },
    iceconnectedorcompleted: {
        type: Sequelize.BOOLEAN
    },
    icefailure: {
        type: Sequelize.BOOLEAN
    },
    icefailuresubsequent: {
        type: Sequelize.BOOLEAN
    },
    icerestart: {
        type: Sequelize.BOOLEAN
    },
    icerestartsuccess: {
        type: Sequelize.BOOLEAN
    },
    icerestartfollowedbysetremotedescription: {
        type: Sequelize.BOOLEAN
    },
    icerestartfollowedbyrelaycandidate: {
        type: Sequelize.BOOLEAN
    },
    iceconnectionstatecheckingbeforesrd: {
        type: Sequelize.BOOLEAN
    },
    dtlsfailure: {
        type: Sequelize.BOOLEAN
    },
    timebetweensetlocaldescriptionandonicecandidate: {
        type: Sequelize.INTEGER
    },
    timebetweensetremotedescriptionandaddicecandidate: {
        type: Sequelize.INTEGER
    },
    timeforfirstsetremotedescription: {
        type: Sequelize.INTEGER
    },
    ontrackafterfirstsetremotedescription: {
        type: Sequelize.BOOLEAN
    },
    timeforsecondsetremotedescription: {
        type: Sequelize.INTEGER
    },
    numberofcandidatepairchanges: {
        type: Sequelize.INTEGER
    },
    numberoflocalicecandidates: {
        type: Sequelize.INTEGER
    },
    numberofremoteicecandidates: {
        type: Sequelize.INTEGER
    },
    numberoflocalsimulcaststreams: {
        type: Sequelize.INTEGER
    },
    connectiontime: {
        type: Sequelize.INTEGER
    },
    iceconnectiontime: {
        type: Sequelize.INTEGER
    },
    numberofinterfaces: {
        type: Sequelize.INTEGER
    },
    firstcandidatepairtype: {
        type: Sequelize.STRING
    },
    firstcandidatepairlocaltype: {
        type: Sequelize.STRING
    },
    firstcandidatepairremotetype: {
        type: Sequelize.STRING
    },
    firstcandidatepairlocalipaddress: {
        type: Sequelize.STRING
    },
    firstcandidatepairremoteipaddress: {
        type: Sequelize.STRING
    },
    firstcandidatepairlocaltypepreference: {
        type: Sequelize.INTEGER
    },
    firstcandidatepairremotetypepreference: {
        type: Sequelize.INTEGER
    },
    firstcandidatepairlocalnetworktype: {
        type: Sequelize.STRING
    },
    networktype: {
        type: Sequelize.STRING
    },
    gatheredhost: {
        type: Sequelize.BOOLEAN
    },
    gatheredstun: {
        type: Sequelize.BOOLEAN
    },
    gatheredturntcp: {
        type: Sequelize.BOOLEAN
    },
    gatheredturntls: {
        type: Sequelize.BOOLEAN
    },
    gatheredturnudp: {
        type: Sequelize.BOOLEAN
    },
    gatheredrfc1918addressprefix16: {
        type: Sequelize.BOOLEAN
    },
    gatheredrfc1918addressprefix12: {
        type: Sequelize.BOOLEAN
    },
    gatheredrfc1918addressprefix10: {
        type: Sequelize.BOOLEAN
    },
    gatheringtime: {
        type: Sequelize.INTEGER
    },
    gatheringtimeturntcp: {
        type: Sequelize.INTEGER
    },
    gatheringtimeturntls: {
        type: Sequelize.INTEGER
    },
    gatheringtimeturnudp: {
        type: Sequelize.INTEGER
    },
    hadremoteturncandidate: {
        type: Sequelize.BOOLEAN
    },
    relayaddress: {
        type: Sequelize.STRING
    },
    publicipaddress: {
        type: Sequelize.STRING
    },
    bwegoogactualencbitratemean: {
        type: Sequelize.DOUBLE
    },
    bwegoogactualencbitratemax: {
        type: Sequelize.DOUBLE
    },
    bwegoogactualencbitratemin: {
        type: Sequelize.DOUBLE
    },
    bwegoogactualencbitratevariance: {
        type: Sequelize.DOUBLE
    },
    bwegoogretransmitbitratemean: {
        type: Sequelize.DOUBLE
    },
    bwegoogretransmitbitratemax: {
        type: Sequelize.DOUBLE
    },
    bwegoogretransmitbitratemin: {
        type: Sequelize.DOUBLE
    },
    bwegoogretransmitbitratevariance: {
        type: Sequelize.DOUBLE
    },
    bwegoogtargetencbitratemean: {
        type: Sequelize.DOUBLE
    },
    bwegoogtargetencbitratemax: {
        type: Sequelize.DOUBLE
    },
    bwegoogtargetencbitratemin: {
        type: Sequelize.DOUBLE
    },
    bwegoogtargetencbitratevariance: {
        type: Sequelize.DOUBLE
    },
    bwegoogbucketdelaymean: {
        type: Sequelize.DOUBLE
    },
    bwegoogbucketdelaymax: {
        type: Sequelize.DOUBLE
    },
    bwegoogbucketdelaymin: {
        type: Sequelize.DOUBLE
    },
    bwegoogbucketdelayvariance: {
        type: Sequelize.DOUBLE
    },
    bwegoogtransmitbitratemean: {
        type: Sequelize.DOUBLE
    },
    bwegoogtransmitbitratemax: {
        type: Sequelize.DOUBLE
    },
    bwegoogtransmitbitratemin: {
        type: Sequelize.DOUBLE
    },
    bwegoogtransmitbitratevariance: {
        type: Sequelize.DOUBLE
    },
    bweavailableoutgoingbitratemean: {
        type: Sequelize.DOUBLE
    },
    bweavailableoutgoingbitratemax: {
        type: Sequelize.DOUBLE
    },
    bweavailableoutgoingbitratemin: {
        type: Sequelize.DOUBLE
    },
    bweavailableoutgoingbitratevariance: {
        type: Sequelize.DOUBLE
    },
    bweavailableincomingbitratemean: {
        type: Sequelize.DOUBLE
    },
    bweavailableincomingbitratemax: {
        type: Sequelize.DOUBLE
    },
    bweavailableincomingbitratemin: {
        type: Sequelize.DOUBLE
    },
    bweavailableincomingbitratevariance: {
        type: Sequelize.DOUBLE
    },
    statsmeanroundtriptime: {
        type: Sequelize.INTEGER
    },
    stunrttinitial30smean: {
        type: Sequelize.INTEGER
    },
    stunrttinitial30smax: {
        type: Sequelize.INTEGER
    },
    statsmeanreceivingbitrate: {
        type: Sequelize.INTEGER
    },
    statsmeansendingbitrate: {
        type: Sequelize.INTEGER
    },
    batterylevelbegintime: {
        type: Sequelize.BIGINT
    },
    batterylevelendtime: {
        type: Sequelize.BIGINT
    },
    batterylevelbegin: {
        type: Sequelize.DOUBLE
    },
    batterylevelend: {
        type: Sequelize.DOUBLE
    },
    bytestotalsent: {
        type: Sequelize.DOUBLE
    },
    bytestotalreceived: {
        type: Sequelize.DOUBLE
    },
    direction: {
        type: Sequelize.STRING
    },
    numberofstats: {
        type: Sequelize.INTEGER
    },
    duration: {
        type: Sequelize.INTEGER
    },
    audiolevelmean: {
        type: Sequelize.DOUBLE
    },
    audiolevelmax: {
        type: Sequelize.DOUBLE
    },
    audiolevelmin: {
        type: Sequelize.DOUBLE
    },
    audiolevelvariance: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterreceivedmean: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterreceivedmax: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterreceivedmin: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterreceivedvariance: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterbuffermsmean: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterbuffermsmax: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterbuffermsmin: {
        type: Sequelize.DOUBLE
    },
    audiogoogjitterbuffermsvariance: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermsmean: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermsmax: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermsmin: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermsvariance: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermsskewness: {
        type: Sequelize.DOUBLE
    },
    audiogoogpreferredjitterbuffermskurtosis: {
        type: Sequelize.DOUBLE
    },
    audiogoogcurrentdelaymsmean: {
        type: Sequelize.DOUBLE
    },
    audiogoogcurrentdelaymsmax: {
        type: Sequelize.DOUBLE
    },
    audiogoogcurrentdelaymsmin: {
        type: Sequelize.DOUBLE
    },
    audiogoogcurrentdelaymsvariance: {
        type: Sequelize.DOUBLE
    },
    audiopacketssentmean: {
        type: Sequelize.DOUBLE
    },
    audiopacketssentmax: {
        type: Sequelize.DOUBLE
    },
    audiopacketssentmin: {
        type: Sequelize.DOUBLE
    },
    audiopacketssentvariance: {
        type: Sequelize.DOUBLE
    },
    audiobytessentmean: {
        type: Sequelize.DOUBLE
    },
    audiobytessentmax: {
        type: Sequelize.DOUBLE
    },
    audiobytessentmin: {
        type: Sequelize.DOUBLE
    },
    audiobytessentvariance: {
        type: Sequelize.DOUBLE
    },
    audiopacketsreceivedmean: {
        type: Sequelize.DOUBLE
    },
    audiopacketsreceivedmax: {
        type: Sequelize.DOUBLE
    },
    audiopacketsreceivedmin: {
        type: Sequelize.DOUBLE
    },
    audiopacketsreceivedvariance: {
        type: Sequelize.DOUBLE
    },
    audiobytesreceivedmean: {
        type: Sequelize.DOUBLE
    },
    audiobytesreceivedmax: {
        type: Sequelize.DOUBLE
    },
    audiobytesreceivedmin: {
        type: Sequelize.DOUBLE
    },
    audiobytesreceivedvariance: {
        type: Sequelize.DOUBLE
    },
    audiopacketslostmean: {
        type: Sequelize.DOUBLE
    },
    audiopacketslostmax: {
        type: Sequelize.DOUBLE
    },
    audiopacketslostmin: {
        type: Sequelize.DOUBLE
    },
    audiopacketslostvariance: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthsentmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthsentmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthsentmean: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightsentmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightsentmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightsentmean: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthinputmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthinputmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthinputmean: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightinputmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightinputmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightinputmean: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthreceivedmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthreceivedmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframewidthreceivedmean: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightreceivedmax: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightreceivedmin: {
        type: Sequelize.DOUBLE
    },
    videogoogframeheightreceivedmean: {
        type: Sequelize.DOUBLE
    },
    videogooginterframedelaymaxmax: {
        type: Sequelize.DOUBLE
    },
    videogooginterframedelaymaxmin: {
        type: Sequelize.DOUBLE
    },
    videogooginterframedelaymaxmean: {
        type: Sequelize.DOUBLE
    },
    videopacketssentmean: {
        type: Sequelize.DOUBLE
    },
    videopacketssentmax: {
        type: Sequelize.DOUBLE
    },
    videopacketssentmin: {
        type: Sequelize.DOUBLE
    },
    videopacketssentvariance: {
        type: Sequelize.DOUBLE
    },
    videobytessentmean: {
        type: Sequelize.DOUBLE
    },
    videobytessentmax: {
        type: Sequelize.DOUBLE
    },
    videobytessentmin: {
        type: Sequelize.DOUBLE
    },
    videobytessentvariance: {
        type: Sequelize.DOUBLE
    },
    videopacketsreceivedmean: {
        type: Sequelize.DOUBLE
    },
    videopacketsreceivedmax: {
        type: Sequelize.DOUBLE
    },
    videopacketsreceivedmin: {
        type: Sequelize.DOUBLE
    },
    videopacketsreceivedvariance: {
        type: Sequelize.DOUBLE
    },
    videobytesreceivedmean: {
        type: Sequelize.DOUBLE
    },
    videobytesreceivedmax: {
        type: Sequelize.DOUBLE
    },
    videobytesreceivedmin: {
        type: Sequelize.DOUBLE
    },
    videobytesreceivedvariance: {
        type: Sequelize.DOUBLE
    },
    videopacketslostmean: {
        type: Sequelize.DOUBLE
    },
    videopacketslostmax: {
        type: Sequelize.DOUBLE
    },
    videopacketslostmin: {
        type: Sequelize.DOUBLE
    },
    videopacketslostvariance: {
        type: Sequelize.DOUBLE
    },
    videogoogcpulimitedresolutionmean: {
        type: Sequelize.DOUBLE
    },
    videogoogcpulimitedresolutionmax: {
        type: Sequelize.DOUBLE
    },
    videogoogcpulimitedresolutionmin: {
        type: Sequelize.DOUBLE
    },
    videogoogcpulimitedresolutionmode: {
        type: Sequelize.DOUBLE
    },
    videogoogbandwidthlimitedresolutionmean: {
        type: Sequelize.DOUBLE
    },
    videogoogbandwidthlimitedresolutionmax: {
        type: Sequelize.DOUBLE
    },
    videogoogbandwidthlimitedresolutionmin: {
        type: Sequelize.DOUBLE
    },
    videogoogbandwidthlimitedresolutionmode: {
        type: Sequelize.DOUBLE
    },
    qpsum: {
        type: Sequelize.DOUBLE
    },
    framecount: {
        type: Sequelize.DOUBLE
    },
    audiocodec: {
        type: Sequelize.STRING
    },
    videocodec: {
        type: Sequelize.STRING
    },
    websocketconnectiontime: {
        type: Sequelize.INTEGER
    },
    sendingduration: {
        type: Sequelize.INTEGER
    },
    websocketerror: {
        type: Sequelize.STRING
    },
    active: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: 'features',
    schema: 'rtc_stats',
    timestamps: false
});
Feature.removeAttribute('id');

module.exports = function(config) {
    return {
        put: function(pageUrl, clientId, connectionId, clientFeatures, connectionFeatures, streamFeatures) {
            const d = new Date().getTime();
            const item = {
                date: d - (d % (86400 * 1000)), // just the UTC day
                datetime: d,
                clientid: clientId,
                connectionid: clientId + '_' + connectionId,
                pageurl: pageUrl,
            };

            _.forEach(clientFeatures, (value, key) => {
                item[key.toLowerCase()] = value;
            });
            _.forEach(connectionFeatures, (value, key) => {
                item[key.toLowerCase()] = value;
            });
            _.forEach(streamFeatures, (value, key) => {
                item[key.toLowerCase()] = value;
            });

            Feature.create(item);
        }
    };
};
