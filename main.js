var SpeechRecognition = window.webkitSpeechRecognition;
var content;
var recognition = new SpeechRecogniton();

function start() {
    recognition.start();
} recognition.onresult = function (event){
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content = "selfie"){
        speak();
    }
}
function speak(){
    var synth = window.speechSynth;
    webcam.attach(camera);
    speak_data = "taking your next seflie in 10 seconds";
    var utterThis = new SpeechSynthesisVoice(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
{

    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisVoice(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{

    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 15 seconds";
    var utterThis = new SpeechSynthesisVoice(speak_data);
    synth.speak(utterThis);
}, 10000);

setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();

}, 15000);


}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_quality: 90
});






function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';

        }

        if(img_id=="selfie2"){
            document.getElementsById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';

        }
       
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';

        }
    });
}