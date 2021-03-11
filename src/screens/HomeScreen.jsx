import React from 'react';
import Carousel from '../components/Carousel';

export default function HomeScreen() {
  // replace these values with those generated in your TokBox Account
  var apiKey = "47156634";
  var sessionId = "1_MX40NzE1NjYzNH5-MTYxNTQ3MzMxODIyMH55UnFKandZNUJoeHNYVy9OYjBKcmp0elp-fg";
  var token = "T1==cGFydG5lcl9pZD00NzE1NjYzNCZzaWc9YTY1YzU3MDg1NWE3OGI4MjRjOGM3MTNiNzQ5NTg2ODA3NjFmYTYxNDpzZXNzaW9uX2lkPTFfTVg0ME56RTFOall6Tkg1LU1UWXhOVFEzTXpNeE9ESXlNSDU1VW5GS2FuZFpOVUpvZUhOWVZ5OU9ZakJLY21wMGVscC1mZyZjcmVhdGVfdGltZT0xNjE1NDczMzc3Jm5vbmNlPTAuOTUyNjU2NjI2OTY1MzM0NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjE1NDk0OTc4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

  // (optional) add server code here
  initializeSession();
  // Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = window.OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = window.OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
  return (
    <div>
      <div className="container-carousel">
        <h2>Senast inkommet</h2>
        {/* <Carousel/> */}
        {/* <div id="otEmbedContainer" style={{width:'800px', height:'640px'}}>
          </div>  */}
          
      <div id="videos">
          <div id="subscriber"></div>
          <div id="publisher"></div>
      </div>
      </div>
    </div>
  )
}
