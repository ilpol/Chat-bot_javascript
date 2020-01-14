(function () {
    var Message;
    var Start_it;
    Start_it = 0;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage,messageText,reply,n1,n2,op,res;
        message_side = 'left';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            
            var $messages, message;
           
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
    
            $messages = $('.messages');
          
            message_side = message_side === 'left' ? 'right' : 'left';
     
            message = new Message({
                text: text,
                message_side: message_side
            });
     
            message.draw();
    
            var scroll=document.getElementById("scroll");
      
             scroll.scrollTop = scroll.scrollHeight;
    
            
        };
        $('.send_message').click(function (e) {
        	run_it();
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
            	run_it();
            }
        });
        function run_it(){

              messageText = getMessageText();
              sendMessage(messageText);                 

              if(messageText!="/start" && Start_it==0){
              	sendMessage('Введите команду /start для начала общения');
              }
 
              else  if(messageText=="/start"){
                   
                  sendMessage('Привет, меня зовут Чат-бот, а как зовут тебя?');
                  Start_it = 1;
              }

              else if(messageText=="/weather"){

                                function weatherBalloon( cityID ) {
                                          var key = 'paste your key here';
                                          fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key) 
                                          .then(function(resp) { return resp.json() }) // Convert data to json
                                          .then(function(data) {
                                          drawWeather(data); // Call drawWeather
                                          })
                                          .catch(function() {
                                          // catch any errors
                                          });
                                          function drawWeather( d ) {
                                                    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
                                                    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
                                                    sendMessage("Погода в " + d.name + " " + celcius + '&deg;');  
                                          }
                                }
             
                                weatherBalloon( 524901 );


              }
              else if((messageText).match(/name:/)){
                    reply = "Привет, " + messageText.substring(6) + ", приятно познакомиться. Я умею считать, введи числа, которые надо посчитать."
                    sendMessage(reply);

              }

              else if((messageText).match(/number:/)){

                    n1 = Number(messageText.substring(
                            messageText.lastIndexOf(":") + 1, 
                            messageText.lastIndexOf(",")
                          ));
                    n2 = Number(messageText.substring(
                            messageText.lastIndexOf(",") + 1, 
                            messageText.length
                          ));

                    sendMessage("Ввдедите одно из действий: -,+,*,/");

              }    

              else if(messageText=="/stop"){
                  sendMessage('Всего доброго, если хочешь поговорить, пиши /start');
                  Start_it=0;
              }

              else if(messageText=='-'){

                    res = n1-n2;
                    sendMessage(""+res);

              }

              else if(messageText=='+'){

                    res = n1+n2;
                    sendMessage(""+res);

              }

              else if(messageText=='*'){

                    res = n1*n2;

                    sendMessage(""+res);

              }
              else if(messageText=='/'){

                    res = n1/n2;
                    sendMessage(""+res);

              }
              
              else{
                sendMessage('Я не понимаю, введите другую команду!');
              }

                return 0;           
            
        };       
    });
}.call(this));
