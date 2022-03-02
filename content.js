if(typeof delay_time=="undefined"){
var delay_time = 1000;
}
else{
    delay_time=1000
}
function handle_data(phone,message){
    if(phone.charAt( 0 )=="0"){
        phone=phone.substring(1)
    }


      handle_whatsapp(phone,message)
}

function handle_chat(phone,message){
    
    input_elem=document.querySelector("#app > div._1ADa8._3Nsgw.app-wrapper-web.font-fix.os-win > div._1XkO3.two > div._3ArsE > div.ldL67._2i3T7 > span > div._1N4rE > span > div.g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area > div:nth-child(2) > div > label > div > div._13NKt.copyable-text.selectable-text")
    if(input_elem!=null){
    input_elem.focus();
    input_elem.click();
    

    var event = new InputEvent('input', {
        bubbles: true
      });
    input_elem.textContent=phone
    input_elem.dispatchEvent(event);
    
    setTimeout(handle_click.bind(this,message),delay_time)
}
}
function handle_click(message){
    
        button_elem=document.querySelector("#app > div._1ADa8._3Nsgw.app-wrapper-web.font-fix.os-win > div._1XkO3.two > div._3ArsE > div.ldL67._2i3T7 > span > div._1N4rE > span > div.g6kkip0l.p357zi0d.f8m0rgwh.ppled2lx.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r.lhggkp7q.qq0sjtgm.ln8gz9je.tm2tP.copyable-area > div._3Bc7H.KPJpj > div > div > div > div:nth-child(2) > div > div")
        if (button_elem!=null){
        button_elem.click();
        setTimeout(sendMessage.bind(this,message),delay_time)
        }
        
}
function sendMessage (message) {
    window.InputEvent = window.Event || window.InputEvent;
  
    var event = new InputEvent('input', {
      bubbles: true
    });
  
    var textbox = document.querySelector('#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text');
    if (textbox!=null){
    textbox.focus();
    textbox.click();

    textbox.textContent = message;

    c=textbox.dispatchEvent(event);
    document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div._3HQNh._1Ae7k>button").click();
    
}
}
function handle_whatsapp(phone,message){
    check_selector=document.querySelector("#app > div._1ADa8._3Nsgw.app-wrapper-web.font-fix.os-win > span:nth-child(3) > div._1N4rE > div > div:nth-child(2) > div > div._1w-Ol > div._2OBzR > div > div:nth-child(5) > div > span")
    if(check_selector){
        check_selector.click();
    }
    window.InputEvent = window.Event || window.InputEvent;

    button_elem=document.querySelector("#side > header > div._3yZPA > div > span > div:nth-child(2) > div > span")
    button_elem.click()


setTimeout( handle_chat.bind(this,phone,message)
,delay_time)
    



}


chrome.storage.local.get("data",function(items){
handle_data(items.data.phone,items.data.message)
})