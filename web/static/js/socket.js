// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "web/static/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/my_app/endpoint.ex":
import {Socket} from "phoenix"

class OurSocket {
  static init() {
    var $name = $('#username');
    var $msgBody = $('#message');
    var $msgs = $('#messages');

    let socket = new Socket("/socket");
    socket.connect();
    socket.onClose( e => console.log("Closed connection"));

    var channel = socket.channel('rooms:lobby', {});
    channel.join()
      .receive( 'ok', () => console.log('looks good'))
      .receive( 'error', () => console.log('connection error'));

    $msgBody.off("keypress")
    .on("keypress", e => {
      if (e.keyCode === 13) {
        channel.push('new:message', {
          user: $name.val(),
          body: $msgBody.val()
        });
        $msgBody.val('');
      }
    });

    channel.on( "new:message", msg => {
      $msgs.append('<p>' + msg.user + ': ' + msg.body + '</p>')
    } )
  }
}

$( () => OurSocket.init() )

export default OurSocket
